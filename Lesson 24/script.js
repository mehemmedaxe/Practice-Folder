// Practice Task 01

let prmt = prompt("üç tam ədəd daxil edin:");

if (prmt === null || prmt.trim() === "") {
    console.log("boş dəyər!");
}else {
    let s_prmt = prmt.trim().split(/\s+/);

    if (s_prmt.length !== 3) {
        console.log("3 ədəd olmalıdır!");
    }else {
        let ft = Number(s_prmt[0]);
        let st = Number(s_prmt[1]);
        let tt = Number(s_prmt[2]);

        if (isNaN(ft) || isNaN(st) || isNaN(tt)) {
            console.log("yalnız ədəd daxil edin!");
        }else if (ft < st && ft < tt) {
            console.log(ft);
        }else if (st < ft && st < tt){
            console.log(st);
        }else if (tt < ft && tt < st) {
            console.log(tt);
        }else {
            console.log("yanlış dəyər!");
        }
    }
}

// Practice Task 02

let text = "lorem";
let cnt = "";

for (let i = 0; i < text.length; i++) {
    cnt = text[i].repeat(i + 1);
    console.log(cnt);
}

// Practice Task 03

let nums = 235;
let snums = nums.toString().split("");
let hsl = 1;

for (let c = 0; c < snums.length; c++) {
    hsl *= Number(snums[c])
}

console.log(hsl);

// Practice Task 04

let prmpt = prompt("ədəd daxil edin" , "24");
let value = "";

if (prmpt >= 10 && prmpt <= 99) {
    value += prmpt[0] + " " + prmpt[1];
}

console.log(value);

// Practice Task 05

let a = 2;
let b = 3;
let total = 0;

if (a <= 999 && b <= 999) {
    total = a * a + b * b; 
}

console.log(total);

// Practice Task 06

let u = 11;
let cont = 0;

while (u != 1) {
    if (u % 2 === 0) {
        u = Math.floor(u / 2);
        cont++;
    }else{
        u += 1;
        cont++;
        u = Math.floor(u / 2);
        cont++;
    }
}

console.log(cont);

// Practice Task 07

