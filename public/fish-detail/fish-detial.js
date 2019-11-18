import Component from '../Component.js'; 

class FishDetail extends Component {
    renderHTML(){
        const fish = this.props.fish; const json = JSON.stringify(fish, true, 4); 
        return /*html*/`
        <pre>${json}</pre>
        `; 
    }
} 

export default FishDetail; 