//DOM REFERENCES
let safeContainer = document.getElementById('safeContainer');

//LOAD
window.addEventListener('load',setupSafe);
window.onresize = setupSafe;

function setupSafe(){
    let safeAreaLeft = getComputedStyle(document.documentElement).getPropertyValue('--sal');
    safeAreaLeft = parseInt(safeAreaLeft);
    if(safeAreaLeft > 0)
    {
        safeContainer.style.width = screen.height - (safeAreaLeft*2) + 'px';
    }else{
        saveContainer.style.width = '100%';
    }
}




