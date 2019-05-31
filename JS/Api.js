import { baseURL } from "./constants/constants.js";

class Pokedex {
    constructor(card_type) {

        this.card_type = card_type;
    }
    generateURL(name) {
        let typeID = "";
        if (this.card_type === "item") {
            typeID = "subtype";
        } else {
            typeID = "supertype";
        }
        return `${baseURL}?${typeID}=${this.card_type}&name=${name}`;

    }
    getCards(name) {
        //let completeURL = this.generateCompleteURL(name);
        return fetch(this.generateURL(name)).then(response => response.json());

    }
}

export { Pokedex };