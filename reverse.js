const numbers = [1,2,3,4,5,6,7];

// console.log(numbers);
// const reversed = numbers.reverse(); //original array k change korbe
// console.log(numbers);


const rev_numbers = [];
for(const number of numbers){
    rev_numbers.unshift(number);
}
// console.log(rev_numbers);

// reverse loop
const rev_num = [];
for(let i = numbers.length -1; i>=0; i--){
    num = numbers[i];
    rev_num.push(num);
}
console.log(rev_num);