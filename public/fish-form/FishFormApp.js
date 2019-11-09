import Component from '../Component.js';
import Header from '../common/Header.js';
import FishForm from './FishForm.js'; 
import { getTypes } from '../services/fish-api.js'; 

class FishFormApp extends Component {

    onRender(dom) {
        const header = new Header({ title: 'Add a Fish' });
        dom.prepend(header.renderDOM());
        const main = dom.querySelector('main');

        const types = await getTypes();
        const catForm = new FishForm({ types });
        main.appendChild(fishForm.renderDOM());
    }

    renderHTML() {
        return /*html*/`
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