var slider = document.getElementById("myRange");
var output = document.getElementById("rangeDisplay");
var switcher = document.getElementById("switch");

//initial variables 
var monthly_bool = true;
var current_position = slider.value;

// .chrome styling Vanilla JS
// Update the current range-slider value (each time you drag the slider handle)
slider.oninput = function() {
    //take current position
    current_position = this.value;
    //set value 
    setValue();
    //styling background line of range-slider
    var position = (this.value-this.min)/(this.max-this.min)*100;
    this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ' + position + '%, hsl(224, 65%, 95%) ' + position + '%, hsl(224, 65%, 95%) 100%)'
}


switcher.onclick = function(){
    //yearly
    if(monthly_bool){
        //indent for value
        output.style.width = "100px";
        //style the round slide of switcher
        this.classList.add('action');
        monthly_bool=false;
    }else{
        //monthly
        output.style.width = "80px";
        this.classList.remove('action');
        monthly_bool=true;
    }
    setValue();
}

//calculate current value depends of switch and range slider positions 
function setValue(){
    if(monthly_bool){
        output.innerText = parseFloat(current_position).toFixed(2);
    }else{
        //yearly
        output.innerText = (current_position*12).toFixed(2);
    }
}