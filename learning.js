                         // Learning js with Jhankar Mahbub (Batch-03)

                        // For learning more widely, go to MDN Web Docs's website (https://developer.mozilla.org/en-US/docs/Web/JavaScript)

                        // Module-12 
                        
// Video No-03 (======= Variable ========) 
var bananaPrice = 12;
console.log(bananaPrice);

// Video No-04 
var seenAfter = 21;
console.log(typeof seenAfter);


var name = "KolimUddin Zuckerburg";
console.log(typeof name);


var isHot = true;
var isRich = false;
console.log(typeof isHot);

// Video No-05
var myName = 'Tanvir';
myName = 'Jhankar Mahbub';
console.log(myName);

// Video No-06
var promise = "I promise I will work HARD to become a programmer";
console.log(promise.toLowerCase());
console.log(promise.toUpperCase());
console.log(promise.indexOf('will'));
console.log(promise.split('I'));
console.log(promise.split(' '));


var name = "Bangladesh";
name.toLowerCase();
name.toUpperCase();
name.indexOf('desh');
name.split('B');
console.log(name);

// Video No-07
var number1 = 25;
var number2 = '15.5';
number2 = parseFloat(number2);          //This is the process of conversion to number from string with count unsolide value
console.log(number1 + number2);


var number1 = 25;
var number2 = '15.5';
number2 = +number2;                     //This is the alternative way of parseFloat
console.log(number1 + number2);     


var number1 = 25;
var number2 = '15.5';           
number2 = parseInt(number2);            //This is the process of conversion to number from string with count solide value
console.log(number1 + number2);


var number1 = 25;
var number2 = 15.5;
number1 = '' + number1;                 //This is the process of conversion to string from number
console.log(typeof number1);


var number1 = 0.1;
var number2 = 0.2;
var total = number1 + number2;
total = total.toFixed(5);               //This is the way to show the number after doshomik
console.log(total);

// Video No-08 
var price1 = 25;
var price2 = 35;
var total = price1 + price2;  //plus
var total = price2 - price1;  //minus
var total = price1 * price2;  //multiply
var total = price2 / price1;  //divide
var total = price2 % price1;  //remainder(jar bangla ortho vagses)
console.log(total);


var price1 = 25;
var price2 = 35;
price2++;
console.log(price2);


var price1 = 25;
var price2 = 35;
price2--;
console.log(price2);

// Video No-09
var number = -5;
var absoluteNumber = Math.abs(number);  //This is the process to make positive value
console.log(absoluteNumber);


var number = 5.49999;
var result = Math.round(number);        //This is the process to make solide value
console.log(result);


var number = 5.50000;
var result = Math.round(number);
console.log(result);


var number = 5.0001;
var result = Math.ceil(number);
console.log(result);


var number = 5.99999;
var result = Math.floor(number);
console.log(result);


var result = Math.random();
console.log(result);


var result = Math.random() * 10;
var final  = Math.round(result);
console.log(final);

// Video No-10 (======== if else statement ========)
var biscuitPrice = 12;
if(biscuitPrice < 10){
    console.log("I will eat the biscuits");
}
else{
    console.log("Khali cha is better");
}

// Video No-11
var jobPaiso = false;
var savingAmount = 500;
if(jobPaiso == true && savingAmount > 500){
    console.log("Now you are eligible for getting Swiss visa");
}
else if(jobPaiso == true || savingAmount > 500){
    console.log("Now you may be eligible for getting Swiss visa");
}
else{
    console.log("I will kick you cause you are a fokinni");
}

// Video No-12
// This video is about Time Zone and Clock (briefly) 


                                    // Module-13
// Video No-02 (===== Array =====)
var friendsAge = [15, 17, 14, 16];
var sonaliAge  = friendsAge[2];
friendsAge[1]  = 21;
console.log(friendsAge);


var position   = friendsAge.indexOf(14);
console.log(position);

// Video No-03 
var friendsAge = [15, 17, 14, 16];
friendsAge.push(19);
friendsAge.pop();
console.log(friendsAge);

// Video No-04
var teaLine = ['Alal', 'Dulal', 'Helal', 'Belal'];
teaLine.shift();
teaLine.unshift('Kalam');
console.log(teaLine);


var teaLine = ['Alal', 'Dulal', 'Helal', 'Belal', 'kalam', 'Jalam', 'Malam'];
var part  = teaLine.slice(2, 5);
console.log(part);

// Video No-05 (===== while Loop =====)
var num = 10;
while(num <= 15){
    console.log(num);
    num++;
}

// Video No-06 (===== For Loop ======)
for(var i = 0; i <= 10; i++){
    console.log(i);
}


var nums = [55, 66, 77, 88, 99, 11, 44];       //On this example has something to understand. so,please do practice this example with explaination
for(var i = 0; i < nums.length; i++){
    var element = nums[i];
    console.log(element);
}

// Video No-07 (======= Switch Function =======)
var num = 5;
switch(num){
    case 1000:
        console.log("I am 1000");
        break;
    case 100:
        console.log("I am 100");
        break;
    case 20:
    case 10:
        console.log("I am either 10 or 20");
        break;
    default:
        console.log("I don't know who you are");
}

// Video No-08 (====== Function =====)
function banana(){
    console.log("I like to have Banana also");
    console.log("I like to have Mango as well");
}
banana();

// Video No-09
function doubleIt(num){
    var result = num * 2;
    console.log(result);
}
doubleIt(5);
doubleIt(50);
doubleIt(500);


function doubleIt(num){                 //On this example has something to understand, so please try to do practice this example with explination
    var result = num * 2;
    return result;
}
var first = doubleIt(5);
var secound = doubleIt(50);
var total = first + secound;
console.log(total);


function add(num1, num2){               //On this example has something to understand, so please try to do practice this example with explination as well
    var result = num1 + num2;
    return result;
}
var sum = add(15, 15);
console.log(sum);

// Video No-10
// This video is about comment out

// Video No-11
var student = {id:121, phone: 015555555, name:"Abir"};
var student2 = {id:236, phone: 01666666, name:"Mahi"};
console.log(student);
var studentName = student.name;
console.log(studentName);
var student2Name = student2["name"];
console.log(student2Name);
var studetVarName = "name";
var studentvarFinalName = student[studetVarName];
console.log(studentvarFinalName);
// ways to update information
student.phone = 01777777;
student["phone"] = 013552;
//student[studentVarName] = "Tamim";

// Video No-12 
// Briefly explaination what we have learn so far on Javascript\


                                // Module-14

// Video No-04 (====== inch to feet converter project ======)
var inch = 156;
var feet = inch / 12;
console.log(feet);


function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}
var nanaFeet = inchToFeet(72);
console.log(nanaFeet);
var naniFeet = inchToFeet(60);
console.log(naniFeet);


function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}
var senior = [72, 60,];
var nanaFeet = inchToFeet(senior[0]);
console.log(nanaFeet);
var naniFeet = inchToFeet(senior[1]);
console.log(naniFeet);

// Video No-05
// This video is about the diffenence between let and const 

// Video No-06  (====== leap Year project without folloing jhankar's project that means it has been made according to my concept =======)
function leapYear(year){
    var result = year % 4;
    return result;
}
var finalResult = leapYear(2016);
if(finalResult === 0){
    console.log('This is Leap Year');
}
else{
    console.log('This is not Leap Year');
}

// Video No-07   (====== Factorial Calculator project with For Loop by Iterative way ========)
var factorial = 1;                  
for(var i = 1; i <= 10; i++){       //On this project has something to understand, so please try do practice this example with proper explaination
    const number = i;
    factorial = factorial * number; 
    console.log(i, factorial);
}


function Factorial(n){
    var factorial = 1;
    for(var i = 1; i <= n; i++){
        const number = i;
        factorial = factorial * number;
    }
    return factorial;
}
var result = Factorial(7);
console.log(result);


// Video No-08  (======= Factorial Calculator project with While Loop by Iterative way ========)
var i = 1;
var factorial = 1;
while(i <= 10){
    factorial = factorial * 1;
    console.log(i, factorial);
    i++;
}


function Factorial(n){
    var i = 1;
    var factorial = 1;
    while (i <= n) {
        factorial = factorial * 1;
        i++;
    }
    return factorial;
}
var result = Factorial(10);
console.log(result);

// Video No-9  (====== Factorial Calculator project making by Recursive way/Recursive Function =======)
function Factorial(n){
    var factorial = 1;
    for(var i = n; i >= 1; i--){
        factorial = factorial * 1;
    }
    return factorial;
}
var result = Factorial(8);
console.log(result);


function Factorial(n){
    var i = n;
    var factorial = 1;
    while(i >= 1){
        factorial = factorial * 1;
        i--;
    }
    return factorial;
}
var result = Factorial(6);
console.log(result);


function Factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
var result = Factorial(9);
console.log(result);



// Video No-10 (====== Fibonacchi series project making by Iterative way =======)
var fibo = [0, 1];
for(var i = 2; i <= 10; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    console.log(fibo[i], fibo[i-1], fibo[i-2]);
}
console.log(fibo);


function Fibonacchi(n){
    var fibo = [0, 1];
    for(var i = 2; i <= n; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
var result = Fibonacchi(12);
console.log(result);

// Video No-11  (======= Fibonacchi series making by Recursive way =======)
function fibonacchi(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }else{
        return fibonacchi(n-1) + fibonacchi(n-2);
    }
}
var result = fibonacchi(10);
console.log(result);


// Video No-12  (======= Fibonacchi series making by Recursive way)
// fibonacchi series : 0,1,1,2,3,5,8,13,21 ....
function fibonacchi(n){
    if(n == 0){
        return [0];
    }
    else if(n == 1){
        return [0, 1];
    }
    else{
        var fibo = fibonacchi(n-1);
        var nextElement = fibo[n-1] + fibo[n-2]
        fibo.push(nextElement);
        return fibo;
    }
}
var result = fibonacchi(15);
console.log(result);


// Video No-14  (======== Prime number check project ========)
var n = 13;
for(i = 2; i < n - 1; i++){
    var check = n % i;
    if(check == 0){
        console.log('This is not Prime Number');
        break;
    }else{
        console.log('This is Prime Number');
        break;
    }
}


function primeNumber(m){
    for(i = 2; i < m-1; i++){
        var check = m % i;
        if(check == 0){
            return 'This is not prime Number';
        }
    }
        return 'This is prime Number';
}
var result = primeNumber(13);
console.log(result);

// Video No-15 
// This video is about what we learn this Module 


                                // Module-15

// Video No-01  (===== value exchanging system ======)
var a = 5;
var b = 7;
var temp = a;
a = b;
b = temp;
console.log("after swap: a =", a, "b =", b);


var x = 5;
var y = 7;
x = x + y;
y = x - y;
x = x - y;
console.log("after swap: x =", x, "y =", y);


var p = 5;
var q = 7;
[p, q] = [q, p];
console.log("after swap: p =", p, "q =", q);

// Video No-02   (======= Lottery Draw project =======)
var random = Math.random() * 100;
var output  = Math.floor(random) + 1;
console.log(output); 


for(i = 0; i < 5; i++){
    var random = Math.random() * 100;
    var output  = Math.floor(random) + 1;
    console.log(output);
}

// Video No-03  (======= Upper number checker project =======)
var business = 450;
var minister = 350;
var shochib  = 950;
if(business > minister){
    if(business > shochib){
        console.log("Business is rich");
    } 
    else{
        console.log("Shochib is rich");
    }
}
else{
    if(minister > shochib){
        console.log("Minister is rich");
    }
    else{
        console.log("Shochib is rich");
    }
}


var max = Math.max(business, minister, shochib);
console.log(max);

// Video No-04  (====== Highest value checker project =======)
var marks = [45, 81, 63, 98, 56, 35, 23];
var max = marks[0];
for(var i = 0; i < marks.length; i++){
    var elements = marks[i];
    if(elements > max){
        max = elements;
    }
}
console.log("Highest value is:", max);

// Video No-05  (====== The process how to sum all elements in the array ======) 
var numbers = [45, 65, 78, 12, 3, 54, 65];
var sum = 0;
for(var i = 0; i < numbers.length; i++){
    var elements = numbers[i];
    sum = sum + elements;
}
console.log("total of the numbers: ", sum);


function getArraySum(numbers){
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
        var elements = numbers[i];
        sum = sum + elements;
    }
    return sum;
}
var numbers = [45, 65, 78, 12, 33, 54, 65];
var result = getArraySum(numbers);
console.log("total of the number:", result);





// Video No-06 (===== The way how to remove same number or value in the array ======)
var name = [5, 7, 3, 9, 12, 17, 15, 3, 7, 15, 5, 9, 12, 20, 18, 11, 24];
var uniqueName = [];

for(i = 0; i < name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);

    }
}
console.log(uniqueName);

// Video No-07  (====== Word counting project ======)
var speech = "I am a good person. I don't snore at night.";
var count = 0;
for(var i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char == " "){
        count++;
    }
}
count++;
console.log(count);



var speech = "I   am   a good person. I    don't snore at night."
var count = 0;
for(var i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-1] != " "){
        count++;
    }
}
count++;
console.log(count);

// Video No-08  (======= Revers string project =======)
function reveseString(str){
    var reverse = "";
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "Hello Alien bhai brother.";
var forAlien  = reveseString(statement);
console.log(forAlien);

// Video No-09  
// This video is about how many problems we have solved on this module. And most importantly has been discribed, from where we can get more problem to solve with solution   

// Video No-10
// Problem solving environment setup related video





                                // Module-16

// Video No-01   (===== Task projects =====)
// feet to mile
function feetToMile(n){
    var calculation = n / 5280;
    return calculation;
}
var result = feetToMile(10);
console.log(result);


// wood calculator
function woodCalculator(chair, table, bed){
    if((chair, table, bed)){
        let totalWoodNeeded = chair * 1 + table * 3 + bed * 5;
        return totalWoodNeeded;
    } else{
        return "Please give 3 value (chair, table and bed)";
    }
}
let finalResult = woodCalculator(1, 1, 1);
console.log(finalResult);


// brick calculator
function brickCalculator(stair){

    if(stair <= 10){
        const first10Stair = 15 * 1000;
        briks = stair * first10Stair;
    }else if(stair <= 20){
        const first10Stair   = 15 * 1000;
        const secound10Stair = 12 * 1000;
        const remaining = stair - 10;
        briks = (remaining * secound10Stair) + (first10Stair * 10);
    }else{
        const first10Stair   = 15 * 1000;
        const secound10Stair = 12 * 1000;
        const third10Stair   = 10 * 1000;
        const remaining      = stair - 20;
        briks = (remaining * third10Stair) + (secound10Stair * 10) + (first10Stair * 10);
    }
    return briks;

}
let result = brickCalculator(20);
console.log(result);


// way to find smallest friend name
let friendArray = ['MD. Shohag', 'Mohibul Islam Masum', 'Journalist Mehedi Hasan', 'Sahnur Soukot Sir'];

function bestFriend(arr){
    let allFriendName = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(allFriendName.length > arr[i].length){
            allFriendName = arr[i];
        }
    }
    return allFriendName;
}
let result = bestFriend(friendArray);
console.log(result);


                    // Module- 19
// Video No - 10  (===== practical project =====)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Js with jhankar</title>
</head>
<body>
    <div id="container">
        <h1>My List</h1>
        <ul id="myList">
            <li id="first" class="item">Lorem ipsum dolor.</li>
            <li class="item">Quam, repellendus de ?</li>
            <li class="item">Saepe, nobies reirjakk</li>
            <li class="item">Eos, leoeko kofejakjero</li>
            <li class="item">Rokei, alaoreok roelaoe</li>
        </ul>
        <button id="addNew">Add New item</button>
    </div>

    <script>        
        let items = document.getElementsByClassName('item');
        for(let i = 0; i < items.length; i++){
            let item = items[i];
            item.addEventListener('click', function(event){
                event.target.parentNode.removeChild(event.target);
            })
        }
        document.getElementById('addNew').addEventListener('click', function(event){
            let itemParent = document.getElementById('myList');
            let newItem = document.createElement('li');
            newItem.innerText = 'Brand New Item';
            itemParent.appendChild(newItem);
        })
    </script>
</body>
</html>


// Video No-11   (===== Even Number(জোড় সংখ্যা) Checker Project ====)
let array = [12, 45, 25, 13, 65, 71, 20];

function evenNumberChecker(array){
    let fullArray = array;
    for(let i = 0; i < fullArray.length; i++){
        let num = fullArray[i];
        if(num % 2 == 0){
            console.log(num, 'is even number');
        }
        else{
            console.log(num, 'is not even number');
        }
    }
    return num;
}

let result = evenNumberChecker(array);
console.log(result);








