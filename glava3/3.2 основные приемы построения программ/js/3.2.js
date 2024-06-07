let x = 8;
if (x>3 && x<10) {
    console.log('Верно')
} else {
    console.log('Неверно')
};

if (x==0 || x==2) {
    x+=7
} else {
    x/=10
};
console.log(x);

let num = 2;
let result;
switch (num) {
    case 1: 
    result='зима';
    break;
    case 2: 
    result='весна';
    break;
    case 3: 
    result='лето';
    break;
    case 4: 
    result='осень';
    break;
    default: console.log(" Введите другое число");
    break;
}
console.log(result);

let day = 12;
switch (day) {
    case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: 
        console.log("Декада один");
        break;
    case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19: 
        console.log("Декада два");
        break;
     case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31:
        console.log("Декада три");
        break;
    default: console.log("Введите другое число");
    break;
}

let month = 3;
switch (month) {
    case 12: case 1: case 2:
        console.log("зима");
        break;
    case 3: case 4: case 5:
        console.log("весна");
        break;
    case 6: case 7: case 8:
        console.log("лето");
        break;
    case 9: case 10: case 11:
        console.log("осень");
        break;
    default: console.log("Введите другое число");
    break;
}

let str = 'abcde';
if (str[0]=='a') {
    console.log("да")
} else {
    console.log("нет")
};