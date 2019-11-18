import Component from '../Component.js'; 
import Header from '../common/Header.js';
import FishDetail from './FishDetail.js';
import { getFish } from '../services/fish-api.js'; 

class FishDetailApp extends Component {
    async onRender(dom) {
        const header = new Header(); 
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main'); 
        const searchParams = new URLSearchParams(window.location.search); 
        const id = searchParams.get('id'); 

        if (!id) {
            window.location = 'fish-list.html'; 
            return; 
        }
        try {
            const fish = await getFish(id); 
            const fishDetail = new FishDetail({ fish }); 
            main.appendChild(fishDetail.renderDOM());
        }
        catch (err) {
            console.log(err); 
        }
        
    }

    renderHTML() {
        return /*html*/`
        <div>
        <main>
        </main>
        </div>
        `; 
    }
}

export default FishDetailApp;