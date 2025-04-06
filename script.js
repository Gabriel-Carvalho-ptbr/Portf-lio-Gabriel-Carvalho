
const menuItems = document.querySelectorAll('#menu a');


menuItems.forEach(item => {
    
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'rgba(0, 255, 135, 0.2)'; 
    });

   
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = ''; 
    });

   
    item.addEventListener('click', (event) => {
        event.preventDefault();

 
        const targetSection = document.querySelector(item.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
