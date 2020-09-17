window.onload= function(){
let initialbuses=[
   
];
if (localStorage.getItem("buses")==null){
    localStorage.setItem("buses",JSON.stringify(initialbuses));
}
};

function display(superarray=undefined){
    let tabledata="";
    let srno=1;
    let buses;
    if(superarray==undefined) {
        buses=JSON.parse(localStorage.getItem("buses"));
    } else {
        buses=superarray;
    }

    buses.forEach(function(bus){
         let currentrow=`<tr>
         <td>${srno}</td>
        <td>${bus.name}</td>
         <td>${bus.source}</td>
         <td>${bus.destination}</td>
         <td>${bus.number}</td>
         <td>${bus.passengercapacity}</td>
         </tr>`;
        tabledata += currentrow;
        srno++;
    });
    document.getElementsByClassName("tdata")[0].innerHTML= tabledata;
}
display();
function searchBySource(){
    let searchValue=document.getElementById("searchSource").value;
    let buses=JSON.parse(localStorage.getItem("buses"));
    let newdata = buses.filter(function(bus){
        return (bus.source.toUpperCase().indexOf(searchValue.toUpperCase())!=-1);
    });

    display(newdata);
}
function searchByDestination(){
    let searchValue=document.getElementById("searchDestination").value;
    let buses=JSON.parse(localStorage.getItem("buses"));
    let newdata = buses.filter(function(bus){
        return (bus.destination.toUpperCase().indexOf(searchValue.toUpperCase())!=-1);
    });

    display(newdata);
}


function addbus(e){
    e.preventDefault();
    let bus={};
    let name=document.getElementById("name").value;
    let source=document.getElementById("source").value;
    let destination=document.getElementById("destination").value;
    let number=document.getElementById("number").value;
    let passengercapacity=document.getElementById("passengercapacity").value;
    bus.name= name;
    bus.source=source;
    bus.destination=destination;
    bus.number=number;
    bus.passengercapacity=Number(passengercapacity);
    
    let buses=JSON.parse(localStorage.getItem("buses"));
    buses.push(bus);
    localStorage.setItem("buses",JSON.stringify(buses));
    display();
    document.getElementById("name").value="";
    document.getElementById("source").value="";
    document.getElementById("destination").value="";
    document.getElementById("number").value="";
    document.getElementById("passengercapacity").value="";
    
    
}