import Component from '../Component.js';
import Header from '../common/Header.js';
import FishForm from './FishForm.js';
import { getSpecies } from '../services/fish-api.js';

class FishFormApp extends Component {

    async onRender(dom) {
        const header = new Header({ title: 'Add a Fish' });
        dom.prepend(header.renderDOM());
        const main = dom.querySelector('main');

        const species = await getSpecies();
        const fishForm = new FishForm({ species });
        main.appendChild(fishForm.renderDOM());
    }

    renderHTML() {
        return /*html*/ `
            <div>
                <!-- header goes here -->
                <main>
                    <p>Fish Form Page</p>
                </main>
            </div>
        `;
    }
}

export default FishFormApp;
