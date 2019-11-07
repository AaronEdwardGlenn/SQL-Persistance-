import Component from '../Component.js'; 

class FishItem extends Component {
    renderHTML() {
        const fish = this.props.fish; 

        return /*html*/`
        <li class='fish-item'>
            <div class ="info-container">
            <h2>${fish.name}</h2>
            <p class="fish-species">${fish.species}</p>
            </div>

            <div class="image-container"> 
            <img src="${fish.url}" alt="${fish.name} image">
            </div>

            <p class="typical_weight_oz">${fish.typical_weight_oz}</p>
            <p class="fresh_water">${fish.fresh_water}</p>
            <p class="salt_water">${fish.salt_water}</p>
            <p class="zone">${fish.zone}</p>
            </li>
        `;


    }
}

export default FishItem; 