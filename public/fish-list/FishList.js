import Component from '../Component.js';
import FishItem from './FishItem.js';

class FishList extends Component {

    onRender(dom) {
        const fish = this.props.fish;
        fish.forEach(fish => {
            const props = { fish: fish };
            const fishItem = new FishItem(props);
            const fishItemDOM = fishItem.renderDOM();
            dom.appendChild(fishItemDOM);

        });
    }


    renderHTML() {
        return /*html*/ `
        <ul class="fish"></ul>
        `;
    }
}

export default FishList;
