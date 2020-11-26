
# How to run this example

  

Open index.html in your browser to test circle rotation.

In console window of browser, you can also test sum function by typing

`surrounding_sum(45)` to test for input 45.

  

To run tests, use:

  

> npm install mocha

  

and then type:

  

> npm test

  

It will automatically run tests for you.

  
  Zadatci:
```
1.Zadatak

  

Imate matricu brojeva 10x10 u rasponu od 1 do 100 (matrica je

dvodimenzionalni niz. Primjer niza u nastavku).

[

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

[11, 12, 13, 14, 15, 16, 17, 18, 19, 20],

[21, 22, 23, 24, 25, 26, 27, 28, 29, 30],

[31, 32, 33, 34, 35, 36, 37, 38, 39, 40],

[41, 42, 43, 44, 45, 46, 47, 48, 49, 50],

[51, 52, 53, 54, 55, 56, 57, 58, 59, 60],

[61, 62, 63, 64, 65, 66, 67, 68, 69, 70],

[71, 72, 73, 74, 75, 76, 77, 78, 79, 80],

[81, 82, 83, 84, 85, 86, 87, 88, 89, 90],

[91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

]

Potrebno je napraviti funkciju koja ce izračunati sumu 8 brojeva koji

okružuju broj koji je proslijeđen funkciji. U sumu se ubraja i proslijeđeni

broj.

Ukoliko broj nema 8 brojeva koji ga okružuju, ne ubrajaju se u sumu.

Primjer funkcije: sum(45) -> 405

Brojevi koji okružuju broj 45 su: 34, 35, 36, 44, 46, 54, 55, 56. Suma ovih

brojeva je 360. Na ovu sumu se dodaje broj koji se proslijedio funkciji (45) i

to nam daje rezultat 405.

  

Za izradu funkcije koristiti Javascript.

  

2.Zadatak

  

Potrebno je napraviti kružni UI element koji ima beskonačno rotirajući okvir

napravljen od isprekidanih linija u dvije boje. Na klik elementa smjer

rotacije se mijenja.

Primjer traženog ponašanja (boje i tekst su proizvoljni):

https://imgur.com/a/gGw5J6f

  

Animaciju okvira je potrebno implementirani kroz CSS.

```