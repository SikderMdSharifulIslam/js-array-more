const friends = ['Hasib', 'Rakib', 'Mujahid', 'Akib']; //case sensitive
// console.log(friends);
const sortedFriends = friends.sort();
// console.log(sortedFriends);

const numbers = [5,6,2,3,4,7];
// console.log(numbers.sort()); //ascending sorting -> choto theke boro but single digit

// advance (multiple digit sort)

const nums = [11, 1, 14, 4, 3, 7, 2, 9];
const nums_ascending_copy_array = [...nums].sort(function(a, b){return a - b});
const nums_decending_copy_array = [...nums].sort(function(a, b){return b - a});

console.log(nums);
console.log(nums_ascending_copy_array);
console.log(nums_decending_copy_array);

