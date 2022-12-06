// const div = document.createElement("div");
// document.body.append(div);

// div.style.border = "1px solid black";
// div.style.width = "100px";
// div.style.height = "100px";

// div.onmouseover = function () {
//     div.style.backgroundColor = "solmon";
// };

// div.onmouseout = function () {
//     div.style.backgroundColor = "white";
// };

// 1 - Task
// Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.


// for(let i = 0; i <= 255; i += 5){
//     let div = document.createElement("div");
//     div.style.border = "1px solid black";
//     div.style.width = "100px";
//     div.style.height = "100px";
//     div.style.display = "inline-block";
//     div.style.marginRight = "5px";

//     document.body.append(div);

//     div.onmouseover = function () {
//         div.style.backgroundColor = `rgb(128,128, ${i})`;
//     };
//     div.onmouseout = function (){
//         div.style.backgroundColor = "white";
//     };
// }

//  CLASLIST

// classList.add(" ");
// classList.remove(" ");
// classList.replace(" ");

// let div = document.createElement("div");
// div.setAttribute("class" , "newClass");
// document.body.append(div);
// console.log(div.classList);


// создать 10 видов ( числа 0 - 9);

// for(let i = 0; i <= 9; i++){
//     let div = document.createElement("div");
//     div.innerText = i;

//     document.body.append(div);

//     div.onclick = () => {
//         // if (div.clasList.contains("active")){
//         if(div.classList[0] == "active"){
//             div.classList.remove('active');
//         } else {
//             div.classList.add("active");
//         }
//         // div.classList.add("active");
//         // console.log(div.classList);
//     };
// }

// contains


// toggle 

// for(let i = 0; i <= 9; i++){
//     let div = document.createElement("div");
//     div.innerText = i;

//     document.body.append(div);
// div.onclick = () => {
//     div.classList.toggle ("active");
// };
// }


// 2 задание 

const cards = [
    {
      en: "door",
      ru: "дверь",
    },
    {
      en: "sofa",
      ru: "диван",
    },
    {
      en: "chair",
      ru: "стул",
    },
    {
      en: "stove",
      ru: "плита",
    },
    {
      en: "bag",
      ru: "сумка",
    },
  ];

//   for(let i = 0; i < cards.length; i++){
//     let div = document.createElement("div");
//     let p = document.createElement("p");
//     p.innerText = cards[i].en;

//     div.appendChild(p);
//     document.body.appendChild(div);

//     div.onclick = () => {
//         if(p.textContent === cards[i].en){
//             p.innerText = cards[i].ru;
//         }else{
//             p.innerText = cards[i].en;
//       }
//     };
//   }


// add, remove, replace

  for(let i = 0; i < cards.length; i++){
    let div = document.createElement("div");
    let en = document.createElement("p");
    let ru = document.createElement("p");
    en.innerText = cards[i].en;
    ru.innerText = cards[i].ru;
    

en.classList.add("show");
ru.classList.add("hide");

div.onclick = () => {
    if (en.classList.contains("show")){
        en.classList.replace("show","hide");
        ru.classList.replace("hide", "show");
    }else{
        en.classList.replace("hide", "show");
        ru.classList.replace("show", "hide");
    }
};

    div.append(en, ru);
    document.body.appendChild(div);
  }

  // 3 задание

//   В документе есть tag button. С помощью скриптов выведите в консоль количество классов этого тега.

const btn = document.querySelector("button");
console.log(".clickMe style inline") 