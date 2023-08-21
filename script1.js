// var friend = document.querySelector("h1");
// var b = document.querySelector("button");
// var flag = 0;
// var timer;
// b.addEventListener("click",function(){
//     if(flag ===0)
//     {
//         friend.style.color = "rgb(205, 212, 0)";
//         friend.textContent = "requested";
//         b.textContent = "remove friend";
//         b.style.backgroundColor = "red";
//         timer = setTimeout(function(){
//             friend.style.color = "green";
//             friend.textContent = "Friend";
//         },2000);
//     flag = 1;
//     }
//     else{
//         friend.style.color = "rgb(230, 161, 161)";
//         friend.textContent = "stranger";
//         b.textContent = "Add friend";
//         b.style.backgroundColor = "green";
//         clearTimeout(timer);
//     flag = 0;
//     }
// });


// var cluster = "";

// arr.forEach(function(val,index){
//     cluster = cluster+`<div id="card">
//     <div id="pic">
//     <img src="${val.img}" alt="">
//     </div>
//     <h1 id = status>${val.name}</h1>
//     <div id="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente!
//         Lorem ipsum dolor sit amet.
//     </div>
//     <button ">add friend</button>
// </div>`;
// console.log(index);
// })
var overlay = document.querySelector("#overlay");
var arr = [
    {name:"Alpha",img:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1727&q=80",status:"Strenger"},
    {name:"Beta",img:"https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",status:"Strenger"},
    {name:"Gama",img:"https://images.unsplash.com/photo-1611558709798-e009c8fd7706?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1891&q=80",status:"Strenger"},
];
var show = function(){
    var cluster = "";
    var index = 0;

    arr.forEach(function(val){
        cluster = cluster+`<div id="card">
        <div id="pic">
        <img src="${val.img}" alt="">
        </div>
        <h1 id = "name">${val.name}</h1>
        <h3 id = "${val.status}"> ${val.status}</h1>
        <div id="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente!
            Lorem ipsum dolor sit amet.
        </div>
        <button class = "${val.status}" id=${index}>${(val.status==="Strenger")?"Add Friend":"Remove Friend"}</button>
    </div>`;
    index++;
    });
   overlay.innerHTML = cluster;

}
var flag = 0;
var timer;

show();
overlay.addEventListener("click",function(det){
    if(flag===0){
            arr[det.target.id].status = "Friend";
        show();
        flag =1;
    }
    else{
        arr[det.target.id].status = "Strenger";
        flag = 0
        show();
    }     
})

