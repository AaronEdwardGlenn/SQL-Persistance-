import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/ `<header><nav><ul><li><a href="../">Home</a></li><a href="../fish-list/">Fish List</a><li><a href="../fish-form/">Fish Form</a></li></nav></header>`;
    }
}

export default Header;
