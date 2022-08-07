// ? for loop
// for(var i = 0; i <= 20; i++){
//     if(i > 5){
//         break;
//     }
//     console.log(i)
// }
// ? while loop
// var roastGiven = 0;
// while(roastGiven < 10){
//     console.log('roast den');
//     roastGiven++
//     if(roastGiven > 4){
//         break;
//     }
// }

// var tableItems = ['Monitor', 'Pen', 'Mouse', 'Keyboard', 'Pendrive'];
// for(var i = 0; i < tableItems.length; i++){
//     var item = tableItems[i]
//     if(item == 'Pendrive'){
//         break;
//     }
//     console.log(item);
// }

var numbers = [45, 87, 89, 56, 32, 51, 25, 98, 45, 67];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        break;
    }
    console.log(number);
}