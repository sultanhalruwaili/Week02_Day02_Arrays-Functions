
//>>>>> odd numbers to be those numbers multiplied by two:


const myArray = [2, 3, 4, 5, 6, 7];
function mulitiodd() {
    for (i = 0; i < myArray.length; i++) {
        if (myArray[i] % 2 != 0)
            myArray[i] = myArray[i] * 2;
    }
    console.log(myArray);
}
mulitiodd();

//>>>>even numbers to be those numbers multiplied by two:


const myArray = [2, 3, 4, 5, 6, 7];
function mulitieven() {
    for (i = 0; i < myArray.length; i++) {
        if (myArray[i] % 2 == 0)
            myArray[i] = myArray[i] * 2;
    }
    console.log(myArray);
}
mulitieven();

//>>>>> favorite colors:


let colors = ["green", "black", "blue"];
function color() {
    for (i = 0; i < colors.length; i++)
        console.log('My #', i + 1, colors[i]);
}
color();


//>>>>>>Using push and unshift

const myArray = [2, 3, 4, 5, 6, 7];
function add() {
    console.log(myArray);
    myArray.unshift(1);
    myArray.unshift(0);
    myArray.push(8);
    myArray.push(9);
    console.log(myArray);
}
add();


//>>>> print true if the key number exists in the array, and zero otherwise

const myName = ["sultanh", "moqbel", "alruwaili"];
let nameKey = "sultanh";
let found = false;
function Checkname() {
    for (i = 0; i < myName.length; i++) {

        if (myName[i] == nameKey) {
            found = true;
            break;
        }

    }

    console.log(found)
}
Checkname();


//>>>>> print all the pairs of elements in the array whose sum is equal to the key number



const myNumber = [2, 3, 6, 4, 8];

let numKey = 5;
let found = 0;
function Check() {
    for (i = 0; i < myNumber.length; i++) {
        for (j = 1; j < myNumber.length; j++) {
            found = myNumber[i] + myNumber[j];
            if (found === numKey) {


                console.log('the number is ' + myNumber[i] + ' & ' + myNumber[j] + ' = ', found);

            }
        }
    }
}
Check();
