var grandTotal;

function addCart(){
    let gift1quantity = parseInt(document.getElementById("gift1quantity").value);
    let gift2quantity = parseInt(document.getElementById("gift2quantity").value);
    let gift3quantity = parseInt(document.getElementById("gift3quantity").value);
    let gift4quantity = parseInt(document.getElementById("gift4quantity").value);
    let gift5quantity = parseInt(document.getElementById("gift5quantity").value);
    let gift6quantity = parseInt(document.getElementById("gift6quantity").value);
    let gift7quantity = parseInt(document.getElementById("gift7quantity").value);
    let boxquantity = parseInt(document.getElementById("boxquantity").value);
    let shirtSquantity = parseInt(document.getElementById("shirtSquantity").value);
    let shirtMquantity = parseInt(document.getElementById("shirtMquantity").value);
    let shirtLquantity = parseInt(document.getElementById("shirtLquantity").value);
    let shirtXLquantity = parseInt(document.getElementById("shirtXLquantity").value);
    let maskquantity = parseInt(document.getElementById("maskquantity").value);
    let posterquantity = parseInt(document.getElementById("posterquantity").value);

    let cartItems = document.getElementById("cartItems");
    let subTotal = 0;
    let tax = 0;
    grandTotal = 0;

    console.log(gift1quantity, gift2quantity, gift3quantity, gift4quantity, gift5quantity, gift6quantity, gift7quantity, boxquantity);
    console.log(shirtSquantity, shirtMquantity, shirtLquantity, shirtXLquantity);
    console.log(maskquantity, posterquantity);

    calItems(maskquantity, 30, "MIRROR Mask");
    calItems(shirtSquantity, 45, "MIRROR One & All Tee (Size S)");
    calItems(shirtMquantity, 45, "MIRROR One & All Tee (Size M)");
    calItems(shirtLquantity, 45, "MIRROR One & All Tee (Size L)");
    calItems(shirtXLquantity, 45, "MIRROR One & All Tee (Size XL)");
    calItems(boxquantity, 35, '"One & All" Live 2021 Concert Box Set');
    calItems(gift1quantity, 50, "Special Gift Set 1");
    calItems(gift2quantity, 50, "Special Gift Set 2");
    calItems(gift3quantity, 50, "Special Gift Set 3");
    calItems(gift4quantity, 50, "Special Gift Set 4");
    calItems(gift5quantity, 50, "Special Gift Set 4");
    calItems(gift6quantity, 50, "Special Gift Set 5");
    calItems(gift7quantity, 50, "Special Gift Set 6");
    calItems(posterquantity, 20, "MIRROR Poster");

    function calItems(itemQ, cost, itemName){
        let itemsubTotal=0;

        if (itemQ!=0){
        itemsubTotal = cost*itemQ;
        subTotal = subTotal + itemsubTotal;
        cartItems.innerHTML += `${itemName} x ${itemQ} - $${itemsubTotal} <br>`;
        }      
    }

    //print subtotal
    document.getElementById("subTotal").innerHTML = `Sub Total: $${subTotal.toFixed(2)}`;
    
    //calculate tax
    tax = subTotal * 0.12;
    document.getElementById("tax").innerHTML = `Tax (12%): $${tax.toFixed(2)}`;
    
    //calculate grandTotal
    grandTotal = subTotal + tax;
    document.getElementById("grandTotal").innerHTML = `Grand Total: $${grandTotal.toFixed(2)}`;
}

function confirmPurchase(){
    let itemQty = document.getElementsByClassName("quantity");
    let cartItems = document.getElementById("cartItems");

    if (cartItems.innerHTML == ""){
        alert("Your shopping cart is empty!");
    }
    else{
        let purchase = confirm(`Thank you for confirming your purchase. The total amount is $${grandTotal}. We will now proceed for payment.`);
      
        if (purchase == true){
            for(let i = 0; i < itemQty.length; i++){
              itemQty[i].value="0";
            }
            cartItems.innerHTML="";
            document.getElementById("subTotal").innerHTML = "";
            document.getElementById("tax").innerHTML = "";
            document.getElementById("grandTotal").innerHTML = "";
        }
    }  
      
      
}
  
function clearEntries(){
    let itemQty = document.getElementsByClassName("quantity");
        for(let i = 0; i < itemQty.length; i++){
          itemQty[i].value="0";
        }
        document.getElementById("cartItems").innerHTML="";
        document.getElementById("subTotal").innerHTML = "";
        document.getElementById("tax").innerHTML = "";
        document.getElementById("grandTotal").innerHTML = "";
}