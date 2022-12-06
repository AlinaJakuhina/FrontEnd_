// ternory operator (тернарный оператор)

// let age = 15;
// alert(age > 13 ? "yes" : "no" ); ---> синтаксис правоописания тернарного оператора

// let div = document.querySelector("div");
// let btn = document.querySelector("button");
// let h2 = document.querySelector("h2");

// let counter = true;
// btn.onclick = () => {
//     // if(counter) {
//     //     alert: ("1")
//     // } else {
//     //     alert("2");
//     // }
//     alert(counter ? "1" : "2");  ---> ternory operator
//     counter = counter ? false : true;
// };

   

// div.onclick = (event) => {
//     // alert("event works");
//     event.target.style.display = "none"; // --> при нажатии пропадают все элементы в блоке DIV
// };

// 1)Задание

// const btn = document.querySelector("button");
// const userName = document.querySelector('input[name="userName"]');
// const output = document.querySelector(".output");

// const welcomeP = document.createElement("h3");

// btn.onclick = () => {
//     welcomeP.innerText = 
//     userName.value.length >= 2
//     ? `Добро пожаловать ${userName.value}`
//     : "Длина имени должна содержать более 3 символов";
//     welcomeP.style.color = userName.value.length >= 2 ? "brown" : "red";
//     // if (userName.value.length > 2) {
//     //     const message = `Добро пожаловать ${userName.value}`;
//     //     welcomeP.innerText = message;
//     //     welcomeP.style.color = "brown";
//     // } else {
//     //     welcomeP.innerText = "Длина имени должна содержать более 3 символов";
//     //     welcomeP.style.color = "red";
//     // }
// };

// document.body.append(welcomeP);

// const input1 = document.querySelector("input[name = 'input1']");
// const input2 = document.querySelector("input[name = 'input2']");
// const btn = document.querySelector("button");

//NaN  
// isNaN => true/false 

// btn.onclick = () => {
//     let value = +input1.value;
//     if(isNaN(+input1.value)) {
//         alert("Введено не число!")
//     }else {
//         input2.value = value ** 2;
//     }
// };

const paragraphs = document.querySelectorAll('p');
const btn = document.querySelector("button");

btn.onclick = () => {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerText = i + "." + paragraphs[i].textContent;
    }
};
