const add_text_btn = document.querySelector(".add_text_btn");
const text_container = document.querySelector(".text_container");

add_text_btn.addEventListener("click", () => {
    const text  = document.createElement("p");
    text.innerText = "hello!";
    text_container.append(text);
});

// В index.hmtl есть кнопка "изменить цвет" и параграф 'hello!'. При клике на кнопку цвет текста меняется на красный.

const change_color_btn = document.querySelector(".change_text_color");
const hello_text = document.querySelector(".hello_text");

change_color_btn.addEventListener('click', () => {
    hello_text.style.color = "red";
});

// ДЗ:
// 1. При клике на кнопку выводится сообщение 'hello' в консоль
// 2. При клике на кнопку меняется цвет заднего фона у параграфа
// 3. При клике на кнопку цвет фона меняется на черный, а при следующем клике меняется на белый