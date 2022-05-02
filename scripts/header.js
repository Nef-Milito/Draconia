let dropdownTrigger = document.getElementById('dropdown-trigger');
let dropdown = document.getElementById('dropdown');
pos = false;

//Expand and contract the cart.

dropdownTrigger.onclick = () => {
    if (pos == false) {
        dropdownTrigger.classList.add('dropdown-trigger-up');

        dropdown.classList.add('dropdown-shown');
        dropdown.classList.remove('dropdown-hidden');
        
        pos = true;
    } else {
        dropdownTrigger.classList.remove('dropdown-trigger-up');

        dropdown.classList.remove('dropdown-shown');
        dropdown.classList.add('dropdown-hidden');
        
        pos = false;
    }
}