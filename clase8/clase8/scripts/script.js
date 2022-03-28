const dragons = [
    {
        title: "dragon0",
        name: "Arid Badlands",
        breed: "Bloodchaser",
        rarity: "Rare",
        stock: 25,
        price: 500,
        overview: "./images/Bloodchaser/Arid Badlands/Arid_Badlands_Overview.png"
    },
    {
        title: "dragon1",
        name: "Ferrous Mountains",
        breed: "Bloodchaser",
        rarity: "Common",
        stock: 31,
        price: 100,
        overview: "./images/Bloodchaser/Ferrous Mountains/Ferrous_Mountains_Overview.png"
    },
    {
        title: "dragon2",
        name: "Fjalnarri Mines" || "Fjalnärri Mines",
        breed: "Nightsnagger",
        rarity: "Epic",
        stock: 5,
        price: 1000,
        overview: "./images/Nightsnagger/Fjalnarri Mines/Fjalnarri_Mines_Overview.png"
    },
    {
        title: "dragon3",
        name: "Forgotten Bog",
        breed: "Nightsnagger",
        rarity: "Rare",
        stock: 18,
        price: 500,
        overview: "./images/Nightsnagger/Forgotten Bog/Forgotten_Bog_Overview.png"
    },
    {
        title: "dragon4",
        name: "Frozen Lake",
        breed: "Ironwing",
        rarity: "Epic",
        stock: 6,
        price: 1000,
        overview: "./images/Ironwing/Frozen Lake/Frozen_Lake_Overview.png" 
    },
    {
        title: "dragon5",
        name: "Haervan Caverns",
        breed: "Ironwing",
        rarity: "Epic",
        stock: 3,
        price: 1000,
        overview: "./images/Ironwing/Haervan Caverns/Haervan_Caverns_Overview.png"
    },
    {
        title: "dragon6",
        name: "Helstor" || "Helstör",
        breed: "Bloodchaser",
        rarity: "Legendary",
        stock: 0,
        price: 10000,
        overview: "./images/Bloodchaser/Helstor/Helstor_Overview.png"
    },
    {
        title: "dragon7",
        name: "Laegan Chasms",
        breed: "Nightsnagger",
        rarity: "Epic",
        stock: 0,
        price: 1000,
        overview: "./images/Nightsnagger/Laegan Chasms/Laegan_Chasms_Overview.png"
    },
    {
        title: "dragon8",
        name: "Olmund",
        breed: "Ironwing",
        rarity: "Legendary",
        stock: 2,
        price: 10000,
        overview: "./images/Ironwing/Olmund/Olmund_Overview.png"
    },
    {
        title: "dragon9",
        name: "Raging River",
        breed: "Bloodchaser",
        rarity: "Epic",
        stock: 11,
        price: 1000,
        overview: "./images/Bloodchaser/Raging River/Raging_River_Overview.png"
    },
    {
        title: "dragon10",
        name: "Rayless Depths",
        breed: "Ironwing",
        rarity: "Rare",
        stock: 26,
        price: 500,
        overview: "./images/Ironwing/Rayless Depths/Rayless_Depths_Overview.png"
    },
    {
        title: "dragon11",
        name: "Syggian Fringes",
        breed: "Ironwing",
        rarity: "Epic",
        stock: 7,
        price: 1000,
        overview: "./images/Ironwing/Syggian Fringes/Syggian_Fringes_Overview.png"
    },
    {
        title: "dragon12",
        name: "Torruni Dunes",
        breed: "Nightsnagger",
        rarity: "Epic",
        stock: 5,
        price: 1000,
        overview: "./images/Nightsnagger/Torruni Dunes/Torruni_Dunes_Overview.png"
    },
    {
        title: "dragon13",
        name: "Venfir",
        breed: "Nightsnagger",
        rarity: "Legendary",
        stock: 2,
        price: 10000,
        overview: "./images/Nightsnagger/Venfir/Venfir_Lingering_Dread_Overview.png"
    },
    {
        title: "dragon14",
        name: "Warelm",
        breed: "Bloodchaser",
        rarity: "Legendary",
        stock: 1,
        price: 10000,
        overview: "./images/Bloodchaser/Warelm/Warelm_Overview.png"
    }
]

//Greet the user.

let info = prompt("What's your name?");
let welcome = document.getElementById('welcomeMessage');

let greeting = document.createElement('div');
welcomeMessage.appendChild(greeting);
greeting.className = "greet";
greeting.innerHTML = `Welcome back, ${info}!`

//List the products.

let shopFather = document.getElementById(shop);

for (const dragon of dragons){
    let card = document.createElement('div');
    shop.appendChild(card);
    card.className = 'card';
    card.innerHTML = 
    `<h2 class="title">${dragon.name}<h2>
    <img src="${dragon.overview}" class="image" alt="Overview image">
    <p>${dragon.breed}<p>
    <p class="rarity">${dragon.rarity}<p>
    <div class="price"><p>${dragon.price}<p><div>`
}

/* let dragon = {
    id: 0,
    title: "dragon14",
    name: "Warelm",
    breed: "Bloodchaser",
    rarity: "Legendary",
    stock: 1,
    price: 1000,
    overview: './images/Warelm_Overview.png'
} */

/* let card = document.createElement('div');
document.body.appendChild(card);
card.className = 'card';
card.innerHTML = `<h2 class="title">${dragon.name}<h2>
<img src="${dragon.overview}" class="image" alt="warelm overview">
<p>${dragon.breed}<p>
<p class="rarity">${dragon.rarity}<p>
<div class="price"><p>${dragon.price}<p><div>` */