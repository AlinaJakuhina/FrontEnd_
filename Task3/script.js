// Callback function

// Callback function - функция переданная в другую функцию в качестве аргумента

const func_1 = (func_2) => {}

//func_1 - функция высшего порядка
//func_2 - callback-функция

// Зачем всё это?

const mult_2 = () => 2 * 2;
const mult_3 = () => 2 * 3;
const mult_4 = () => 2 * 4;

const mult_ = (num) => 2 * num;
mult_(2); // 2 * 2
mult_(3); // 2 * 3
mult_(50); // 2 * 50


const numbers = [1, 2, 3, 4, 5];

const squareNums = (arr) => {
  let result = [];
  for(let i = 0; i < arr.length; i++){
    result.push(arr[i] ** 2)
  }
  return result
}

const divideNums = (arr) => {
  let result = [];
  for(let i = 0; i < arr.length; i++){
    result.push(arr[i] / 2)
  }
  return result
}

const multNums = (arr) => {
  let result = [];
  for(let i = 0; i < arr.length; i++){
    result.push(arr[i] * 2)
  }
  return result
}

squareNums(numbers);
divideNums(numbers);
multNums(numbers);

// ====================================================================


const changeNums = (arr, callback) => {
    let result = [];
    for(let i = 0; i < arr.length; i++){
      result.push(callback(arr[i]))
    }
    return result
  }
  
  const mult_on_2 = (num) => num * 2;
  const divide_on_2 = (num) => num / 2;
  const pow_on_2 = (num) => num ** 2;
  
  changeNums(numbers, mult_on_2);
  changeNums(numbers, divide_on_2);
  changeNums(numbers, pow_on_2);