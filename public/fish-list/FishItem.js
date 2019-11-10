import Component from '../Component.js';

class FishItem extends Component {
    renderHTML() {
        const fish = this.props.fish;
        const fresh_badge = (fish.freshwater === true) ? '../assets/fresh_badge.png' : '../assets/transparent.gif';
        const salt_badge = (fish.saltwater === true) ? '../assets/salt_badge.png' : '../assets/transparent.gif';
        return /*html*/ `
        <li class='fish-item'>
            <div class="info-container">
            <h2>${fish.name}</h2>
            <p class="fish-species">${fish.species}</p>
            </div>

            <div class="image-container">
            <img src="${fish.url}" alt="${fish.name} image">
            </div>

            <p class="typical_weight_oz">Typical Weight:${fish.typicalweightoz} oz.</p>
            <p class="fresh_water"><img src="${fresh_badge}"></p>
            <p class="salt_water"><img src="${salt_badge}"></p>
            <p class="zone">Zone: ${fish.zone}</p>
            </li>
        `;
    }
}

export default FishItem;
