
const sections = document.querySelectorAll(".section");
const scrollBasedElements = document.querySelectorAll(".scroll-based");

const scrollInterval = 800;

var scroll = 0;
var sectionHeight = 0;

function handleScroll(event){
  const delta = event.deltaY;
  
  scroll = Math.min(Math.max(scroll+delta, 0),scrollInterval*sections.length-80);
  
  const currentSection = document.querySelector('.section.active');
  nextSection = null;

  if (scroll<sectionHeight*scrollInterval){
    nextSection = currentSection.previousElementSibling;
    sectionHeight = Math.max(sectionHeight-1, -1);
  } else if (scroll>(sectionHeight+1)*scrollInterval){
    nextSection = currentSection.nextElementSibling;
    sectionHeight = Math.min(sectionHeight+1, sections.length);
  }
  
  console.log(scroll, sectionHeight,scroll/scrollInterval);

  scrollBasedElements.forEach((ele) =>{
    const offset = ele.getAttribute("section")*scrollInterval;
    const scrollVal = Number(ele.getAttribute("scroll-value"))+offset;
    console.log(scrollVal);
    if (scroll>=scrollVal){
      ele.classList.remove("hidden");
    }else{
      ele.classList.add("hidden");
    }
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

scrollBasedElements.forEach((ele) =>{
  ele.classList.add("hidden");
});


