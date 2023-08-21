/*
var arr = [2,23,234,4,29,89,99,78,87];

//FUNCTION ANONYMOUS
arr.forEach(function(val)
{
    console.log(val);
})

//function statement

function fun(){
    console.log("hellow js what's up!!!! this is functiion statement");
}
fun();

//FUNCTION EXPRESSION

var funexp = function(){
    console.log("hellow js what's up this is function expression");
}
console.log(funexp);
funexp();
//FAT ARROW FUNCTON 
var fatFun = ()=> console.log("this is FAT ARROW FUNCTION ");
fatFun();
//FAT ARROW FUNCTION with one parameter
var funName = (name)=> "this is "+name+" warkade";
console.log(funName("rahul"));

var emplicit = ()=>12;

console.log(emplicit());

var h1 = domcument.querySelector("h1");
console.log(h1);*/
var parent = document.getElementById("parent");
var element = document.createElement("h2");
element.innerHTML = "adding some content to the html";
parent.append(element);
element.style.color = "red";
element.addEventListener("click",()=>alert("Hello"));

//script1

/*var h1 = document.querySelector("h1");

h1.textContent = "hello";
h1.style.color = "RED";

h1.addEventListener("dblclick",function(){
    h1.textContent = "lorem,ipsum";
    h1.style.color = "black";
});
var p = document.querySelector("p");
p.textContent = "lorem, ipsum lorem ipsum,lorem ipsum";
p.addEventListener("mouseover",function(){
    p.style.color = "blue";
});
p.addEventListener("mouseleave",function(){
    p.style.color = "black";
});

var button = document.querySelector("button");
var count =0;
button.addEventListener("click",function(){
    if(count>3)
        button.textContent = "ab mat karo pleeeeez X"+count;
    count++;
});*/

var h1 = document.querySelector("h1");
h1.textContent = "helo";
h1.style.color = "blue";
h1.addEventListener("mouseover",function(){
    h1.style.color = "black";
});
h1.addEventListener("mouseleave",function(){
    h1.style.color = "blue";
})
