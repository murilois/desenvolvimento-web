const buttonTrigger = document.querySelectorAll('.trigger');

buttonTrigger.forEach((trigger)=>{
    trigger.addEventListener('click', (e)=>{
        const content = trigger.nextElementSibling;
        const isOpen = content.classList.contains('open');

        if(isOpen){
            content.classList.remove('open');
        }else{
            content.classList.add('open');
        }
    })
})