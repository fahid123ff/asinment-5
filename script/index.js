
function handleClick() {
    const ticketSection = document.getElementById('showTiketSection');
    ticketSection.classList.remove('hidden');
}

let count = 0;

// all button
const allBtn = document.getElementsByClassName('kbd');
for(const btn of allBtn){
    btn.addEventListener('click', function(){
        count = count + 1;
        document.getElementById('seatCapibality').innerText = count;

        const seatsLeftElement = document.getElementById('seatsLeft');
        const dueSite =  40 - count;
         seatsLeftElement.innerText = dueSite;
         
    })
}