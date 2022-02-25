# 8. Sprint 

## 1. Story 
Az időjárás widgetheztartozó adatok megérkeztek. Minden adat egyetlen objektumként érkezik, refaktoráld az eddigi kódod, hogy a kapott objektumon dolgozzon! 
A getWeatherData() nevű függvényt ha meghívod, megkapod az adatokat.

```javascript
function getWeatherData() {
    return {
        weathers: [
            {
                dayNumber: 0,
                temperature: -11.2
            },
            {
                dayNumber: 1,
                temperature: 14.4
            },
            {
                dayNumber: 2,
                temperature: 13.0
            },
            {
                dayNumber: 3,
                temperature: 17.3
            },
            {
                dayNumber: 4,
                temperature: 21.7
            },
            {
                dayNumber: 5,
                temperature: 18.2
            },
            {
                dayNumber: 6,
                temperature: 28.0
            }
        ],
        offers: [
            {
                upperLimit: 0,
                offerMessage: "Ma forró csokit is árusítunk"
            },
            {
                upperLimit: 15,
                offerMessage: "Melegedj át egy teával nálunk!"
            },
            {
                upperLimit: 20,
                offerMessage: "Ma finom sütivel várunk"
            },
            {
                upperLimit: 25,
                offerMessage: "Ma fagyit is kínálunk"
            },
            {
                upperLimit: 50,
                offerMessage: "Hűsítsd le magad egy jéghideg limonádéval!"
            }
        ]
    }
}
```

## 2. Story 
Egyre több külföldi látogatja meg a hamburgerező weboldalát, ezért jó lenne, ha a hőmérsékleti adatok nem csak Celsius-fokban, hanem Farenheitben is megjeleníthetők lennének. Egészítsd ki a widgetet egy rádiógombbal, amellyel váltani lehet a két mértékegység között, és az adatok csak a kiválasztottban jelennének meg.

Most már nagyon sok olyan függvény van, amely a kapott adatokon dolgozik. Célszerűbb ezeket az adattal egységbe foglalni, mondjuk egy objektumba. A  lekért adat az objektum tulajdonsága, a rajta dolgozó kereső és statisztikai függvények pedig az objektum metódusai lennének. Ugyanígy az átváltást végző függvény is. Azt is az objektumban tárold, hogy a hőmérsékleti adatokat milyen mértékegységben kérik és annak mi a jele, hogy minden statisztikai metódus már eleve abban adja vissza az adatokat és megjelenítéskor tudja, milyen mértékegységet kell a számok mellé írni.