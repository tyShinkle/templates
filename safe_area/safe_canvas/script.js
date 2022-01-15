//DOM REFERENCES
let safeContainer = document.getElementById('safeContainer');
let nav = document.getElementById('nav');
let menu = document.getElementById('menu');
let menuBtn = document.getElementById('menuBtn');
let menuActive = false;
let canvas = document.getElementById('canvas');
let safeArea;

//LOAD
window.addEventListener('load',setupSafe);
window.onresize = setupSafe;

function setupSafe(){
    safeAreaLeft = getComputedStyle(document.documentElement).getPropertyValue('--sal');
    safeAreaLeft = parseInt(safeAreaLeft);
    if(safeAreaLeft > 0)
    {
        safeContainer.style.width = screen.height - (safeAreaLeft*2) + 'px';
    }else{
        safeContainer.style.width = '100%';
    }
    console.log('window:'+window.innerHeight);
    console.log('navHeight:'+nav.offsetHeight);
    canvas.width = nav.offsetWidth;
    canvas.style.width = nav.offsetWidth;
    canvas.height = window.innerHeight-nav.offsetHeight;
    canvas.style.height = window.innerHeight-nav.offsetHeight;
    console.log(canvas.height);
}

function slideMenu(){
    if(!menuActive){
        menu.style.transform = 'translate3d(0,0,0)';
        menuActive = true;
    }else{
        menu.style.transform = 'translate3d(0,-100%,0)';
        menuActive = false;
    }
}

//EVENT LISTENERS
menuBtn.addEventListener('click',slideMenu);





