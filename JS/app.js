//Generating DOM
// createNode == creatElement
//append = appendChild(child, parent)

import { Pokedex } from "./Api.js";

const createTag = (nameOfTag, tagAttributes, content, parentTag) => {
    var tag = document.createElement(nameOfTag); //No Var

    //setting attributes for the tag.

    if (tagAttributes != null)
        for (let attribute in tagAttributes) {
            tag.setAttribute(attribute, tagAttributes[attribute]);
        }

    //setting content of the tag.

    if (content != null) {
        var node = document.createTextNode(content);
        tag.appendChild(node);
    }

    //appending newly created tag to its parent.

    var parent = document.getElementById(parentTag);
    parent.appendChild(tag);
}



const search = async(card_type, name_id) => {
    let pokedex = new Pokedex(card_type);
    let name = document.getElementById(`${name_id}`).value;
    return await pokedex.getCards(name);
}

const generateRequiredDetails = async(card_type, name_id) => {
    let result = await search(card_type, name_id);
    //console.log(result);
    let requiredDetails = [];
    result.cards.forEach(element => {
        let name = element.name;
        let card_id = element.id;
        let imageUrl = element.imageUrl;
        let requiredCardDetails = { name, card_id, imageUrl };
        requiredDetails.push(requiredCardDetails);
    });
    return requiredDetails;
}




export { generateRequiredDetails, createTag };