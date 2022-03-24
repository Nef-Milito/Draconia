//Variables and Arrays.

answer = false;
let cart = []
const dragons = []
nameString = "\n";
let selection;
let choice;
let placeholder = []

class Dragon {
    constructor(name, breed, rarity, stock, price, image) {
        this.name = name;
        this.breed = breed;
        this.rarity = rarity;
        this.stock = parseInt(stock);
        this.price = parseFloat(price);
        this.image = image
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
}

//Add all the products to an Array.

dragons.push(new Dragon("ARID BADLANDS", "Bloodchaser", "Rare", "25", "500", "../assets/images/Bloodchaser/Arid Badlands/Arid_Badlands_Overview.png"));
dragons.push(new Dragon("FERROUS MOUNTAINS", "Bloodchaser", "Common", "31", "100", "../assets/images/Bloodchaser/Ferrous Mountains/Ferrous_Mountains_Overview.png"));
dragons.push(new Dragon("FJALNARRI MINES" || "FJALNÄRRI MINES", "Nightsnagger", "Epic", "5", "1000", "../assets/images/Nightsnagger/Fjalnarri Mines/Fjalnarri_Mines_Overview.png"));
dragons.push(new Dragon("FORGOTTEN BOG", "Nightsnagger", "Rare", "18", "500", "../assets/images/Nightsnagger/Forgotten Bog/Forgotten_Bog_Overview.png"));
dragons.push(new Dragon("FROZEN LAKE", "Ironwing", "Epic", "6", "1000", "../assets/images/Ironwing/Frozen Lake/Frozen_Lake_Overview.png"));
dragons.push(new Dragon("HAERVAN CAVERNS", "Ironwing", "Epic", "3", "1000", "../assets/images/Ironwing/Haervan Caverns/Haervan_Caverns_Overview.png"));
dragons.push(new Dragon("HELSTOR" || "HELSTÖR", "Bloodchaser", "Legendary", "0", "10000", "../assets/images/Bloodchaser/Helstor/Helstor_Overview.png"));
dragons.push(new Dragon("LAEGAN CHASMS", "Nightsnagger", "Epic", "0", "1000", "../assets/images/Nightsnagger/Laegan Chasms/Laegan_Chasms_Overview.png"));
dragons.push(new Dragon("OLMUND", "Ironwing", "Legendary", "2", "10000", "../assets/images/Ironwing/Olmund/Olmund_Overview.png"));
dragons.push(new Dragon("RAGING RIVER", "Bloodchaser", "Epic", "11", "1000", "../assets/images/Bloodchaser/Raging River/Raging_River_Overview.png"));
dragons.push(new Dragon("RAYLESS DEPTHS", "Ironwing", "Rare", "26", "500", "../assets/images/Ironwing/Rayless Depths/Rayless_Depths_Overview.png"));
dragons.push(new Dragon("SYGGIAN FRINGES", "Ironwing", "Epic", "7", "1000", "../assets/images/Ironwing/Syggian Fringes/Syggian_Fringes_Overview.png"));
dragons.push(new Dragon("TORRUNI DUNES", "Nightsnagger", "Epic", "5", "1000", "../assets/images/Nightsnagger/Torruni Dunes/Torruni_Dunes_Overview.png"));
dragons.push(new Dragon("VENFIR", "Nightsnagger", "Legendary", "2", "1000", "../assets/images/Nightsnagger/Venfir/Venfir_Lingering_Dread_Overview.png"));
dragons.push(new Dragon("WARELM", "Bloodchaser", "Legendary", "1", "1000", "../assets/images/Bloodchaser/Warelm/Warelm_Overview.png"));

function stock() {
    for (let i = 0; i < dragons.length; i++) {
        var dragonName = dragons[i].getName();
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

repeat();


//Discarded Array.

/* const dragons = [
    {
        title: "dragon0",
        name: "Arid Badlands",
        breed: "Bloodchaser",
        rarity: "Rare",
        stock: 25,
        price: 0
    },
    {
        title: "dragon1",
        name: "Ferrous Mountains",
        breed: "Bloodchaser",
        rarity: "Common",
        stock: 31,
        price: 0
    },
    {
        title: "dragon2",
        name: "Fjalnarri Mines" || "Fjalnärri Mines",
        breed: "Nightsnagger",
        rarity: "Epic",
        stock: 5,
        price: 0
    },
    {
        title: "dragon3",
        name: "Forgotten Bog",
        breed: "Nightsnagger",
        rarity: "Rare",
        stock: 18,
        price: 0
    },
    {
        title: "dragon4",
        name: "Frozen Lake",
        breed: "Ironwing",
        rarity: "Epic",
        stock: 6,
        price: 0
    },
    {
        title: "dragon5",
        name: "Haervan Caverns",
        breed: "Ironwing",
        rarity: "Epic",
        stock: 3,
        price: 0,
    },
    {
        title: "dragon6",
        name: "Helstor" || "Helstör",
        breed: "Bloodchaser",
        rarity: "Legendary",
        stock: 0,
        price: 1000
    },
    {
        title: "dragon7",
        name: "Laegan Chasms",
        breed: "Nightsnagger",
        rarity: "Epic",
        stock: 0,
        price: 0
    },
    {
        title: "dragon8",
        name: "Olmund",
        breed: "Ironwing",
        rarity: "Legendary",
        stock: 2,
        price: 1000
    },
    {
        title: "dragon9",
        name: "Raging River",
        breed: "Bloodchaser",
        rarity: "Epic",
        stock: 11,
        price: 0
    },
    {
        title: "dragon10",
        name: "Rayless Depths",
        breed: "Ironwing",
        rarity: "Rare",
        stock: 26,
        price: 0
    },
    {
        title: "dragon11",
        name: "Syggian Fringes",
        breed: "Ironwing",
        rarity: "Epic",
        stock: 7,
        price: 0
    },
    {
        title: "dragon12",
        name: "Torruni Dunes",
        breed: "Nightsnagger",
        rarity: "Epic",
        stock: 5,
        price: 0
    },
    {
        title: "dragon13",
        name: "Venfir",
        breed: "Nightsnagger",
        rarity: "Legendary",
        stock: 2,
        price: 1000
    },
    {
        title: "dragon14",
        name: "Warelm",
        breed: "Bloodchaser",
        rarity: "Legendary",
        stock: 1,
        price: 1000
    }
] */