import Component from '../Component.js';

class FishItem extends Component {
    renderHTML() {
        const fish = this.props.fish;
        const fresh_badge = (fish.freshwater === true) ? '../assets/fresh_badge.png' : '../assets/transparent.gif';
        const fresh_text = (fish.freshwater === true) ? 'Fresh Water' : '';
        const salt_text = (fish.saltwater === true) ? 'Salt Water' : '';
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
            <span class="freshwater saltwater">${fresh_text} ${salt_text}</span>
            <p class="typical_weight_oz">Typical Weight:${fish.typicalweightoz} oz.</p>

            <p class="zone">Zone: ${fish.zone}</p>
            </li>
        `;
    }
}

export default FishItem;
