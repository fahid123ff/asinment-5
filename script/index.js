
function handleClick() {
    const ticketSection = document.getElementById('showTiketSection');
    ticketSection.classList.remove('hidden');
}

let count = 0;
let price = 0;
// all button
const allBtn = document.getElementsByClassName('kbd');
for(const btn of allBtn){
    btn.addEventListener('click', function(){
        count = count + 1;
        if(count < 5){
            document.getElementById('seatCapibality').innerText = count;

            const seatsLeftElement = document.getElementById('seatsLeft');
            const dueSite =  40 - count;
             seatsLeftElement.innerText = dueSite;
        }else{
            alert();
        }
        
        
      

      
        event.target.style.backgroundColor = "#1DD100";
        event.target.style.color = "white";

        price = price + 550;
        
        

        
        const sitNumber = event.target.innerText;
        
         document.getElementById('sitName').innerText =sitNumber;
         

      setInnerText('totalPrices',price )
      setInnerText('grandPrices',price )
         
    })
}


function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}