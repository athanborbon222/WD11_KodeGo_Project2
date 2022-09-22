let itemPrice1 = Number(document.getElementById("itemPrice1").innerHTML);
let itemName1 = document.getElementById("itemName1").innerHTML;
let itemNumber1 = document.getElementById("qty1").value;
let prdctID1 = document.getElementById("prdctID1").innerHTML;

let itemPrice2 = Number(document.getElementById("itemPrice2").innerHTML);
let itemName2 = document.getElementById("itemName2").innerHTML;
let itemNumber2 = document.getElementById("qty2").value;
let prdctID2 = document.getElementById("prdctID2").innerHTML;

let itemPrice3 = Number(document.getElementById("itemPrice3").innerHTML);
let itemName3 = document.getElementById("itemName3").innerHTML;
let itemNumber3 = document.getElementById("qty3").value;
let prdctID3 = document.getElementById("prdctID3").innerHTML;

let itemPrice4 = Number(document.getElementById("itemPrice4").innerHTML);
let itemName4 = document.getElementById("itemName4").innerHTML;
let itemNumber4 = document.getElementById("qty4").value;
let prdctID4 = document.getElementById("prdctID4").innerHTML;

let itemPrice5 = Number(document.getElementById("itemPrice5").innerHTML);
let itemName5 = document.getElementById("itemName5").innerHTML;
let itemNumber5 = document.getElementById("qty5").value;
let prdctID5 = document.getElementById("prdctID5").innerHTML;


let itemsData = [
    {
    id: prdctID1,
    name: itemName1,
    price: itemPrice1,
    qty: qty1,
    },
    {
    id: prdctID2,
    name: itemName2,
    price: itemPrice2,
    qty: qty2,
    },
    {
    id: prdctID3,
    name: itemName3,
    price: itemPrice3,
    qty: qty3,
    },
    {
    id: prdctID4,
    name: itemName4,
    price: itemPrice4,
    qty: qty4,
    },
    {
    id: prdctID5,
    name: itemName5,
    price: itemPrice5,
    qty: qty5,
    },
];

let calculation = () => {
    let cartIcon = document.getElementById("itemNumber");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };

let addCart = document.getElementById("addCart");


let items = {
    cartItems: [],
};

//  items = JSON.parse(localStorage.getItem("items"));

function addToCart() {
    let itemPrice = itemsData;
    let itemName = document.getElementById("itemName1").innerHTML;
    let itemNumber = document.getElementById("qty1").value;
    items.cartItems.push({item: itemName, price: itemPrice, Quantity: itemNumber});
    showCartItems();
    localStorage.setItem("items", JSON.stringify(items));
}
function showCartItems(){
    let currentItems = "";
    let cartItems = document.getElementById("cartItems");
    if (items.cartItems == ""){
        cartItems.innerHTML = "Cart Empty"
    } else {
        items.cartItems.forEach(function (showItem){
            currentItems += `
            <li class="d-flex flex-row w-100"><div class="card mb-3">
            <div class="row g-0">
              <div class="col-12">
                <div class="card-body">
                  <h5 class="card-title">Sample Product 1</h5>
                  <p class="card-text">₱999.99</p>
              </div>
              <div class="col-12 px-3 py-3 d-flex justify-content-center align-items-center">  
                <button class="btn btn-danger" onclick="decrement();"><i class="fa-solid fa-minus"></i></button>
                    <h4 class="px-3 mx-3 w-100 text-center">1</h4>
                <button class="btn btn-success" onclick="increment();"><i class="fa-solid fa-plus"></i></button>
                    <button class="btn btn-danger ms-3" onclick="this.parentNode.parentNode.parentNode.parentNode.remove();"><i class="fa fa-trash" aria-hidden="true"></i></button>
              </div>
                </div>
                <div class="card-footer">
                  <h5 class="text-center">₱999.99</h5>
                </div>
              </div>
            </div>
          </div>
          </li>`;
        });
        cartItems.innerHTML = currentItems;
    }
}
showCartItems();
