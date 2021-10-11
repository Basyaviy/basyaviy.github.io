const lightArr = document.querySelectorAll("#color");
var currentColor="dark";

function toggleMode()
{
    if(currentColor==="light"){
        toDarkMode();
    }else{
        toLightMode();
    }
}


function toLightMode(){
    const lightArr = document.querySelectorAll("#color");
    for(var i=0;i<lightArr.length;i++){
        var el=lightArr[i];        
        el.classList.add('light');
        el.classList.remove('dark');
    }
    currentColor="light";
}

function toDarkMode(){
    for(var i=0;i<lightArr.length;i++){
        var el=lightArr[i];        
        el.classList.add('dark');
        el.classList.remove('light');
    }
    currentColor="dark";
}