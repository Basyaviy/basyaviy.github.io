let arr=[navProduct,navCompany,navConnect];

navProduct.addEventListener("click", clickHandler);
navCompany.addEventListener("click", clickHandler);
navConnect.addEventListener("click", clickHandler);

// desktop mode
// let hideBlock = document.querySelector("#hideBlock");
hideBlock.addEventListener("mouseleave", mouseHandler);
hideBlock2.addEventListener("mouseleave", mouseHandler);
hideBlock3.addEventListener("mouseleave", mouseHandler);

function clickHandler() {
    //console.log("---start clickHandler---");
    
    // iterate all dropdown menu elements 
    for(let i=0;i<arr.length;i++){
        let elem = arr[i];
        //console.log("arr-"+i+": "+arr[i].getAttribute('id')+" hasOpen:"+elem.classList.contains("open"));
        //console.log("current: "+this.getAttribute('id')+" hasOpen:"+this.classList.contains("open"));
        // that is caller element?
        if(this==arr[i]){
            //console.log("--current element:"+i+" "+arr[i].getAttribute('id'));
            arr[i].classList.toggle("open");
        }else{
            //console.log("--other element:"+i+" "+arr[i].getAttribute('id'));
            // is this element not current and open? must be closed!
            if(arr[i].classList.contains("open")){
                arr[i].classList.remove("open");
            }
        }
    }
    //console.log("---end  clickHandler---");
  }
  


// close dropdown menu when leave block area
function mouseHandler(event){
    // console.log("---start mouseHandler---");
    this.parentNode.classList.remove("open");
}



navHamburger.addEventListener("click",humHandler);
function humHandler(){
    this.classList.toggle("open2")
}