
function detectLeft(){
    let scrollLeft = document.documentElement.scrollLeft;
    console.log(scrollLeft);
    if (scrollLeft>0){
        window.scrollBy({
            left: -scrollLeft,
            behavior: 'auto'
        });
    }
    setTimeout(detectLeft, 100);
}

detectLeft();