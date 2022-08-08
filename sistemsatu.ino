#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

#define trigger_pin D6
#define Echo1_pin D1
#define Echo2_pin D3
#define Echo3_pin D5
#define Echo4_pin D7
#define MAXSAMPLE 10

const char* ssid = "ZTE_2.4G_Z3AFez";
const char* password = "yS9RYu2t";

const char* host = "192.168.1.6";
const int port = 80;
const int oneWireBus = D2 ;
unsigned long timeout;
String url;
WiFiClient client;

long duration, duration2, duration3, duration4;
int distance, distance2, distance3, distance4;
int HT, H1, H2, H3, H4;
int samp_h1[10] = {0,0,0,0,0,0,0,0,0,0};
int samp_h2[10] = {0,0,0,0,0,0,0,0,0,0};
int samp_h3[10] = {0,0,0,0,0,0,0,0,0,0};
int samp_h4[10] = {0,0,0,0,0,0,0,0,0,0};
int count = 0;

void setup() {  
    Serial.begin(9600);

    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print("-");
    }

    Serial.println("");
    Serial.println("WiFi connection Successful");
    Serial.print("The IP Address of ESP8266 Module is: ");
    Serial.print(WiFi.localIP());

    pinMode(trigger_pin, OUTPUT);
    pinMode(Echo1_pin, INPUT);
    pinMode(Echo2_pin, INPUT);
    pinMode(Echo3_pin, INPUT);
    pinMode(Echo4_pin, INPUT);

    HT = 80;
}


void SendTriger() {
    digitalWrite(trigger_pin, LOW); 
    delayMicroseconds(1);
    digitalWrite(trigger_pin, HIGH);
    delayMicroseconds(5000);
    digitalWrite(trigger_pin, LOW);
}

// Calculate height
int CalculateHeight(long duration) {
    float distance = duration*0.034/2;
    return HT-distance;
}

// Function to print height data to serial monitor
void Print(float tinggi, String id) {
    Serial.print("Tinggi ");
    Serial.print(id);
    Serial.print(": ");
    Serial.print(tinggi);
    Serial.println(" cm");
}

void Tinggi() {
    delay(500);

    SendTriger();
    duration = pulseIn(Echo1_pin, HIGH);
    H1 = CalculateHeight(duration);
    Print(H1, "1");

    SendTriger();
    duration2 = pulseIn(Echo2_pin, HIGH);
    H2 = CalculateHeight(duration2);
    Print(H2, "2");

    SendTriger();
    duration3 = pulseIn(Echo3_pin, HIGH);
    H3 = CalculateHeight(duration3);
    Print(H3, "3");

    SendTriger();
    duration4 = pulseIn(Echo4_pin, HIGH);
    H4 = CalculateHeight(duration4);
    Print(H4, "4");
}


void loop() {
    float h1 = 0.00;
    float h2 = 0.00;
    float h3 = 0.00;
    float h4 = 0.00;
  
    while (count < MAXSAMPLE){
        Tinggi();
        samp_h1[count] = H1;
        samp_h2[count] = H2;
        samp_h3[count] = H3;
        samp_h4[count] = H4;
        count++;
    }

    WiFiClient client ;
    
    for(int i=0; i<MAXSAMPLE; i++) {
        h1+= samp_h1[i];
    }
    h1 /= MAXSAMPLE;
    
    for(int i=0; i<MAXSAMPLE; i++) {
        h2+= samp_h2[i];
    }
    h2 /= MAXSAMPLE;
    
    for(int i=0; i<MAXSAMPLE; i++) {
        h3+= samp_h3[i];
    }
    h3 /= MAXSAMPLE;
    
    for(int i=0; i<MAXSAMPLE; i++) {
        h4+= samp_h4[i];
    }
    h4 /= MAXSAMPLE;
    

    Serial.print("connecting to ");
    Serial.println(host);

    if (!client.connect(host, port)) {
        Serial.println("connection failed");
        //return;
    }

    Serial.println("Connection Success");
    url = "/websiteblockchain/api/savedatatinggipow.php?sensorU1="+ String(h1)+"cm";
    url += "&sensorU2="+String(h2)+"cm";
    url += "&sensorU3="+String(h3)+"cm";
    url += "&sensorU4="+String(h4)+"cm";

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

    while(client.available()){
        String line = client.readStringUntil('\r');
        Serial.print(line);
    }

    Serial.println();
    Serial.println("Closing Connection");
    Serial.println();
    delay(90000);

    count = 0;
}
