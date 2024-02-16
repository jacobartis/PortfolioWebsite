
const sections = document.querySelectorAll(".section");
const scrollBasedElements = document.querySelectorAll(".scroll-based");

var scrollInterval = 800;

var scroll = 0;
var sectionHeight = 0;

function handleScroll(event){
  const delta = event.deltaY;
  
  scroll = Math.min(Math.max(scroll+delta/scrollInterval, 0),sections.length-.1);
  
  const currentSection = document.querySelector('.section.active');

  if (scroll<sectionHeight){
    sectionHeight = Math.max(sectionHeight-1, -1);
  } else if (scroll>(sectionHeight+1)){
    sectionHeight = Math.min(sectionHeight+1, sections.length);
  }
  updateScrollBased();
  scrollToSection();
}

window.addEventListener('wheel', handleScroll);
sections[0].classList.add('active');
window.scrollTo({
  top:sections[0].offsetTop,
  behavior:"smooth"
});

window.addEventListener('load', function(){
  scroll = window.scrollY/scrollInterval;
  console.log(scroll, window.scrollY, scrollInterval);
  updateScrollBased();
  scrollToSection();
});

window.addEventListener('resize', function(){
  updateScrollBased();
  scrollToSection();
});

function scrollToSection(){
  sections.forEach((sec)=>
  sec.classList.remove('active'));
  sections[Math.floor(scroll)].classList.add('active');
  window.scrollTo({
    top:sections[Math.floor(scroll)].offsetTop,
    behavior:"smooth"
  });
  console.log(scroll);
}

function updateScrollBased(){
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
    }
    ));
  });
}