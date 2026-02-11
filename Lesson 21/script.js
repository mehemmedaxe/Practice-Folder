// Task 1

console.log("my name is Məhəmməd");

// Task 2

const name = "Məhəmməd";

console.log("name is" , name);

// Task 3

const task3_result = ["person" , "console" , "$add"];

console.log("task 3 result:", task3_result.join(" "));


// Task 4
let bookPrice = 35;
let bookAmount = 115;

let profitbooks = bookPrice  * bookAmount;

console.log("book profits:" , profitbooks);

// Task 5

let kmhSpeed = 250;
let msSpeed =  kmhSpeed * 1000 / 3600;

console.log("msSpeed =" , msSpeed);

// Task 6

let tdYear = 2026;
let usrsYear = prompt("enter your birth year"); // JS avtomatik stringi numbera çevirir
usrsYear = Number(usrsYear);
let usrsAge = tdYear - usrsYear;

console.log("your age is" , usrsAge);

// Task 7

let num = 43 ** 5 % 3;

console.log("num value" , num);

// Task 8

let firstName = "Məhəmməd";
let lastName = "Mirzəyev";

console.log("Sizin adınız" , firstName + " " + lastName , "Tanışlığımıza çox şadam!");

// Task 9

let firstName2 = "Məhəmməd";
let lastName2 = "Mirzəyev";

console.log(`Sizi bir daha görməyimizə şadıq, ${firstName2} ${lastName2}`)

// Task 10

let lgth = "Məhəmməd";

console.log("index value" , lgth.length)

// Task 11 

let spcvaluep = prompt("enter your f and l name");

console.log(spcvaluep.split("").join(" "))

// Task 12

let prmptvalue = prompt("tam adı «AD SOYAD» formatında daxil edin");
let firstNum = prmptvalue[0];
let lastNum = prmptvalue.indexOf(" ");
let finalvalue = prmptvalue[lastNum + 1];
console.log(firstNum,finalvalue);

// Task 13

let fullnameprompt = prompt("Sizin adınız:");
console.log(`Salam ${fullnameprompt}`);

// Task 14

let firstnum = Number(prompt("enter first number"));
let secondnum = Number(prompt("enter second number"));

console.log(firstnum + secondnum);
console.log(firstnum - secondnum);
console.log(firstnum * secondnum);
console.log(firstnum / secondnum);

// Task 15 

let firstnum1 = 12345;
let secondnum2 = 98765;
let hasil = firstnum1 * secondnum2;
let value2 = String(hasil)[6];

console.log(value2);

// Task 16

let answers = [
    "10",
    -1,
    NaN,
    2,
    "9px",
    "$45",
    2,
    "NaNpx",
    Infinity,
    "-95",
    -14,
    1,
    NaN,
]

// Task 17

let cem = prompt("4 rəqəmli ədəd daxil edin:")
let valuecem = Number(cem[0]) + Number(cem[1]) + Number(cem[2]) + Number(cem[3]);

console.log(valuecem);

// Task 18

let adsoyad = prompt("ad və soyad daxil edin:");
let spcIndex = adsoyad.indexOf(" ");
let ad = adsoyad.slice(0, spcIndex);

console.log(`salam, ${ad}`);

// Task 19

let ask = prompt("«530.90» formatında qiymət daxil edin:")
let rdot = ask.slice(".")
let askvalue = ask.slice(0 , 3)
let askvalue2 = ask.slice(4 , 6)

console.log(askvalue + " " + "manat" , askvalue2 + " " + "qepik");

// Task 20

let cash = Number(prompt("əmək haqqı məbləğini daxil edin:"));
let cash$ = cash * 0.13; 
let omeb = cash - cash$;

console.log(omeb);

// Task 21

let fullName = prompt("Soyad Ad Ata adı yaz:");
let parts = fullName.split(" ");

console.log(parts[0] + " " + parts[1][0] + "." + parts[2][0] + ".");

// Task 22

let evalue = Number(prompt("əmanətin məbləğini daxil edin:"));
let mvalue = Number(prompt("müddətini daxil edin:"));
let fvalue = Number(prompt("faiz dərəcəsini daxil edin:"));

let ovalue1 = evalue * fvalue / 100;
let vrvalue = ovalue1 * mvalue;

console.log(vrvalue);

// Task 23

let value = 10;

value === 10;
value < 15;
value <= 10;
value !== 20;
value < 20;