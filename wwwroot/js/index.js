const detailButtons = Array.from(document.getElementsByClassName(
    "detail-button"
));
console.log(detailButtons);
var open_proj = null;

detailButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("project-id");
        const targetDetails = document.getElementById(targetId);
        if (targetDetails){
          toggle(targetDetails);
        }
    })
})
  
function toggle(element){
    element.classList.toggle("closed");
    if (open_proj && open_proj!=element){
      open_proj.classList.toggle("closed");
    }
    open_proj = null;
    if (!element.classList.contains("closed")){
      open_proj = element;
    }
}