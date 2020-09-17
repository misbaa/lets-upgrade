let employees= [
    {
        name:"Disha",
        age: 23,
        city:"Kolkata",
        salary:15000,
   },
   {
    name:"Krithik",
    age: 25,
    city:"Pune",
    salary:25000,
   },
   {
    name:"Riya",
    age: 24,
    city:"Pune",
    salary:15000,
   },

];
function display(superarray){
    let tabledata="";
    let srno=1;

superarray.forEach(function(employee,index){
    let currentrow=`<tr>
    <td>${srno}</td>
    <td>${employee.name}</td>
    <td>${employee.age}</td>
    <td>${employee.city}</td>
    <td>${employee.salary}</td>
    <td><button onclick='deleteemployee(${index})'>delete</button></td>
    </tr>`;
    tabledata += currentrow;
    srno++;
    
});
document.getElementsByClassName("tdata")[0].innerHTML= tabledata;
}

display(employees);
 function searchByName(){
    let searchValue=document.getElementById("searchName").value;
    let newdata = employees.filter(function(employee){
        return (employee.name.toUpperCase().indexOf(searchValue.toUpperCase())!=-1);
    });
    display(newdata);
 }
function searchByCity(){
    let searchValue=document.getElementById("searchCity").value;
    let newdata = employees.filter(function(employee){
        return (employee.city.toUpperCase().indexOf(searchValue.toUpperCase())!=-1);

});    
  display(newdata);
}  



 function deleteemployee(index) {
     employees.splice(index,1);
     display(employees);

 }
