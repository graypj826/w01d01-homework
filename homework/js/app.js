/* . What is the difference between **interpolation** and **concatenation**? Give an example of each.
interpolation is the process where a string is evaluated and placeholders are replaced with values.

e.g.

Concatenation is combinging strings together end to end with "+" operator. An exzample would be "Hello" + "World"

What does the acronym **DRY** stand for? Why should we pay attention to it? What programming tools have we learned to write **DRY** code?

DRY stands for "dont repeat yourself" and is intended to keep code clean and avoid repetition. */


// Section 2 
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

console.log (a < b);
console.log (c > d);
console.log ('Name' == 'Name');
console.log (a < b < c); 
console.log (a + a < d);
console.log (e == 'Kevin');
console.log (48 == '48' );

//Section 3
/*. while (true) {
	console.log('Do not run this loop');
}

This is an infinite loop because there is no end

const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}

This is an infinite loop because even though the function is intended to reasign the value of runProgram, 
it is a const which cannot be reassigned. 

let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);

produces 19, different than expectd bc A is a string and not a number.
Does += just add each round together? It looks like it doesn't matter what the variable type is.
It's not clear why it's producing a number. Logging letters also produces AAAAA so I'm not sure what it's logging.


SECTION 4

For loops have a set number of times it will run, but while loops will run until the condition changes. So For 
loops are better when you know what you want and while loops are better for when you don't. 
See https://www.codecademy.com/en/forum_questions/510e3c1a3011b8fa25005255

for loops syntax : 
for (statement 1; statement 2; statement 3) {
    code block to be executed
}

statement 1 is the executor and set variable before the loop runs (e.g. i=0)
statement 2 is the condition that determines how long the loop will run (e.g. i<5)
statemet 2 evaluates the condition of the initial variable, if it returns false the loop ends.
statement 3 is the incrementor (or executed every time) (e.g. i++)


*/

for (let i=999; i > 0; i--) {
	console.log(i);
}

for (let i=1; i <= 10; i++) {
	console.log("The value of i is: " + i + " of 10");
}

/* SECTION 5

terminal practice:
.
└── galaxy_far_far_away
    ├── tattooine
    │   └── storm_trooper.txt
    ├── tie_fighter_1
    │   └── darth_vader.txt
    └── yavin_4
        ├── millenium_falcon
        │   ├── chewbaca.txt
        │   └── han_solo.txt
        ├── princess_leia.txt
        └── x_wing
            ├── luke.txt
            └── the_force.txt



