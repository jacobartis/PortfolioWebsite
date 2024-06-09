const cursor = document.getElementById("cursor-dot");
var lastX
var lastY
window.addEventListener('mousemove', function(e) {
  UpdatePos(e);
});
window.addEventListener('scroll', function(e) {
  UpdatePos(e);
});
window.addEventListener('change', function(e) {
  UpdatePos(e);
});

function UpdatePos(e){  
  if (e.clientX){
    lastX = e.clientX
  }
  if (e.clientY){
    lastY = e.clientY
  }
  cursor.style.left = (lastX+window.scrollX)+"px";
  cursor.style.top = (lastY+window.scrollY)+"px";
}

for(const link of document.getElementsByClassName("link")){
  link.addEventListener("mouseenter", function(e){
    cursor.innerHTML = "<h1>Open<h1>";
    cursor.classList.add("activeHover");
  })
  link.addEventListener("mouseleave", function(e){
    cursor.innerHTML = "";
    cursor.classList.remove("activeHover");
  })
}
for(const link of document.getElementsByClassName("project-card")){
  link.addEventListener("mouseenter", function(e){
    cursor.innerHTML = "<h1>View<h1>";
    cursor.classList.add("activeHover");
  })
  link.addEventListener("mouseleave", function(e){
    cursor.innerHTML = "";
    cursor.classList.remove("activeHover");
  })
}

for(const link of document.getElementsByClassName("copy")){
  link.addEventListener("mouseenter", function(e){
    cursor.innerHTML = "<h1>Copy<h1>";
    cursor.classList.add("activeHover");
  })
  link.addEventListener("mouseleave", function(e){
    cursor.innerHTML = "";
    cursor.classList.remove("activeHover");
  })
}