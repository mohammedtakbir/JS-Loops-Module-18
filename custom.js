// ? while loop
/* let i =0;
while(i < 5){
    console.log('hellow World');
    i++;
} */


// ? for loop
/* for(let i = 0; i < 10; i++){
    console.log(i, 'ongoing thing');
} */

// ? display odd and even number using loop
 
/* for(let i = 0; i < 20; i = i + 2){
    console.log(i)
} */

/* let i = 1;
while(i < 20){
    console.log(i);
    i += 2
} */
// ? revere loop
/* for(let i=20; i>=1; i -= 2){
    console.log(i)
}
 */
/* let i = 19;
while(i>=1){
    console.log(i);
    i -=2;
}
 */
// ? display reverse odd and even number using loops
/* var i = 20;
while(i >= 0){
    console.log(i);
    i -= 2;
} */

/* for(var i=19; i>0; i-=2){
    console.log(i);
} */

// for(var i=0;i<10;i++){
//     console.log(i)
// }




// ? display every element of an array using for loop
/* var numbers = [45, 87, 89, 56, 32, 51, 87, 80, 36, 99];
let sum =0;
let evenNumbers = [];
for(let i=0;i<numbers.length; i++){
    var element = numbers[i];
    if(element % 2 === 0){
        evenNumbers.push(element);
    }
}
console.log(sum);
console.log(evenNumbers); */


// ? Break statement
/* var numbers = [45, 48, 21, 18, 32, 51, 87, 80, 36, 99];
for(let i=0; i<numbers.length;i++){
    var element = numbers[i];
    if(element > 50){
        break;
    }
    console.log(element);
}
console.log(element);
 */



// ? Continue statement
var numbers = [45, 48, 21, 18, 32, 51, 87, 80, 36, 99];
for(var i=0;i<numbers.length;i++){
    var element=numbers[i]
    if(element < 50){
        continue;
    }
    console.log(element);
}