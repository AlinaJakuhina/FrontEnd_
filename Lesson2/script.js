// создать элемент(тэг)
// createElement

//const root = document.createElement('div');
//root.setAttribute('id', 'root');

// 2 способа добавления элеменнта в document:
// 1)  append  - text and element
// 2) appendChild - element;

//const body = document.querySelector('body');
//body.appendChild(root);
// root.innerText = "This is my root div";

// // 0 - 19
// // создать <р>
// // добавить текст 
// // добавить этот <р> в body


// for (let i = 0; i <= 19; i++){
//     let par = document.createComment("p");
//     par.innerText = `${i}`; // инторполяция
//     body.appendChild(par);
// }



// 1)создаём DIV с ID "test";
// цикл  - создаём параграфы в котором будет текст "цифра" + "this is new p"
// 0 this is new p
// 1 this is new p
// 0 - 20


let test = document.createElement('div');
test.setAttribute("id", "test");
// for (let i = 0; i <= 20 ; i++){
//     let createP = document.createElement("p");
//     createP.innerText = `${i} this is new p`;
//     test.appendChild(createP)
// }
// body.appendChild(test);

const strings = ["createElement - создаёт элемент c тем тегом, что указан в аргументе",
"appendChild - добавляет узел в конец списка дочерних элементов указанного родительского узла.",
"Циклы - for(for in , for of), while, do while",
"Функции являются основными «строительными блоками» программы.",];

// 2) Написать цикл, который проходится по массиву строк и для каждого создает параграф и добавляет в #root.

// for (let strForP of strings){
//     let paragraph = document.createElement("p");
//     paragraph.innerText = strForP;
//     root.appendChild(paragraph)
// }



//const body = document.querySelector('body');
// body.appendChild(root);

// let userImg  = prompt ( "add image's link: ");
// let userPost = prompt("Add your post's link ");

// const image = document.createElement('img');
// image.setAttribute("src", userImg);

// const post = document.createElement("a");
// post.innerText = "Moj Post";
// post.setAttribute("href", userPost);
// post.setAttribute("target","_blank");

// body.append(image, post);

// 3) Запрашиваем у пользователя ссылки на картинку и пост. 
// Создаем картинку со ссылкой на этот пост.

// let newImg = prompt ("Add image's link: ");
// let newPost = prompt ("Add your post's link");

// const image1 = document.createElement('img');
// image.setAttribute("src", newImg);

// const post1 = document.createElement("a");
// post1.setAttribute("href", newPost);
// post1.setAttribute("target","_blank");
// post1.appendChild(image1);

// body.append(post1);


// 4) Массив из объектов со свойствами link и title. 
// Свойства хранят в себе ссылку на страницу и название страницы соответственно. 
// Напишите цикл, который создаст для каждого объекта ссылку и добавит в #root.


let links = [
    {
      title: "Google",
      link: "https://www.google.com/",
    },
    {
      title: "Baidu",
      link: "http://www.baidu.com/",
    },
    {
      title: "Bing",
      link: "https://www.bing.com/",
    },
    {
      title: "Yahoo!",
      link: "https://www.yahoo.com/",
    },
    {
      title: "Yandex(dzen)",
      link: "https://www.dzen.ru/",
    },
  ];

const root = document.createElement('div');
root.setAttribute('id', 'root');
const body = document.querySelector('body');
body.appendChild(root);

for(let search of links) {
    let linkTo = document.createElement("a");
    linkTo.innerText = search.title;
    linkTo.setAttribute("href", search.link);

    root.appendChild(linkTo);
}
body.appendChild(root);

