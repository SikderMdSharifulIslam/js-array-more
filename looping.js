/* 
* Looping Technique
* 1. for loop 
* 2. while loop
* 3. do while loop --> ignore
* 4. for of --> array loop korar jonno
* 5. for in --> object loop korar jonno
*/


const friends = ['elon', 'bill', 'mark', 'waren'];

for(const friend of friends){
    // console.log(friend);
}

for (let i = 0; i < friends.length; i++) {
        // console.log(i, friends[i]);
    }
    
let i = 0;
while(i < friends.length){
    console.log(i, friends[i]);
    i++;
}