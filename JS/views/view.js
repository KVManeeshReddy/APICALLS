import { generateRequiredDetails, createTag } from "../app.js";

const getHeader = () => {
    document.querySelector('#header').innerHTML = `
    <nav class="navbar navbar-expand-sm" style="background-color: red; color: seashell;">

    <a class="navbar-brand" href="#">
        <img src="images/logo.png" alt="POKEDEX" style="width:50px;">
        <strong class="container" style="font-family: cursive ; color: seashell; letter-spacing: .2rem; padding: 0 0 0 3rem">POKEDEX</strong>
    </a>

    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link active" data-toggle="pill" href="#pokemon">POKEMON</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#items">ITEMS</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#trainers">TRAINERS</a>
        </li>
    </ul>

</nav>`;
}


const getMain = () => {
    document.querySelector('#main').innerHTML = `
    <div class="tab-content">
        <div class="tab-pane container active" id="pokemon">
            <div id="chill" class="input-group mt-5 mb-5">
                <input type="text" placeholder="Pokemon" id="pokemon_name">
                <button type="button" class="input-group-append btn btn-info search-button" id="pokemon_button">SEARCH</button>
            </div>
        </div>
        <div class="tab-pane container fade" id="items">
            <div id="chill" class="input-group mt-5 mb-5">
                <input type="text" placeholder="Items" id="item_name">
                <button type="button" class="input-group-append btn btn-info search-button" id="item_button">SEARCH</button>
            </div>
        </div>
        <div class="tab-pane container fade" id="trainers">
            <div id="chill" class="input-group mt-5 mb-5">
                <input type="text" placeholder="Trainers" id="trainer_name">
                <button type="button" class="input-group-append btn btn-info search-button" id="trainer_button">SEARCH</button>
            </div>
        </div>
    </div>
`;
}

getHeader()
getMain()


const displayCards = () => {
    let a = document.getElementsByClassName("active");
    //console.log(a[1].id);
    let card_type = "";
    let name_id = "";
    if (a[1].id == "pokemon") {
        card_type = "pokemon";
        name_id = "pokemon_name";
    } else if (a[1].id == "items") {
        card_type = "item";
        name_id = "item_name";
    } else {
        card_type = "trainer";
        name_id = "trainer_name";
    }
    //console.log(card_type);
    //console.log(name_id);
    let cardDeckID = "cardsSection"
    document.getElementById(cardDeckID).innerHTML = "";
    let requiredDetails = generateRequiredDetails(card_type, name_id).then(requiredDetails => {
        for (let index in requiredDetails) {
            createTag(`div`, { "class": `card`, "id": `${index}` }, null, `cardsSection`);
            createTag(`img`, { "class": `card-img`, "src": `${requiredDetails[index].imageUrl}`, "alt": `${requiredDetails[index].name}` }, null, `${index}`);
            createTag(`div`, { "class": `card-body`, "id": `body${index}` }, null, `${index}`);
            createTag(`h4`, { "id": `card-name` }, `${requiredDetails[index].name}`, `body${index}`);
        }
    });
}


let d = document.querySelectorAll(".search-button");
//console.log(d);
for (let index in d) {
    if (index < d.length) {
        console.log(`${d[index].id}`);
        document.getElementById(`${d[index].id}`).addEventListener('click', displayCards);
    }
}
//data.addEventListener('click', displayCards);