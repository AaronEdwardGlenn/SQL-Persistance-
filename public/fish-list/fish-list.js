import Component from '../Component.js';
import FishItem from './FishItem.js';

class FishList extends Component {

const app = new FishListApp();
document.body.prepend(app.renderDOM());
