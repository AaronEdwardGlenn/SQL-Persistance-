import Component from '../Component.js';
import Header from '../common/Header.js';

class FishFormApp extends Component {

    onRender(dom) {
        const header = new Header({ title: 'Add a Fish' });
        dom.prepend(header.renderDOM());
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