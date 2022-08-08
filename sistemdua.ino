#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include "DHT.h"
#define DHTPIN D2     
#define DHTTYPE DHT11   

#include <OneWire.h>
#include <DallasTemperature.h>

const char* ssid     = "ZTE_2.4G_Z3AFez";         
const char* password = "yS9RYu2t"; 
const char* host = "192.168.1.6";
const int port = 80;
const int oneWireBus = D3 ;
unsigned long timeout;
String url;

WiFiClient client;

OneWire oneWire(oneWireBus);
DallasTemperature sensors(&oneWire);

DHT dht(DHTPIN, DHTTYPE);

void setup() {

  
  Serial.println(F("DHTxx test!"));
  dht.begin();
  sensors.begin();

  Serial.begin(9600);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) 
  {
     delay(500);
     Serial.print("-");
  }
  
  Serial.println("");
  Serial.println("WiFi connection Successful");
  Serial.print("The IP Address of ESP8266 Module is: ");
  Serial.print(WiFi.localIP());
 }


void suhu() {
  delay(500);
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  float f = dht.readTemperature(true);
  if (isnan(h) || isnan(t) || isnan(f)) {
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }
  float hif = dht.computeHeatIndex(f, h);
  float hic = dht.computeHeatIndex(t, h, false);
  Serial.print(F("Humidity: "));
  Serial.print(h);
  Serial.print(F("%  Temperature: "));
  Serial.print(t);
  Serial.print(F("°C "));
  Serial.print(f);
  Serial.print(F("°F  Heat index: "));
  Serial.print(hic);
  Serial.print(F("°C "));
  Serial.print(hif);
  Serial.println(F("°F"));
}


void suhuair() {
  sensors.requestTemperatures(); 
  float tair = sensors.getTempCByIndex(0);
  Serial.println("Temperature is: ");
  Serial.println(tair);
  }


void loop() {
  suhuair();
  suhu();
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  float tair = sensors.getTempCByIndex(0);
  Serial.println("Data dikirim ke webserver");
  WiFiClient client ;
  const int httpPort = 80;
  Serial.print("connecting to ");
  Serial.println(host);

  if (!client.connect(host, httpPort)) {
    Serial.println("connection failed");
    //return;
  }
  Serial.println("Connection Success");
  url = "/websiteblockchain/api/savedatasuhupow.php?sensorsuhuruang="+String(t)+"°C";
  url += "&sensorsuhuair="+String(tair)+"°C";
  
  Serial.print("Requesting URL: ");
  Serial.println(url);

    client.print(String("GET ") + url + " HTTP/1.1\r\n" +
               "Host: " + host + "\r\n" + 
               "Connection: close\r\n\r\n");
    timeout = millis();
    while (client.available() == 0) {
        if (millis() - timeout > 5000) {
            Serial.println(">>> Client Timeout !");
          client.stop();
          return;
        }
    }
  Serial.println("Data berhasil dikirim");
    while(client.available()){
        String line = client.readStringUntil('\r');
        Serial.print(line);
    }
    Serial.println();
    Serial.println("Closing Connection");
    Serial.println();
    delay(90000);
}
