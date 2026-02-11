// Task 24

let age1 = prompt("enter your age:", "18");

if (age1 === null) {
    alert("Cancelled");
} else {
    let Nage1 = Number(age1);
    if (Nage1 < 18) {
    alert("«Access denied»");
    } else {
    alert("«Access granted»");
    }
}

// Task 25

let nums1 = prompt("üç ikirəqəmli ədəd daxil edin:" , "45 46 47").split(" ");
let num1 = nums1[0];
let num2 = nums1[1];
let num3 = nums1[2];

if (num2 > num1 && num2 < num3 || num2 > num3 && num2 < num1) {
    console.log(num2);
}else if (num3 > num1 && num3 < num2 || num3 > num2 && num3 < num1) {
    console.log(num3);
}else if (num1 > num2 && num1 < num3 || num1 > num3 && num1 < num2) {
    console.log(num1);
}else if (num1 === num2 || num1 === num3 || num2 === num3 || num2 === num1 || num3 === num1 || num3 === num2) {
    alert("xəta");
}

/* 
- "45 46 47"
- "45 47 46"
- "46 45 47"
- "46 47 45"
-  47 45 46
-  47 46 45
*/

// Task 26

let year = Number(prompt("enter year:" , "2024"));

if (year % 4 === 0) {
    console.log("«İl uzun ildir»");
}else {
    console.log("«İl uzun il deyil»");
};

// Task 27

let id = Number(prompt("enter product id:" , "3"));

switch (id) {
    case 1:
        alert("Available 10 pcs.");
        break;
    case 2:
        alert("Available 256 pcs.")
        break;
    case 3:
        alert("Available 53 pcs.");
        break;
    case 4:
        alert("There are 3 available.");
        break;
    default:
        alert("Out of stock");
}

// Task 28 

let gendercheck = prompt("type your gender M or F" , "m");
let gender;

gendercheck = gendercheck.toUpperCase();

if (gendercheck === "M") {
    gender = "Male";
}else if (gendercheck === "F") {
    gender = "Female";
}else {
    console.log("user didn't type gender.");
};

console.log(gender);

// Task 29

let month = Number(prompt("ayın nömrəsini daxil edin" , "1"));

switch (month) {
    case 1:
        console.log("Yanvar");
        break;
    case 2:
        console.log("Fevral");
        break;
    case 3:
        console.log("Mart");
        break;
    case 4:
        console.log("Aprel");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("Iyun");
        break;
    case 7:
        console.log("Iyul");
        break;
    case 8:
        console.log("Avqust");
        break;
    case 9: 
        console.log("Sentyabr");
        break;
    case 10:
        console.log("Oktyabr");
        break;
    case 11:
        console.log("Noyabr");
        break;
    case 12:
        console.log("Dekabr");
        break;
    default:
        console.log("istifadəçi məlumat daxil etmədi.");
};

// Task 30

let date = prompt("enter date:" , "2009.12.19");

if (!date || !date.includes(".")) {
    alert("Yanlış dəyər daxil edilib");
}else {
    date = date.split("."); 

    if (date.length !== 3) {
        alert("Yanlış dəyər daxil edilib");
    }else {
        let dateY = date[0];
        let dateM = date[1];
        let dateD = date[2];

        let monthNum = Number(dateM);
        let dayNum = Number(dateD);
        
        if (monthNum < 1 || monthNum > 12 || dayNum < 1 || dayNum > 31) {
            alert("Yanlış dəyər daxil edilib");
    }else {
    if (date[1] === "01") {
        date[1] = "Yanvar"
    }else if (date[1] === "02") {
        date[1] = "Fevral"
    }else if (date[1] === "03") {
        date[1] = "Mart"
    }else if (date[1] === "04") {
        date[1] = "Aprel"
    }else if (date[1] === "05") {
        date[1] = "May"
    }else if (date[1] === "06") {
        date[1] = "Iyun"
    }else if (date[1] === "07") {
        date[1] = "Iyul"
    }else if (date[1] === "08") {
        date[1] = "Avqust"
    }else if (date[1] === "09") {
        date[1] = "Sentyabr"
    }else if (date[1] === "10") {
        date[1] = "Oktyabr"
    }else if (date[1] === "11") {
        date[1] = "Noyabr"
    }else if (date[1] === "12") {
        date[1] = "Dekabr"
    }
    let plsvalue = date[2] + " " + date[1] + " " + date[0] + "-cu il";
    console.log(plsvalue);
        }
    }
}

// Task 31

let p = 8;
let q = p-- - --p + p++ + ++p;
console.log(p, q);
// 16

// Task 32

let a = 6, b = 4, c = 2;

let x = ++a - b-- + c++ - --b + a++;
let y = a-- + --c - ++b + x++ - --a;

// x console yə çatanda 1 artdı 
console.log(a, b, c, x, y);
// 6 3 2 11 11

// Task 33

let a1 = 7, b2 = 3, c3 = 5;

let x1 = a1-- - ++b2 + c3++ - --a1 + b2++ - --c3 + a1++ - b2-- + c3++;
let y2 = --x1 + a1++ - --b2 + c3-- - x1++ + ++a1 - b2++ + --c3 - x1--;
let z = a1-- + ++b2 - --c3 + x1++ - --y2 + b2-- - ++x1 + c3++ - --a1 + y2++;

console.log(a1, b2, c3, x1, y2, z);

// Task 34

let nums = prompt("enter a number:" , "5");

if (nums === null || nums.trim() === "") {
    console.log("ədəd daxil edilmədi.")
}else {
    nums = Number(nums);
    if (nums > 0) {
        console.log("ədəd müsbət");
    }else if (nums < 0) {
        console.log("ədəd mənfi");
    }else if (nums === 0) {
        console.log("ədəd 0");
    }
}

// Task 35

let firstnum = 25;
let secondnum = 11;
let thirdnum = 19;

if (firstnum > secondnum && firstnum > thirdnum) {
    console.log(firstnum + " " + "ən böyük ədəd");
}else if (secondnum > firstnum && secondnum > thirdnum) {
    console.log(secondnum + " " + "ən böyük ədəd");
}else {
    console.log(thirdnum + " " + "ən böyük ədəd");
}

// Task 36

let num = 11;

resultvalue = (num % 2 === 0) ? console.log("cüt ədəd") : console.log("tək ədəd");

// Task 37

let ak = 5;

let sahə = ak * ak;
console.log(sahə + "sahə");
let perimetr = ak * 4;
console.log(perimetr + "perimetr");

// Task 38

let price = 90;

switch (true) {
    case (price >= 90 && price <= 100):
        console.log("Əla");
        break;
    case (price >= 75 && price <= 89):
        console.log("Yaxşı");
        break;
    case (price >= 60 && price <= 74):
        console.log("Orta");
        break;
    case (price >= 0 && price <= 59):
        console.log("Zəif");
        break;
}

// Task 39

let randomnum = Math.random() * 100;
let numyuv = Math.floor(randomnum);

if (numyuv >= 0 && numyuv <= 50) {
    console.log("ədəd aralığı 0-50");
}else {
    console.log("ədəd təyin edilmiş aralıqda deyil.");
}

// Task 40

let a5 = 6;
let b5 = 3;
let op = "/";

switch (true) {
    case (op === "+"):
        console.log(a5 + b5);
        break;
    case (op === "-"):
        console.log(a5 -b5);
        break;
    case (op === "*"):
        console.log(a5 * b5);
        break;
    case (op === "/"):
        console.log(a5 / b5);
}



