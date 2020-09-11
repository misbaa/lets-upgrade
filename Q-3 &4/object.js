 let person=[
 {
     name:"Richard",
     age:28,
     country:"England",
     hobbies:["Swimming","Painting","Reading","Listening music"]
 },
 {
     name: "Katherine",
     age: 35,
     country:"Germany",
     hobbies:["Swimming","Painting","Reading","Cooking"]
 },
 {
    name: "Damon",
    age: 21,
    country:"India",
    hobbies:["Watching Series","Painting","Reading","Cooking"]
 },

 ];

person.forEach(function(person){
    console.log(person);
});
person.forEach(function(person){
    if(person.age<=30)
    {
        console.log(person);
    }
});    
person.forEach(function(person){
    if(person.country="India")
    {
        console.log(person);
    }
    

    

});




 


 


