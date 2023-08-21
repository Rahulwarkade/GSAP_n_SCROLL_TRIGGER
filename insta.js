var clutter = "";

var arr = [
    {stories:"https://images.unsplash.com/photo-1622396636133-ba43f812bc35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",story:"https://images.unsplash.com/photo-1610560815255-8a738237820c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"},
    {stories:"https://images.unsplash.com/photo-1617961940217-9ddb3338670e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",story:"https://images.unsplash.com/photo-1615805159563-afb93520d5e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"},
    {stories:"https://images.unsplash.com/photo-1622395853260-d69c3bbca3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",story:"https://images.unsplash.com/photo-1625474359711-7f84eee19e97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"},
    {stories:"https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",story:"https://images.unsplash.com/photo-1610477732019-1e7ea9ecf6f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"}
]

arr.forEach(function(val,index){
    clutter = clutter+`
    <div id="stories">
        <div id="story">
        <img id="${index}" src="${val.stories}" alt="">
        </div>
    </div>
`;
index++;
})

var overlay = document.querySelector("#overlay");
var pmaker = 0;
overlay.innerHTML = clutter;
overlay.addEventListener("click",function(det){
    document.querySelector("#fs img").setAttribute("src",arr[det.target.id].story);
    fs.style.display = "flex";
    if(pmaker<100){
   setInterval(function(){
        document.querySelector("#progress").style.width = `${pmaker}%`;
        pmaker++; 
    },30);}
    else{
        pmaker = 0;
    }
    setTimeout(function(){
        fs.style.display = "none";
    },3000);

})