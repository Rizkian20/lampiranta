pragma solidity ^0.8.15;

contract DataSensor2{
    string sensorsuhuruang;
    string sensorsuhuair;

    function setsensorsuhuruang(string memory _sensorsuhuruang) public{
        sensorsuhuruang = _sensorsuhuruang;
    } 

    function getsensorsuhuruang() public view returns (string memory){
        return sensorsuhuruang;
    }

       function setsensorsuhuair(string memory _sensorsuhuair) public{
        sensorsuhuair = _sensorsuhuair;
    } 

    function getsensorsuhuair() public view returns (string memory){
        return sensorsuhuair;
    }
}
