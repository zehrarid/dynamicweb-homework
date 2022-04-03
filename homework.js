var products = []
var cartItems = []

class Product {

    constructor(){
        this.productImage = ""
        this.productDescription = ""
        this.productPrice = 0
        this.productTitle = ""
    }
}


window.onload = function(){
    let addProductBtn = document.getElementById("addnewitembtn")
    addProductBtn.onclick = function() {
        let addProductPanel = document.getElementById("addNewProduct")
        if(addProductPanel.style.visibility === "hidden"){
            addProductPanel.style.visibility = "visible"
        }
        else
        {
            addProductPanel.style.visibility = "hidden"
        }
    }
}

function addItem(){
    let item = new Product()
    item.productTitle = document.getElementById("productTitle").value
    item.productDescription = document.getElementById("productDescription").value
    item.productImage = document.getElementById("productImage").value
    item.productPrice = document.getElementById("productPrice").value
    products.push(item)
    showProducts()
    document.getElementById("addNewProduct").style.visibility = "hidden"
}

function showProducts(){
    let items = document.getElementById("cartContainer")
    for(let i = 0; i < products.length ; i++){
        items.innerHTML +=
        '<h2>'+products[i].productTitle+'</h2>'+
        '<p>'+products.productDescription+'</p>'+
        '<img src="'+products.productImage+'">'+
        '<p>'+products.productPrice+'</p>'+
        '<button class="bttn">add cart</button>'
        
    }
    
}

function displayCart(){


}

function checkoutScreen(){
    if(document.getElementById("CheckOutScreen").style.visibility === "hidden"){
        document.getElementById("CheckOutScreen").style.visibility = "visible"
    }
    else{
        document.getElementById("CheckOutScreen").style.visibility = "hidden"

    }
}
