let pros = document.querySelector(".pros");

document.addEventListener("DOMContentLoaded", cartLoad)

function cartLoad(){

    let cart;
    
      if (localStorage.getItem("cart")===null){
        cart=[]
    }
    else{
        cart=JSON.parse(localStorage.getItem("cart"))
    }

    //console.log(cart)

    cart.forEach(function(item){

        let div = document.createElement("div")

        div.classList.add("row","mt-0","ms-xl-5")

        //Price X Qty
        
        let qty = 2

        //console.log(qty)
       
        let mul= item[2]* qty;

        // //Col 1

        // let col1 = document.createElement("div")

        // col1.className="col-3"

        // let sec = document.createElement("div")

        // sec.className="card"

        // let img = document.createElement("img")
        // img.src= item[0]

        // img.className = "rounded"

        // let para = document.createElement("p")
        // para.className = "text-center"

        // para.textContent=item[1]

        // sec.append(img)
        // col1.append(sec)
        // col1.append(para)

        // //Col 2

        // let col2 = document.createElement("div")

        // col2.className="col-3"

        // let pat = document.createElement("div")

        // pat.classList.add("text-center", "pat")

        // btn = document.createElement("button");
        // btn.classList.add("px-xl-2","px-1", "rounded", "mt-3", "ms-xl-3","exit")
        // btn.id = "exit"
        // btn.style.backgroundColor = "#ffd39e"
        // btn.style.color = "black"
        // btn.textContent="Remove"


        // pat.append(btn)
        // col2.append(pat)

        // //Col 3

        // let col3 = document.createElement("div")

        // col3.className="col-3"

        // //Col 4

        // let col4 = document.createElement("div")

        // col4.className="col-3"

        // pros.append(div)
        // div.append(col1)
        // div.append(col2)
        // div.append(col3)
        // div.append(col4)

        
        div.innerHTML= ` 
        <div class="col-3">
   
        <div class="card"><img class="rounded" src="${item[0]}" alt=""></div> 
    
        <p class="text-center name">${item[1]}</p>
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
            <h5 class="text-center mt-5">$${item[2]}</h5>
        </div>

        <div class="col-3">
            <h5 class="text-center mt-5" id="tilt">$${mul}.00</h5>
        </div>

        <hr>`
        pros.append(div)

    })

    let btn = Array.from (document.querySelectorAll("#remove"))

    //console.log(btn)

    btn.map((rem)=>{
        rem.addEventListener("click", (e,index)=>{
            let cart;

            if(localStorage.getItem("cart")===null){
                cart = []
            }
            else{
                cart = JSON.parse(localStorage.getItem("cart"))
            }

            btn.map((stuff)=>{
                console.log(stuff)
            })
        }) 
    })   
 }

 

