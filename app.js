let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

let add = document.querySelectorAll(".add");
console.log(add);
/*
for(let i = 0; i < add.length; i++){
    add[i].addEventListener("click", function(){
        let prevProductsCount = +productsCountEl.textContent;
        console.log(prevProductsCount);
        productsCountEl.textContent = prevProductsCount + 1;
    });
}
*/

let imgSizeItem2 = document.querySelectorAll(".img-size-item2");
console.log(imgSizeItem2);


/*add.forEach((item) => {
    item.addEventListener("click", function (){
    productsCountEl.textContent = +productsCountEl.textContent + 1;
    });
});*/


let like1 = document.getElementById("like1");
function changeImgLike(){
    let imgLikeSrc = like1.getAttribute("src");
    if(imgLikeSrc === "images/icon_likeb.png"){
        like1.setAttribute("src", "images/icon_likew.png");
    }
    else{
        like1.setAttribute("src", "images/icon_likeb.png");
}
}

document.querySelector(".like").addEventListener("click", changeImgLike);




//document.querySelector(".like").addEventListener("click", changeImgLike);


let form = document.querySelector(".form");
let formButton = document.querySelector(".form-button")

let details = document.querySelectorAll(".details");
console.log(details);
details.forEach((button) =>{
    button.addEventListener("click", (s) => {
        s.preventDefault();
        form.classList.add("active");
        formButton.classList.add("active");
    })
})

formButton.addEventListener("click", (p)=> {
    p.preventDefault();
    form.classList.remove("active");

})

$(".slider").slick();

function Counter(incrementBtn, decrementBtn, inputField){
    this.domRefs = {
        incrementBtn,
        decrementBtn,
        inputField,
    };
    this.toggleButtonState = function () {
        let count = +this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count <= 1;
        this.domRefs.incrementBtn.disabled = count >= 10;
    };

    this.increment = function(){
        this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
        this.toggleButtonState();
    };
    this.decrement = function(){
        this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
        this.toggleButtonState();
    };

    this.domRefs.incrementBtn.addEventListener(
        "click",
        this.increment.bind(this)
    );
    this.domRefs.decrementBtn.addEventListener(
        "click",
        this.decrement.bind(this)
    );
    console.log(this);
}

let counter = new Counter(
    document.querySelectorAll(".increment-button")[0],
    document.querySelectorAll(".decrement-button")[0],
    document.querySelectorAll(".product-quantity input")[0]
);
console.log(counter);