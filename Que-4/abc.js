
let array=[],array1=[];

let len = prompt("Enter the length of array");

let search_char = prompt('Enter the character to be searched : ');

for(let i=0;i<len;i++){
    array[i] = prompt('Enter elements');
    }
    
console.log(array);
for(let i=0;i<len;i++){
   
    let temp = array[i].split('');
    
if(temp.includes(search_char)){
    
    array1[i] = temp.join('');
    
    console.log(array1[i]);
    }
}