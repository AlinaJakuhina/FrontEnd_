// preventDefault

// const btn = document.querySelector('button');

// btn.onclick = (event) => {
//     event.preventDefault();   // --> отмена 
//     alert('welcome!');        // -->  задали новое ,вместо отправки-вывести на экран
// };

//form

const form = document.querySelector("#form");
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');

// form2

const form2 = document.querySelector('#form2');
const filterInput = document.querySelector('#filter');


//section with products
const sectionProducts = document.querySelector('#products');
const h2 = document.createElement('h2');
h2.innerText = "Товаров нет!!";
h2.style = 'fontSize: 40px; text-align: center';
sectionProducts.appendChild(h2);

// button for sort

let sortBtn = document.querySelector("#sortPrice");


let products = [];

titleInput.setAttribute('required', "true");
priceInput.setAttribute('required', "true");

form.onsubmit = (e) => {
    e.preventDefault();
    // console.log(titleInput.value, priceInput.value);

    const title = titleInput.value.toLowerCase();

    products.push({
        title: title,
        price: priceInput.value,
    });

    newProducts(products);

    titleInput.value = "";
    priceInput.value = "";

    console.log(products);
};

function createNode(title, price) {
let div = document.createElement('div');
div.classList.add("products");

let titleP = document.createElement('p');
let priceP = document.createElement('p');

titleP.innerText = title;
priceP.innerText = price;

let close = closeBtn();
close.onclick = () => {
    close.removeEventListener('dblclick', () => {
        alert(title);
    });
    sectionProducts.removeChild(div);
    let result = [];
    if(products.length > 1){
    for(let i = 0; i < products.length; i++) {
        if(i !== index) result.push(products[i])
    }
}
products = result;
if (!products.length){
    sectionProducts.append(h2);
   }
};

div.append(titleP, priceP,close);

div.onmouseover = () => {
    close.style.opacity = '1';
};

div.onmouseleave = () => {
    close.style.opacity = '0';
};

div.ondblclick = () => {
    alert(title);
}
sectionProducts.append(div);
}

function newProducts(array) {
    sectionProducts.innerHTML = "";
    for(let i = 0; i < products.length; i++) {
        createNode(array[i].title, array[i].price);
    }
}

function closeBtn() {
    let btn = document.createElement('button');
    btn.innerText = 'X';
    btn.classList.add("close");

    return btn;
}

form2.onsubmit = () => {
    e.preventDefault();
    let filter = filterInput.value;
    filter = filter.toLowerCase();
    alert(filter);
    // sectionProducts.innerHTML = "";
    // for(let i = 0; i < products.length; i++) {
    //     if(products[i].title === filter) {
    //         createNode(i, products[i].title, products[i].price);
    //     }
    // }  

    let.filterArray = [];
    for (let i = 0; i < products.length; i++){
        if(products[i].title === filter) {
            filterArray.push(products[i]);
        }
    }
    newProducts(filterArray);
};

sortBtn.onclick = () => {
    //sort
    products.sort((a,b) => a.price - b.price);
    newProducts(products);
}