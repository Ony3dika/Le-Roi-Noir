let cart = Array.from (document.querySelectorAll("#cart"));

cart.map(
    (button)=>{
        button.addEventListener("click",(e)=>{

            let clip = e.target.parentElement.parentElement.parentElement;

            if(clip.classList.contains("list")){
                var image = clip.childNodes[1].childNodes[1].childNodes[1].childNodes[1].src;

                //console.log(image)

                var proName = clip.childNodes[3].childNodes[1].textContent;
                //console.log(proName)

                var price = clip.childNodes[3].childNodes[3].childNodes[1].textContent;
                //console.log(price)

                let noir = [image,proName,price]

                console.log(noir)

                let cart;

                if(localStorage.getItem("cart")===null){
                    cart = []
                }
                else{
                    cart = JSON.parse(localStorage.getItem("cart"))
                }
                cart.push(noir)
                localStorage.setItem("cart",JSON.stringify(cart))
            }

        })
    }
)