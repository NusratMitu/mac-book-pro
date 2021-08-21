//memory
document.getElementById('memory-8GB').addEventListener('click',function(){
    getMemoryCost(0);
});
document.getElementById('memory-16GB').addEventListener('click',function(){
   getMemoryCost(180);
  
});
function getMemoryCost(memoryCost){
   const memoryCostId = document.getElementById('memory-cost');
   memoryCostId.innerText = memoryCost;
    totalPrice();
}

//storage
document.getElementById('storage-256GB').addEventListener('click',function(){
   getStorageCost(0);
});
document.getElementById('storage-512GB').addEventListener('click',function(){
   getStorageCost(100);
});
document.getElementById('storage-1TB').addEventListener('click',function(){
   getStorageCost(180);
});
function getStorageCost(storageCost){
   const storageCostId = document.getElementById('storage-cost');
   storageCostId.innerText = storageCost;
    totalPrice();
}

//delivery
document.getElementById('free-shipping').addEventListener('click',function(){
   getDeliveryCost(0);
   
});
document.getElementById('charged-shipping').addEventListener('click',function(){
   getDeliveryCost(20);
   
});
function getDeliveryCost(deliveryCost){
   const deliveryCostId = document.getElementById('delivery-cost');
   deliveryCostId.innerText = deliveryCost;
    totalPrice();
}

//calculate total price
function totalPrice() {
   const memoryCost = parseInt(document.getElementById('memory-cost').innerText);
   const storageCost = parseInt(
     document.getElementById('storage-cost').innerText
   );
   const deliveryCost = parseInt(
     document.getElementById('delivery-cost').innerText
   );
   const totalPrice = 1299 + memoryCost + storageCost + deliveryCost;
   document.getElementById('total-price').innerText = totalPrice;
 }
 
 //handle apply button
 document.getElementById('apply-confimr').addEventListener('click',function(){
    const inputCode = document.getElementById('input-code');
    const promoCode = inputCode.value;
    if(promoCode == 'stevekaku'){
        inputCode.value = '';
        let total = document.getElementById('total').innerText;
        const discountprice = total - total * 0.2;
        document.getElementById('total').innerText = discountprice;
    }
 });