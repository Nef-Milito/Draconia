//Variables and Arrays.

answer = false;
let cart = []
const dragons = []
nameString = "\n";
let selection;
let choice;
let placeholder = []

class Dragon {
    constructor(name, breed, rarity, stock, price, overview, egg) {
        this.name = name;
        this.breed = breed;
        this.rarity = rarity;
        this.stock = parseInt(stock);
        this.price = parseFloat(price);
        this.overview = overview,
        this.egg = egg
    }

    getName() {
        return this.name;
    }

    getBreed() {
        return this.breed;
    }

    getRarity() {
        return this.rarity;
    }

    getStock() {
        return this.stock;
    }

    getPrice() {
        return this.price;
    }

    getOverview() {
        return this.overview;
    }

    getEgg() {
        return this.egg;
    }
}

//Add all the products to an Array.

dragons.push(new Dragon("ARID BADLANDS", "Bloodchaser", "Rare", "25", "500", "../assets/images/Bloodchaser/Arid Badlands/Arid_Badlands_Overview.png", "../assets/images/Bloodchaser/Arid Badlands/Arid_Badlands_egg.png"));
dragons.push(new Dragon("FERROUS MOUNTAINS", "Bloodchaser", "Common", "31", "100", "../assets/images/Bloodchaser/Ferrous Mountains/Ferrous_Mountains_Overview.png", "../assets/images/Bloodchaser/Ferrous Mountains/not_found.png"));
dragons.push(new Dragon("FJALNARRI MINES" || "FJALNÄRRI MINES", "Nightsnagger", "Epic", "5", "1000", "../assets/images/Nightsnagger/Fjalnarri Mines/Fjalnarri_Mines_Overview.png", "../assets/images/Nightsnagger/Fjalnarri Mines/not_found.png"));
dragons.push(new Dragon("FORGOTTEN BOG", "Nightsnagger", "Rare", "18", "500", "../assets/images/Nightsnagger/Forgotten Bog/Forgotten_Bog_Overview.png", "../assets/images/Nightsnagger/Forgotten Bog/Forgotten_Bog_Egg.png"));
dragons.push(new Dragon("FROZEN LAKE", "Ironwing", "Epic", "6", "1000", "../assets/images/Ironwing/Frozen Lake/Frozen_Lake_Overview.png", "../assets/images/Ironwing/Frozen Lake/not_found.png"));
dragons.push(new Dragon("HAERVAN CAVERNS", "Ironwing", "Epic", "3", "1000", "../assets/images/Ironwing/Haervan Caverns/Haervan_Caverns_Overview.png", "../assets/images/Ironwing/Haervan Caverns/Haervan_Caverns_Egg.png"));
dragons.push(new Dragon("HELSTOR" || "HELSTÖR", "Bloodchaser", "Legendary", "0", "10000", "../assets/images/Bloodchaser/Helstor/Helstor_Overview.png", "../assets/images/Bloodchaser/Helstor/Helstor_Egg.png"));
dragons.push(new Dragon("LAEGAN CHASMS", "Nightsnagger", "Epic", "0", "1000", "../assets/images/Nightsnagger/Laegan Chasms/Laegan_Chasms_Overview.png", "../assets/images/Nightsnagger/Laegan Chasms/Laegan_Chasms_Egg.png"));
dragons.push(new Dragon("OLMUND", "Ironwing", "Legendary", "2", "10000", "../assets/images/Ironwing/Olmund/Olmund_Overview.png", "../assets/images/Ironwing/Olmund/Olmund_Egg.png"));
dragons.push(new Dragon("RAGING RIVER", "Bloodchaser", "Epic", "11", "1000", "../assets/images/Bloodchaser/Raging River/Raging_River_Overview.png", "../assets/images/Bloodchaser/Raging River/not_found.png"));
dragons.push(new Dragon("RAYLESS DEPTHS", "Ironwing", "Rare", "26", "500", "../assets/images/Ironwing/Rayless Depths/Rayless_Depths_Overview.png", "../assets/images/Ironwing/Rayless Depths/Rayless_Depths_Egg.png"));
dragons.push(new Dragon("SYGGIAN FRINGES", "Ironwing", "Epic", "7", "1000", "../assets/images/Ironwing/Syggian Fringes/Syggian_Fringes_Overview.png", "../assets/images/Ironwing/Syggian Fringes/not_found.png"));
dragons.push(new Dragon("TORRUNI DUNES", "Nightsnagger", "Epic", "5", "1000", "../assets/images/Nightsnagger/Torruni Dunes/Torruni_Dunes_Overview.png", "../assets/images/Nightsnagger/Torruni Dunes/not_found.png"));
dragons.push(new Dragon("VENFIR", "Nightsnagger", "Legendary", "2", "1000", "../assets/images/Nightsnagger/Venfir/Venfir_Lingering_Dread_Overview.png", "../assets/images/Nightsnagger/Venfir/not_found.png"));
dragons.push(new Dragon("WARELM", "Bloodchaser", "Legendary", "1", "1000", "../assets/images/Bloodchaser/Warelm/Warelm_Overview.png", "../assets/images/Bloodchaser/Warelm/not_found.png"));

function stock() {
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
}

function chooseDragon() {
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
}

/* repeat(); */

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
            <div class="select"><p>Add to Cart</p><div>
        </div>
    </div>
    `
}