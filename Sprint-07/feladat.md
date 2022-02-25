# 7. Sprint 

## 1. Story 
A hamburgerező tulajdonosa nagyon elégedett a munkáddal. Most azt szeretné, ha elkészítenél egy időjárás widgetet az oldalára. 
Csak egy heti hőmérsékleti adatait jeleníti majd meg, és azt sem egyszerre. A látogató kiválaszthatja, hogy a hét melyik napja érdekli, és a hozzá tartozó hőmérséklet pedig megjelenne. 

A widgetet a menü felett a headerbe helyezd el.

A bal oldalra tegyél egy lenyíló menüt a hét napjaival, mellé egy gombot _"Mutat"_ felirattal.
Ha a user kiválaszt a lenyílóból egy napot, majd rákattint egy napra, akkor jobb oldalt megjelenik az adott naphoz tartozó hőmérséklet. A hőmérséklet értékek egyenlőre statikus értékek.

## 2. Story 
A hamburgerező tulajdonosa az mindig más és más napi ajánlattal várja a vendégeket. Szeretné, ha ez  a widgeten is megjelenne.   
Az ajánlat nem a naptól, hanem az adott napi hőmérséklettől függ. A napi ajánlat egy bizonyos hőmérsékleti intervallumra él. Például 0 °C alatt forró csoki, míg 0 °C és 15 °C között meleg tea stb.

A határokon lévő értékek mindig az alsóhoz kategóriához tartoznak, tehát pontosan 0 °C esetén még forró csokit, pontosan 15 °C esetén meleg teát adnak. 

Íme a hőmérsékletek és a megjelentendő szövegek: 

- 0: "Ma forró csokit is árusítunk"
- 15: "Melegedj át egy teával nálunk!"
- 20: "Ma finom sütivel várunk"
- 25: "Ma fagyit is kínálunk"
- 50: "Hűsítsd le magad egy jéghideg limonádéval!"

## 3. Story 
Az időjárás widgeten meg kell jeleníteni néhány statisztikai adatot: 
- a heti hőmérsékleti adatok minimumát, maximumát és átlagát
