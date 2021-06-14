// product image selection

let productImg = document.getElementById("productImg");
let smallImg = document.getElementsByClassName("smallImg");

smallImg[0].onclick = _=> productImg.src =smallImg[0].src;
smallImg[1].onclick = _=> productImg.src =smallImg[1].src;
smallImg[2].onclick = _=> productImg.src =smallImg[2].src;
smallImg[3].onclick = _=> productImg.src =smallImg[3].src;

// color selection
document.getElementById("brown").addEventListener("click", function(){
     document.getElementById("productImg").style.backgroundImage = "green";
     console.log("i am clicked");
})

// addToCart function

function addToCart() {
    document.getElementById("addToCart").style.display = "block";
  }