console.log("Hello from Index.js");


/* 

//data Type

var --> It's allows Hoisting,reassignment,redeclaration       --> Function/Global Scope
let-- > It's allows reassignment,redeclaration                -->Block Scope
const --> It's not allows Hoisting,reassignment,redeclaration -->Block Scope

1.Hoisting

In JavaScript, hoisting refers to the built -in behavior of the language through which declarations of functions, variables,
and classes are moved to the top of their scope – all before code execution.


2.What is JS?

it's Asynchronize single threats language



3.What is call back Function?

call back is a function that passed as an argument to Another function and its Executed at later point of time or as a response to a event.

*/


let a = 10;

var b = 10;

var k;

const c = 9;

// console.log(a, b, c);

function check() {
    k = 100;
    console.log("Sum of 3 Numbers:" + (add() + k));
}

//function to Add 2 variable
function add() {
    let a = 10;
    var d = 10;
    return b = d + b;
}

check();

console.log(k);






//Query Selector

let title = document.querySelector("h1");

title.textContent = "Hello NAGARASU P";

console.log(title)




let button1 = document.querySelector(".btn1");

button1.addEventListener("click", Click);

let button2 = document.querySelector(".btn2");

button2.addEventListener("click", Click2);

function Click() {
    console.log('click1')
}


function Click2() {
    console.log('click2')
}





//Change Title Color

let h1 = document.querySelector("h1");

let color = document.querySelector(".colorchangeBtn");
color.addEventListener("click", ColorChange);

function ColorChange() {
    h1.style.color = 'gold' ? 'red' : "black";
}

//Higher Order  function


function HigherOrder(h) {
    h();
}

function InnerFunction() {
    console.log("Hello Higher Order Function ");
}

HigherOrder(InnerFunction);



//Arrow Function

HigherOrder = (h) => { h() };

InnerFunction = () => {
    console.log("Hello Arrow Function ");
}

HigherOrder(InnerFunction);




//Array in JS

var array = [1, 2, 3, 4, 5]

console.log(array);

console.log("Print Array Element Using MAP Function")

array.map((e) => {
    console.log(e);
})

console.log("Print Array Element Using FOR LOOP")

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
var size = array.length;

console.log("Size Of Array:" + size)

console.log("Print Array Element Using While LOOP")
while (size != 0) {
    console.log(array[size - 1]);
    size--;
}


//Splice and Slice Method

/*
The splice() method adds new items to an array.

The slice() method slices out a piece of an array.
*/


array.splice(2, 0, 0, 7) //With Parameters

console.log("After Splice: " + array)

// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

array.splice(0, 2);//without Parameters

console.log("After Splice: " + array)

// Slice out a part of an array starting from array element 1 
var s = array.slice(1);

console.log("After Slice: " + s)


//Shift operation in JS

var Shift = array.shift()

console.log(Shift)

array.unshift(6);

console.log(array)



//Object in JS

console.log("")
console.log("")
console.log("Now See the Objects")

var student = {
    name: "NAGARASU P",
    age: 21,
    dept: "IT",
    status: "Active"
}


console.log(student);

for (var key in student) {
    console.log(student[key]);   //Used to print the Values
}

//Arrays Of Objects

var Students = [
    {
        name: "NAGARASU P",
        age: 21,
        dept: "IT",
        status: "Active",
        salary: "25k"
    },
    {
        name: "Siddhu VJ",
        age: 40,
        Job: "Youtuber",
        status: "Active",
        salary: "1.45L"
    }
]


console.log("")
console.log("")
console.log("Display The Users")
console.log("")

var tableBody = document.getElementById("studentTableBody");

// Loop through Students array to populate the table
for (var i = 0; i < Students.length; i++) {
    var row = document.createElement("tr");

    // Loop through properties of each student
    for (var key in Students[i]) {
        var cell = document.createElement("td");
        cell.textContent = Students[i][key];
        row.appendChild(cell);
    }

    tableBody.appendChild(row);
}

//Use for Loop to print the Array Of Object
for (var i = 0; i < Students.length; i++) {
    for (var key in Students[i]) {
        console.log(key + " : " + Students[i][key]);   //Used to print the Values
    }
    console.log("")
}

//Use Map Function to Print the Array Object
Students.map((e) => {
    console.log(e.name + " " + e.age + " " + e.dept + " " + e.salary + " " + e.status);
})


//Filter Function  {print the user age below 30}

Students.filter((e) => e.age < 30).map((e) => { console.log(e.name); });



//Home Work


// Category subCategory Duration Task

const WorkDetails = [
    {
        Category: "Work",
        SubCategory: "Meeting",
        Duration: "00:40:21",
        Task: "Client Meeting"
    },
    {
        Category: "Personal Space",
        SubCategory: "-",
        Duration: "00:16:37",
        Task: "-"
    },
    {
        Category: "Work",
        SubCategory: "Project",
        Duration: "02:40:21",
        Task: "Home nav module"
    },
    {
        Category: "Personal Space",
        SubCategory: "-",
        Duration: "00:46:37",
        Task: "-"
    },
    {
        Category: "Work",
        SubCategory: "Project",
        Duration: "01:40:21",
        Task: "Documentation"
    },
    {
        Category: "Work",
        SubCategory: "Meeting",
        Duration: "01:40:21",
        Task: "Daily Scrum"
    },
]

