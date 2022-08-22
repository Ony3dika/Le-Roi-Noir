let pros = document.querySelector(".pros")

document.addEventListener("DOMContentLoaded", cartLoad)

function cartLoad(){
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
       
       
       div.innerHTML= ` 
            <div class="col-3">
               
                <div class="card"><img class="rounded" src="${item[0]}" alt=""></div> 
                
                <p class="text-center name">${item[1]}</p>
            </div>

            <div class="col-3">

                <div class="d-flex ms-xl-5 mt-xl-5 mt-3">

                    <svg class="ms-xl-5 ms-0" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM136 232C122.7 232 112 242.7 112 256C112 269.3 122.7 280 136 280H312C325.3 280 336 269.3 336 256C336 242.7 325.3 232 312 232H136z"/></svg>

                    <input class="w-25 mx-xl-3 rounded mx-0 px-0 px-xl-0 text-light bg-dark text-center" value="1" type="number" disabled>

                    <svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" fill="currentColor" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM224 368C237.3 368 248 357.3 248 344V280H312C325.3 280 336 269.3 336 256C336 242.7 325.3 232 312 232H248V168C248 154.7 237.3 144 224 144C210.7 144 200 154.7 200 168V232H136C122.7 232 112 242.7 112 256C112 269.3 122.7 280 136 280H200V344C200 357.3 210.7 368 224 368z"/></svg>
                </div>

               <div class="text-center pat"><button style="background-color:#ffd39e;color: black;" class="px-xl-2 px-1 rounded mt-3 ms-xl-3 exit">REMOVE</button></div>
            </div>

            <div class="col-3">
                <h5 class="text-center mt-5">$${item[2]}</h5>
            </div>

            <div class="col-3">
                <h5 class="text-center mt-5">$800.00</h5>
            </div>

            <hr>
            `

        pros.append(div)

    })

    let dele = Array.from(document.querySelectorAll(".exit"))

    console.log(dele)

    dele.map((tick)=>{
        tick.addEventListener("click", (e)=>{

            let cart;

            if (localStorage.getItem("cart"===null)){
                cart = []
            }

            else{
                cart = JSON.parse(localStorage.getItem("cart"))
            }

            cart.forEach(function(e){
                console.log(50)
            })
        })
    })
 
}


let dele = Array.from(document.querySelectorAll(".exit"))

    console.log(dele)
  
    dele.map((remove)=>{
        remove.addEventListener("click", resolve)

        function resolve(){

            let cart;

            if (localStorage.getItem("cart"===null)){
                cart = []
            }

            else{
                cart=JSON.parse(localStorage.getItem("cart"))
            }


            cart.forEach((stuff,index)=>{

                let comms =  document.querySelector(".name");

                if(stuff[1].textContent == comms.textContent){

                    cart.splice(index, 1)
                }else{
                    console.log(stuff[1])
                }
            })

            localStorage.setItem("cart",JSON.stringify(cart))
    }
})
