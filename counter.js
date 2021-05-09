let count = 0;

const value = document.querySelector('.value');
const buttons = document.querySelectorAll('.btn');


buttons.forEach(button => {
    button.addEventListener('click', event => {
        if(event.target.classList.contains('decrease')) {
            count --;
            
        } else if(event.target.classList.contains('reset')) {
            count = 0;
            
        } else if(event.target.classList.contains('increase')) {
            count++;
            
        }

        if(count < 0) {
            value.style.color = 'red';
        } 
        
        if(count > 0) {
            value.style.color = 'green';
        }
        if(count === 0) {
            value.style.color = 'black';
        }


        value.innerText = count;
    })
})

