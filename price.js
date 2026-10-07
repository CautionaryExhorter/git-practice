 async function получитьЦену() {
  try {
    
    const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
    
    if (!response.ok) {
    console.log("Ошибка сервера, код:", response.status);
    
      return;
    }
    
    const data = await response.json();
    console.log("Цена BTC в USD:", data.bitcoin.usd);
    
    } catch (ошибка) {
      console.log("Ошибка запроса:", ошибка);
    
    }  
}

получитьЦену();
 
