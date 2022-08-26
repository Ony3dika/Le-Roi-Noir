let main = document.querySelector(".pros");


document.addEventListener("DOMContentLoaded", loadCart)

function loadCart(){
    let cart;

    if (localStorage.getItem("cart")===null){
        cart = []
    }else{
        cart = JSON.parse(localStorage.getItem("cart"))
    }

    cart.forEach((cloth)=>{
        let div = document.createElement("div")

        div.classList.add("row", "mt-0", "ms-xl-5")

        div.innerHTML = `
        <div class="col-3">
   
        <div class="card"><img class="rounded" src="${cloth[0]}" alt=""></div> 
    
        <p class="text-center name" id="piece">${cloth[1]}</p>
        </div>

        <div class="col-3">

        <div class="d-flex ms-xl-5 mt-xl-5 mt-3">

        <svg class="ms-xl-5 ms-0 neg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM136 232C122.7 232 112 242.7 112 256C112 269.3 122.7 280 136 280H312C325.3 280 336 269.3 336 256C336 242.7 325.3 232 312 232H136z"/></svg>

        <input class="w-25 mx-xl-3 rounded mx-0 px-0 px-xl-0 text-light bg-dark text-center qty" value="1" type="number" disabled>

        <svg class="pos" xmlns="http://www.w3.org/2000/svg"  width="30" height="30" fill="currentColor" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM224 368C237.3 368 248 357.3 248 344V280H312C325.3 280 336 269.3 336 256C336 242.7 325.3 232 312 232H248V168C248 154.7 237.3 144 224 144C210.7 144 200 154.7 200 168V232H136C122.7 232 112 242.7 112 256C112 269.3 122.7 280 136 280H200V344C200 357.3 210.7 368 224 368z"/></svg>
        </div>

        <div class="text-center pat">

        <button style="background-color:#ffd39e;color: black;" class="px-xl-2 px-1 rounded mt-3 ms-xl-3 exit" id="remove">REMOVE</button>
        
        </div>
        
        </div>

        <div class="col-3">
            <h5 class="text-center mt-5">$<span>${cloth[2]}</span></h5>
        </div>

        <div class="col-3">
            <h5 class="text-center mt-5 total">$<span>${cloth[2]}</span></h5>
        </div>
        `
       
        main.append(div)
    })

    let btn = document.querySelectorAll("#remove")

    btn.forEach((wave)=>{
        wave.addEventListener("click", rem)
    })

    //Increasing Quantity

    let add = document.querySelectorAll(".pos")

    add.forEach((btn)=>{
        btn.addEventListener("click", qtyIncrease)
    })

    //Reducing Quantity

    let min = document.querySelectorAll(".neg")

    min.forEach((btn)=>{
        btn.addEventListener("click", qtyReduce)
    })

}

//Removing From LS

function rem(e){
   
    let cart;

    if (localStorage.getItem("cart")===null){
        cart=[]
    }else{
        cart = JSON.parse(localStorage.getItem("cart"))
    }

    //console.log(cart)

    //console.log(this.parentElement) 

    if(this.parentElement.classList.contains("pat")){
        this.parentElement.parentElement.parentElement.remove()
    }else{
        console.log(false)
    }
    
    removels(e)
}

function removels(e){
    let cart;

    if (localStorage.getItem("cart")===null){
        cart=[]
    }else{
        cart=JSON.parse(localStorage.getItem("cart"))
    }
    
    cart.forEach(function(dell, index){

       if(dell.index === cart.index && e.target.parentElement.parentElement.parentElement.childNodes[1].childNodes[3].textContent === dell[1]){

        cart.splice(index,1)
        localStorage.setItem("cart",JSON.stringify(cart));
       }else{
        console.log(false)
       }

    })

}

function qtyIncrease (){
   let px =this.parentElement.childNodes[3].value = Number(this.parentElement.childNodes[3].value) + 1

   this.parentElement.parentElement.parentElement.childNodes[7].childNodes[1].childNodes[1].textContent = this.parentElement.parentElement.parentElement.childNodes[5].childNodes[1].childNodes[1].textContent * px +".00"
}


function qtyReduce(){
    let px =this.parentElement.childNodes[3].value = Number(this.parentElement.childNodes[3].value)

    if (px === 1 || px < 2){
       
    }else{
        px =this.parentElement.childNodes[3].value = Number(this.parentElement.childNodes[3].value) - 1

        this.parentElement.parentElement.parentElement.childNodes[7].childNodes[1].childNodes[1].textContent -= this.parentElement.parentElement.parentElement.childNodes[5].childNodes[1].childNodes[1].textContent 

        this.parentElement.parentElement.parentElement.childNodes[7].childNodes[1].childNodes[1].textContent += ".00"
    }  
}

