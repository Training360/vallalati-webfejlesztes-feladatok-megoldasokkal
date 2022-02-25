# 5. Sprint 

## 1. Story 
Készíts egy scriptet, amely elküldés előtt gombnyomásra a megadott adatok alapján kiszámítja a rendelés összértékét, és megjeleníti a gomb mellett.
Az alap hamburger ára 1200 Ft. Ehhez adódik hozzá az extra feltét és a szósz ára, majd szorozd meg annyival, ahány darabot rendeltek.

## 2. Story 
Az űrlap adatainak elküldése még nem történik meg, mivel a gomb egyszerű button típusú, és az ár kiszámítása a click eseményre történik. Sajnos, ilyenkor a böngésző automatikus ellenőrzése nem fut le. A daramszám ellenőrzésénél a min és max attribútumok nem akadályozzák meg, hogy valaki kézzel ne írjon be más értéket, csak a nyilakra kattintva nem lehet kisebbet vagy nagyobbat beállítani.  

Az ár kiszámítása előtt JavaScripttel validáld a beírt adatokat. Amennyiben nem megfelelőek, egy hibaüzenet jeleníts meg a felhasználónak, amely tájékoztatja, hogy melyik mezővel van hiba. Amennyiben minden rendben, csak akkor jelenítsd meg a fizetendő végösszeg.