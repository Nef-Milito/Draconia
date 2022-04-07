//Variables and Arrays.

let dragons = []

class Dragon {
    constructor(id, name, breed, rarity, price, overview, egg) {
        this.id = id;
        this.name = name;
        this.breed = breed;
        this.rarity = rarity;
        this.price = price;
        this.overview = overview;
        this.egg = egg;
        this.quantity = 0;
        this.totalPrice = 0;
    }

    getID() {
        return this.id;
    }

    addUnit() {
        this.quantity++;
        this.totalPrice = this.price * this.quantity;
    }

    removeUnit() {
        this.quantity--;
        this.totalPrice = this.price * this.quantity;
    }
}

//Add all the products to an Array.

dragons.push(new Dragon(0, "ARID BADLANDS", "Bloodchaser", "Rare", 500, "../assets/images/Bloodchaser/Arid Badlands/Arid_Badlands_Overview.png", "../assets/images/Bloodchaser/Arid Badlands/Arid_Badlands_egg.png"));
dragons.push(new Dragon(1, "FERROUS MOUNTAINS", "Bloodchaser", "Common", 100, "../assets/images/Bloodchaser/Ferrous Mountains/Ferrous_Mountains_Overview.png", "../assets/images/not_found.png"));
dragons.push(new Dragon(2, "FJALNÄRRI MINES", "Nightsnagger", "Epic", 1000, "../assets/images/Nightsnagger/Fjalnarri Mines/Fjalnarri_Mines_Overview.png", "../assets/images/not_found.png"));
dragons.push(new Dragon(3, "FORGOTTEN BOG", "Nightsnagger", "Rare", 500, "../assets/images/Nightsnagger/Forgotten Bog/Forgotten_Bog_Overview.png", "../assets/images/Nightsnagger/Forgotten Bog/Forgotten_Bog_Egg.png"));
dragons.push(new Dragon(4, "FROZEN LAKE", "Ironwing", "Epic", 1000, "../assets/images/Ironwing/Frozen Lake/Frozen_Lake_Overview.png", "../assets/images/not_found.png"));
dragons.push(new Dragon(5, "HAERVAN CAVERNS", "Ironwing", "Epic", 1000, "../assets/images/Ironwing/Haervan Caverns/Haervan_Caverns_Overview.png", "../assets/images/Ironwing/Haervan Caverns/Haervan_Caverns_Egg.png"));
dragons.push(new Dragon(6, "HELSTÖR", "Bloodchaser", "Legendary", 10000, "../assets/images/Bloodchaser/Helstor/Helstor_Overview.png", "../assets/images/Bloodchaser/Helstor/Helstor_Egg.png"));
dragons.push(new Dragon(7, "LAEGAN CHASMS", "Nightsnagger", "Epic", 1000, "../assets/images/Nightsnagger/Laegan Chasms/Laegan_Chasms_Overview.png", "../assets/images/Nightsnagger/Laegan Chasms/Laegan_Chasms_Egg.png"));
dragons.push(new Dragon(8, "OLMUND", "Ironwing", "Legendary", 10000, "../assets/images/Ironwing/Olmund/Olmund_Overview.png", "../assets/images/Ironwing/Olmund/Olmund_Egg.png"));
dragons.push(new Dragon(9, "RAGING RIVER", "Bloodchaser", "Epic", 1000, "../assets/images/Bloodchaser/Raging River/Raging_River_Overview.png", "../assets/images/not_found.png"));
dragons.push(new Dragon(10, "RAYLESS DEPTHS", "Ironwing", "Rare", 500, "../assets/images/Ironwing/Rayless Depths/Rayless_Depths_Overview.png", "../assets/images/Ironwing/Rayless Depths/Rayless_Depths_Egg.png"));
dragons.push(new Dragon(11, "SYGGIAN FRINGES", "Ironwing", "Epic", 1000, "../assets/images/Ironwing/Syggian Fringes/Syggian_Fringes_Overview.png", "../assets/images/not_found.png"));
dragons.push(new Dragon(12, "TORRUNI DUNES", "Nightsnagger", "Epic", 1000, "../assets/images/Nightsnagger/Torruni Dunes/Torruni_Dunes_Overview.png", "../assets/images/not_found.png"));
dragons.push(new Dragon(13, "VENFIR", "Nightsnagger", "Legendary", 1000, "../assets/images/Nightsnagger/Venfir/Venfir_Lingering_Dread_Overview.png", "../assets/images/not_found.png"));
dragons.push(new Dragon(14, "WARELM", "Bloodchaser", "Legendary", 1000, "../assets/images/Bloodchaser/Warelm/Warelm_Overview.png", "../assets/images/not_found.png"));

//List the products.

let shopContainer = document.getElementById(eggShop);


for (const dragon of dragons) {
    let card = document.createElement('div');
    eggShop.appendChild(card);
    card.className = 'card';
    card.innerHTML =
        `
    <div class="card-inner">
        <div class="card-front">
            <h3 class="title">${dragon.name}</h3>
            <img src="${dragon.overview}" class="img-fluid" alt="Overview image">
            <p class="breed">${dragon.breed}</p>
            <p id="rarity" class="rarity${dragon.rarity}">${dragon.rarity}</p>
            <div class="price"><p>USD$${dragon.price}</p></div>
        </div>
        <div class="card-back">
            <img src="${dragon.egg}" class="img-fluid" alt="Egg">
            <div id="select${dragon.id}" class="select"><p>Add to Cart</p><div>
        </div>
    </div>
    `;

    let button = document.getElementById(`select${dragon.id}`);

    button.onclick = () => addDragon(dragon.id);
}

//Check data in local storage.

function checkLocalStorage() {
    let contentInStorage = JSON.parse(localStorage.getItem('storedDragons'));

    if (contentInStorage) {
        for (const storedDragon of contentInStorage) {
            let dragonToStore = dragons[storedDragon.id];
            dragonToStore.quantity = storedDragon.quantity;
            dragonToStore.totalPrice = storedDragon.totalPrice;
        }
        createTable(dragons);
    }
}

//Add a Dragon to the cart.

function addDragon(dragonID) {
    let dragonChosen = dragons[dragonID];
    dragonChosen.addUnit();
    setTimeout(() => {
        Toastify({
            text: "Dragon added!",
            className: "toast",
            duration: 5000,
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #bce4a4, #23b685)",
            }
        }).showToast();
    }, 500);
    updateSelection();
}

//Remove a Dragon from the cart.

function removeDragon(dragonID) {
    let dragonRemoved = dragons[dragonID];
    dragonRemoved.removeUnit();
    setTimeout(() => {
        Toastify({
            text: "Dragon removed!",
            className: "toast",
            duration: 5000,
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #fcd4a9, #ff787c)",
            }
        }).showToast();
    }, 500);
    updateSelection();
}

//Update the selection table.

function updateSelection() {
    localStorage.setItem('storedDragons', JSON.stringify(dragons));
    createTable(dragons);
}

//Print the table on the HTML.

function createTable(array) {
    let tableContainer = document.getElementById('cart');
    tableContainer.innerHTML = "";

    let totalPrice = getTotalPrice(dragons);

    let table = document.createElement('div');

    table.innerHTML = `
    <div id="cartTable" class="table">
        <ul id="tableBody">
            <li class="table-header-footer">
                <div class="col col-1">NAME</div>
                <div class="col col-2">QUANTITY</div>
                <div class="col col-3">PRICE</div>
                <div class="col col-4"></div>
            </li>
        </ul>
        <ul>
            <li class="table-header-footer">
                <div class="col col-1">Total</div>
                <div class="col col-2"></div>
                <div class="col col-3"></div>
                <div class="col col-4">$${totalPrice}</div>
            </li>
        </ul>
        <ul>
            <li><button id="clearSelection">Clear Cart</button></li>
        </ul>
    </div>
    `
    tableContainer.appendChild(table);

    let tableBody = document.getElementById('tableBody');

    for (let dragon of array) {
        if (dragon.quantity > 0) {
            let data = document.createElement('li');
            data.className = 'tableRow';
            data.innerHTML = `
            <div class="col col-1">${dragon.name}</div>
            <div class="col col-2">${dragon.quantity}</div>
            <div class="col col-3">${dragon.totalPrice}</div>
            <div class="col col-4"><button id="remove${dragon.id}" class="removeBtn" type="button">Remove</button></div>
            `

            tableBody.appendChild(data);

            let removeBtn = document.getElementById(`remove${dragon.id}`);
            removeBtn.addEventListener('click', () => removeDragon(dragon.id));

            //Clear the cart.

            let clearCartBtn = document.getElementById('clearSelection');
            clearCartBtn.onclick = () => {
                for (const dragon of dragons) {
                    dragon.quantity = 0;
                    dragon.totalPrice = 0;
                }

                setTimeout(() => {
                    Toastify({
                        text: "All Dragons removed!",
                        className: "toast",
                        duration: 5000,
                        stopOnFocus: true,
                        style: {
                            background: "linear-gradient(to right, #fcd4a9, #ff787c)",
                        }
                    }).showToast();
                }, 500);

                updateSelection();
            }
        }
    }
}

//Get the total price of the cart.

function getTotalPrice() {
    let totalPrice = 0;

    for (const dragon of dragons) {
        totalPrice += dragon.totalPrice;
    }

    return totalPrice;
}

checkLocalStorage();

//Deprecated code.

/* function stock() {
    for (let i = 0; i < dragons.length; i++) {
        var dragonName = dragons[i].getName();
        nameString += dragonName + "\n";
    }

    for (let i = 0; i < dragons.length; i++) {
        var dragonName = dragons[i].getBreed();
        nameString += dragonName + "\n";
    }

    for (let i = 0; i < dragons.length; i++) {
        var dragonName = dragons[i].getRarity();
        nameString += dragonName + "\n";
    }

    for (let i = 0; i < dragons.length; i++) {
        var dragonName = dragons[i].getStock();
        nameString += dragonName + "\n";
    }

    for (let i = 0; i < dragons.length; i++) {
        var dragonName = dragons[i].getPrice();
        nameString += dragonName + "\n";
    }

    for (let i = 0; i < dragons.length; i++) {
        var dragonName = dragons[i].getOverview();
        nameString += dragonName + "\n";
    }
} */

/* function chooseDragon() {
    stock();
    selection = prompt("Choose a Dragon to adopt. Dragons available:\n " + nameString).toUpperCase();
}

function repeat() {
    chooseDragon();
    placeholder = dragons.filter(dragon => dragon.getName() == selection);
    if (placeholder.length > 0) {
        while (answer == false) {
            cart.push(placeholder[0]);
            choice = prompt("Do you wish to input another Dragon?").toLowerCase();

            switch (choice) {
                case "yes":
                    repeat()
                case "no":
                    throw new Error("End of Script.");
                default:
                    alert("Input a valid answer.");
                    break;
            }
        }
    } else {
        alert("Please input a valid Dragon.");
        repeat();
    }
} */

/* repeat(); */