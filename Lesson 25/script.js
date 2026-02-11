// Task 01

function checkUsrActive(usrname) {
    console.log(`${usrname} is active now`);
}

checkUsrActive("mehemmed");
checkUsrActive("user_01");
checkUsrActive("user_02");

// Task 02

function getBigNum(num1, num2, num3) {
    switch (true) {
        case num1 > num2 && num1 > num3:
            console.log(num1);
            break;
        case num2 > num1 && num2 > num3:
            console.log(num2);
            break;
        case num3 > num1 && num3 > num2:
            console.log(num3);
            break;
        default:
            break;
    }
}

getBigNum(10, 20, 30);
getBigNum(10, 50, 40);
getBigNum(190, 110, 130);
