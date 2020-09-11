function pic1(){
    const ele=document.getElementById("image");
    // console.log(ele.src);
    ele.src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg";

}
function changeimage(){
    const ele=document.getElementById("image");
    const newUrl=
    "https://i.pinimg.com/736x/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg";
     ele.src= newUrl;
}
function changeonceagain(){
    const ele=document.getElementById("image");
    const path ="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg";

    ele.src=path;
}

