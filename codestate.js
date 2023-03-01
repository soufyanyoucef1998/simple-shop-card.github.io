if(document.readyState == 'loadind'){
    document.addEventListener('DOMContentLoaded',ready)
    ();

}else{
    ready();
}

function ready(){

    let removeButton = document.getElementsByClassName('.btn-dnger');

for(i = 0; i < removeButton.length; i++){
    let button1 = removeButton[i];
    button1.addEventListener('click',removeRow);
    }


    let quantiteButton = document.querySelectorAll('.item-quantite');

for(i = 0; i < quantiteButton.length; i++){
    let button2 = quantiteButton[i];
    button2.addEventListener('change',changeQuantite);
    }



    let addButton = document.querySelectorAll('.add-card-btn');

for(i = 0; i < addButton.length; i++){
let button3 = addButton[i];
button3.addEventListener('click',addItemsToRow)
}



    


}












function addItemsToRow(e){
let buttonCLICKED = e.target;
let child = buttonCLICKED.parentElement;

let title = child.getElementsByClassName('item-title')[0].innerText;
let price = child.getElementsByClassName('item-price')[0].innerText;
let img = child.getElementsByClassName('item-img')[0].src;

addContentToRow(title,price,img)
updateTotalPrice();

}
function addContentToRow(titlee,pricee,imgg){
   
    let addDiv = document.createElement('div');
    addDiv.classList.add('cart-row-items');
    let parent = document.getElementsByClassName('shop-items-column')[0];
    
   
    let divContent = `
    <div class="row-items">
    <img class="item-imgg" src="${imgg}">
    <span class="item-titlee">${titlee}</span>
    </div>
    <span class="item-pricee">${pricee}</span>
     <div>
     <input class="item-quantite" type="number" value="1">
     <button class="btn-dnger" type="button">remove</button>
     </div>

  </div>

    `
    let ttt = parent.querySelectorAll('.item-titlee');
    console.log(ttt);
    for(i = 0; i < ttt.length; i++){
   if(ttt[i].innerText === titlee){
alert('fdfdfd');
return;
}
    } 
    parent.appendChild(addDiv);
    addDiv.innerHTML = divContent;
    addDiv.getElementsByClassName('btn-dnger')[0].addEventListener('click',removeRow);
    addDiv.getElementsByClassName('item-quantite')[0].addEventListener('change',changeQuantite);
 

}



    function removeRow(e){

        let button = e.target;
        button.parentElement.parentElement.remove();
       updateTotalPrice();
    }

    function changeQuantite(e){
        let button = e.target;
        if(button.value === NaN || button.value < 0){
            button.value = 0;
        }
        updateTotalPrice();
    }


    function updateTotalPrice(){
        let total = 0; 
let rows = document.getElementsByClassName('shop-items-column')[0];
let rowContent = rows.getElementsByClassName('cart-row-items');

for(i = 0; i < rowContent.length; i++){
    
    let theRow = rowContent[i];
   
    let thePrice = theRow.getElementsByClassName('item-pricee')[0].innerText;
    let priceToNumber = parseFloat(thePrice);

    let theQuantite = theRow.getElementsByClassName('item-quantite')[0].value;

     total = total + (priceToNumber * theQuantite);
     
     
    }

    document.getElementsByClassName('purchase')[0].innerText = total +' '+ '$';
    
    }