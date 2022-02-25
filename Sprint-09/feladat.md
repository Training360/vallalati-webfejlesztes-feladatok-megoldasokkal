# 9. Sprint 

## 1. Story 
Egy admin felületet kell készítened. Egy teljesen új oldalt, ami nem kerül bele a meglévőbe. 
Egyenlőre a vásárlók kezelése a cél, de bővíthetőre kell csinálni.  
Egyenlőre hozz létre egy tömböt, ami objektumokat tartalmaz. 
Ezek az objektumok vásárlók lesznek. Az alapvető kulcsaik: id, name, email, address és phone.  

Tehát kell egy dinamikus táblázat, a JAVASCRIPT generálja majd a sorokat és a 
cellákat.

A táblázat, illetve az admin oldal formázása rád van bízva. 

## 2. Story 
Minden sor végére, az utolsó cellába két gomb. Egy szerkesztés és egy törlés. A szerkesztés lehet info, a törlés danger stílusú. Ezekre egy-egy eseménykezelőt be kell állítanod.

A Törlés gombra kattintva azonnal, megerősítés nélkül törlődjön (a megerősítés opcionális) ki az adott user adata a szerverről, és kerüljön eltávolításra a DOM-ból is.

A Szerkesztés gombra kattintva a user adatai, az id kivételével módosíthatók lesznek a táblázaton belül. Egyszerű text input mezőket használj. A Szerkesztés gombra kattintás után ez a gomb eltűnik, ugyanúgy, mint a Törlés gomb, helyette egy Mentés, és Visszavonás gomb jelenjen meg.

A Mentés gombra kattintva validálni kell a beírt adatokat. (Ne legyen üres)
Amennyiben az adatok validak JavaScriptben, mind DOM-ban mentésre kerüljenek.
Egyszerre több üzenet is látszódhat.

Amíg egy user adatai szerkesztés alatt állnak, ne lehessen más user adatait szerkeszteni, sem törölni. 

A Visszavonás gombra kattintva a user eredeti, tehát a szerkesztés előtti adatok íródjanak vissza. Újra a Szerkesztés, és Törlés gomb látszódjon.

## 3. Story 
Lehetőség legyen új felhasználók létrehozására. Ehhez egy formot kell készíteni.

Új felhasználók adatainak felvitelekor is legyen validálás.

Sikeres mentés estén a felhasználó adatai jelenjenek meg a táblázat tetején. Innen kezdve szerkeszthető, törölhető az új user is.