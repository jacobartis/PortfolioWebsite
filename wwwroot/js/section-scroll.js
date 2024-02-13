
const sections = document.querySelectorAll(".section");
const scrollBasedElements = document.querySelectorAll(".scroll-based");

const scrollInterval = 800;

var scroll = 0;
var sectionHeight = 0;

function handleScroll(event){
  const delta = event.deltaY;
  
  scroll = Math.min(Math.max(scroll+delta/scrollInterval, 0),sections.length-.1);
  
  const currentSection = document.querySelector('.section.active');
  nextSection = null;

  if (scroll<sectionHeight){
    nextSection = currentSection.previousElementSibling;
    sectionHeight = Math.max(sectionHeight-1, -1);
  } else if (scroll>(sectionHeight+1)){
    nextSection = currentSection.nextElementSibling;
    sectionHeight = Math.min(sectionHeight+1, sections.length);
  }
  
  console.log(scroll, sectionHeight,scroll/scrollInterval);

  scrollBasedElements.forEach((ele) =>{
    const offset = Number(ele.getAttribute("section"));
    const values = ele.getAttribute("scroll-value").split(",");
    var index = 0;
    values.forEach((val =>{
      const className = ele.getAttribute("scroll-classes").split(",")[index];
      if (scroll>=Number(val)+offset){
        ele.classList.add(className);
      }else{
        ele.classList.remove(className);
      }
      index ++;
      //console.log(val,className);
    }
    ));
  });

  if (nextSection==null){
    return;
  }
  if (!nextSection.classList.contains("section")){
    return;
  }
  currentSection.classList.remove("active");
  nextSection.classList.add("active");
  window.scrollTo({
    top:nextSection.offsetTop,
    behavior:"smooth"
  });
}

window.addEventListener('wheel', handleScroll);
sections[0].classList.add('active');
window.scrollTo({
  top:sections[0].offsetTop,
  behavior:"smooth"
});

window.addEventListener('load', function(){
  scroll = -.2;
  sections.forEach((sec)=>
  sec.classList.remove('active'));
  sections[0].classList.add('active');
  window.scrollTo({
    top:sections[0].offsetTop,
    behavior:"smooth"
  });
  console.log(scroll);
});