# Webáruház

## Specifikáció
Jelenítsünk meg a listánkat kártyákban, majd a listát tudjuk rendezni növekvő és csökkenő sorrendben, gombok segítségével kosár elembe pakolni a lista indexedik elemét, azt megjeleníteni és gombnyomásra törölni, keresési szöveg alapján szűrni a listát, 

## Metódusok

1. **kartyaMegjelenit(lista) | egy listát vár, amit majd egy ciklus segítségével bepakol egy kártya divbe. Visszatér egy txt stringel.

2. **arRendezes(lista, irany) | egy listát vár, amit majd ár szerint fog rendezni. Visszatér egy ár rendezett listával.

3. **nevRendezes(lista, irany) | egy listát vár, amit majd név szerint fog rendezni. Visszatér egy név szerint rendezett listával.

4. **szures(lista, keresoSzoveg) | A paraméterként kapott szöveg szerint rendezi a listát. Visszatér egy rendezett listával

5. **tablazat(lista) | kosárlistát várja, egy txtvel tér vissza, akkor hívjuk meg amikor rákattintun

6. **kosarbaRak(termekLista, id) |  belerakja a terméklistából az id-edik elemt a kosárlistába, visszatér a kosárListával

7. **torol(lista, id) | kitörli az id-edik elemet a kosárlistából, visszatér a törölt kosárListával.

8. **ujAdat() | az inputokból, ha az összes adat valid, kiprinteli.
