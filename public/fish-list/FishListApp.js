import Component from '../Component.js';
import Header from '../common/Header.js';
import FishList from './FishList.js';
import { getFishes } from '../services/fish-api.js';


class FishListApp extends Component {
    onRender(dom) {
        const header = new Header({ title: 'Oregon Fishes' });
        dom.prepend(header.renderDOM());

        const list = new FishList({ fish: [] });
        const main = dom.querySelector('main');
        main.appendChild(list.renderDOM());

        getFishes().then(fish => {
            list.update({ fish });
        });
    }


    renderHTML() {
        return /*html*/ `
    <div>
    <main></main>
    `;
    }
}

export default FishListApp;
