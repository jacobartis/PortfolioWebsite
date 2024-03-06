const followers = document.querySelectorAll(".follower");

window.addEventListener("scroll", function(){
    followers.forEach((ele)=>{
    updatePos(ele);
    });
});

window.addEventListener("resize",function(){
    followers.forEach((ele)=>{
        updateOffset(ele);
        updatePos(ele);
    });
});

function updateOffset(ele){
    ele.dataset.heightOffset = ele.getBoundingClientRect().top;
    console.log(ele.dataset.heightOffset);
}

function updatePos(ele){
    let topValue = document.documentElement.scrollTop-(ele.dataset.heightOffset);
    ele.style.top = topValue+"px"
}

followers.forEach((ele)=>{
    updateOffset(ele);
    updatePos(ele);
});