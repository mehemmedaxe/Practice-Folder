// Task 01

let prmt = prompt("ikirəqəmli ədəd daxil edin:", 22);
let prmtnum = Number(prmt);
while (prmtnum < 100) {
    prmtnum += 7;
}

console.log(prmtnum);

// Task 02

let lvalue = Number(prompt("how many times:", 10));
let i = 0;

while (i < lvalue) {
    console.log("«I know how to use cycles»");
    i++;
}

// Task 03

// let s = 100;

// while (s < 999) {
//     console.log(s);
//     s += 10;
// };

// Task 04

// let ikt = 11;
// let sum = 0;

// while (ikt <= 99) {
//     sum = sum + ikt;
//     ikt += 2;
// }
// console.log(sum);

// Task 05

let edt = Number(prompt("ədəd daxil edin:", "5"));
x = 100;
let sum2 = 0;

while (x <= 999) {
    if (x % edt === 0) {
    sum2 += x;
    }
  x++;
}

console.log(sum2);

// Task 06

// let ed = Number(prompt("ədəd daxil edin" , "23"));
// let sed = true;
// i = 2;

// while (ed > 1) {
//     while (i < ed) {
//         if (ed % i === 0) {
//             sed = false;
//         }
//         i++;
//     }
// }

// Task 07

let is = 1;
let hs = 1;

while (is <= 10) {
  hs *= is;
    is++;
}
console.log(hs);

// Task 08

let mtn = prompt("mətn daxil edin:").split("");
let eks = mtn.reverse();
console.log(eks.join(""));

// Task 09

let usrprmt = prompt("mətn daxil edin2:");
let fdot = -1;

for (i = 0; i < usrprmt.length; i++) {
    if (usrprmt[i] === ".") {
    fdot = i;
    break;
    }
}

console.log(fdot);

// Task 10

let rqprmpt = prompt("mətn daxil edin3:");
let flsvalue = false;

for (e = 0; e < rqprmpt.length; e++) {
    if (rqprmpt[e].match(/[0-9]/)) {
    flsvalue = true;
    break;
    }
}

if (flsvalue === true) {
    console.log("mətnin içində rəqəm var");
} else {
    console.log("mətnin içində rəqəm yoxdur");
}

// Task 11

let mrprmt = prompt("daxil edin:");
let orgl = mrprmt;
let rvrs = mrprmt.split("").reverse().join("");
let mrmptif = true;

for (let m = 0; m < orgl.length; m++) {
    if (orgl[m] !== rvrs[m]) {
    mrmptif = false;
    break;
    }
}

if (mrmptif) {
    console.log("palendrom");
} else {
    console.log("palendrom deyil!");
}

// Task 12

// for (d = 100; ; d++) {
//     if (d % 5 === 2) {
//         console.log(d);
//     if (d > 500) {
//         break;
//     }
//     }
// }

// Task 13

let tprmpt = prompt("tam ədəd daxil edin:" , "453").split("");
let nb;
let cm = 0;

for (let j = 0; j < tprmpt.length; j++) {
    nb = Number(tprmpt[j])
    cm = cm + nb;
}
console.log("input:", tprmpt);

console.log("output:", cm);

// Task 14

let st = Number(prompt("ədəd daxil edin:" , "12"));
let cmb = "";

for (let f = st; f >= 1; f--) {
    if (st % f === 0) {
        cmb += f + " ";
    }
}

console.log(cmb.trim());

// Task 15

let bcm = ""; 

for (let b = 1; b <= 30; b++) {
    if (b % 3 === 0 && b % 5 === 0) {
        bcm += b + " ";
    }
}

console.log(bcm.trim());

// Task 16

let isz = prompt("söz daxil edin:" , "test").split("");
let mb = "-";
let rslt = "";

for (let g = 0; g < isz.length; g++) {
    if (g < isz.length -1) {
        rslt += isz[g] + mb;
    }else {
        rslt += isz[g];
    }
}

console.log(rslt);

// Task 17

let bprmt = prompt("Mətn:" , "t es t").split("")
let ucount = 0;

for ( let r = 0; r < bprmt.length; r++) {
    if (bprmt[r] == " ") {
        ucount++;
    }
}

console.log(ucount);

// Task 18

let ikte = prompt("iki tam ədəd daxil edin:" , "10 20").split(" ");
let edt1 = Number(ikte[0]);
let edt2 = Number(ikte[1]);
let edts = "";
let start, end;


for (let l = start; l <= end; l++) {
    if (edt1 > edt2) {
        start = edt1;
        end = edt2;
        edts += l * l + " ";
    }else {
        start = edt2;
        end = edt1;
        edts += l * l + " ";
    }
}

console.log(edts);


