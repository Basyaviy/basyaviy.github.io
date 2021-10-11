const lightArr = document.querySelectorAll("#color");

function toggleMode(){
    for(var i=0;i<lightArr.length;i++){
        var el=lightArr[i];    
        el.classList.toggle("dark");
    }
}