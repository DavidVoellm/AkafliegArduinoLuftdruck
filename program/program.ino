#include <LiquidCrystal.h>
LiquidCrystal lcd(7, 8, 9, 10, 11, 12);
#define knopfPin 3
#define pressurePin1 A0
#define pressurePin2 A1
bool gedrueckt = false;
String content[] = {"",""};

void setup() {
  // put your setup code here, to run once:
  lcd.begin(16, 2);
  Serial.begin(9600);
}
void setDisplay(int displayID, String text){
  if ( content[displayID] == text ) return;
  content[displayID] = text;
  lcd.setCursor(0,displayID);
  lcd.print(text+"                       ");
}
void setDisplay(int displayID, float text)
  {return setDisplay(displayID, (String)text);}

void setDisplay(int displayID, int text)
  {return setDisplay(displayID, (String)text);}

float druckInBar(int pin){ // Pbar = (10*Vout/Vs +0.95)/9
  float pressure = analogRead(pin);
  return (10*pressure/1024.0+0.95)/9.0;
}
void durchlauf(){
  float pressure1 = druckInBar(pressurePin1);
  float pressure2 = druckInBar(pressurePin2);
  float difference = pressure2 - pressure1;
  setDisplay(0,"Diff.:"+(String)difference);
  setDisplay(1,"P1:"+(String)pressure1+"|P2:"+(String)pressure2);
}


void loop() {
  gedrueckt = digitalRead(knopfPin);
  if (gedrueckt){
    while(gedrueckt){gedrueckt = digitalRead(knopfPin);}
    durchlauf();
  }
}
