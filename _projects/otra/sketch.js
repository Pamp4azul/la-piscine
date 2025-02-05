let videomono;
let soundo;

function preload() {
  soundo = loadSound('tos.mp3');
}

function setup() {
  let canvas = createCanvas(700, 700);
  canvas.parent('div-sketch');
 
  videomono = createVideo('monkeytrouble3.mp4');
  
  soundo.loop();
  soundo.play();
}

function draw() {
  image(videomono, 0, 0); // dibuja una segunda copia en el lienzo.
  videomono.loop();
}


/* 
modelo:
/ / / / / / / / 
/ / / / / / / /
h h h h h h h h
t t t t t t t t
t t t t t t t t
p p p p p p p p
s s s s s s s s
: : : : : : : :
/ / / / / / / /
/ / / / / / / /
e e e e e e e e
d d d d d d d d
i i i i i i i i
t t t t t t t t
o o o o o o o o
r r r r r r r r
. . . . . . . . 
p p p p p p p p 
5 5 5 5 5 5 5 5 
j j j j j j j j 
s s s s s s s s 
. . . . . . . . 
o o o o o o o o 
r r r r r r r r 
g g g g g g g g 
/ / / / / / / / 
p p p p p p p p 
o o o o o o o o 
n n n n n n n n 
t t t t t t t t 
o o o o o o o o 
r r r r r r r r 
i i i i i i i i 
e e e e e e e e 
r r r r r r r r 
o o o o o o o o 
p p p p p p p p 
e e e e e e e e 
d d d d d d d d
r r r r r r r r
o o o o o o o o 
/ / / / / / / / 
s s s s s s s s 
k k k k k k k k 
e e e e e e e e 
t t t t t t t t 
c c c c c c c c 
h h h h h h h h 
e e e e e e e e 
s s s s s s s s 
/ / / / / / / / 
b b b b b b b b 
L L L L L L L L 
U U U U U U U U 
j j j j j j j j  
X X X X X X X X  
C C C C C C C C 
J J J J J J J J 
U U U U U U U U 
4 4 4 4 4 4 4 4 
*/


