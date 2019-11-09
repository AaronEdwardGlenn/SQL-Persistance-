import Component from '../Component.js';
import { addFish } from '../services/fish-api.js';

class FishForm extends Component {

    onRender(form) {
        // event goodness for showing display of range value
        const weightRange = form.querySelector('#weight');
        const weightDisplay = form.querySelector('#weight');
        const syncLives = () => weightDisplay.textContent = weightRange.value;
        weightRange.addEventListener('input', syncLives);
        syncLives();

        // handle form event
        form.addEventListener('submit', async event => {
            event.preventDefault();

            const formData = new FormData(form);

            const fish = {
                name: formData.get('name'),
                typeId: parseInt(formData.get('type-id')),
                url: formData.get('url'),
                species: parseInt(formData.get('species')),
                typicalWeightOz: parseInt(formData.get('typical_weight_oz')),
                zone: parseInt(formData.get('zone')),
                saltWater: formData.get('salt-water') === 'on', 
                freshWater: formData.get('fresh-water') === 'on'
            };

            try {
                const saved = await addFish(fish);
                // for now log out our saved cat,
                // eventually use id to redirect to detail page
                console.log(saved);

                window.location = `fish-list.html`;
            }
            catch (err) {
                console.log('fish not saved :(', err);
            }
        });

    }

    renderHTML() {
        const types = this.props.types;
        const optionsList = types.map(type => {
            return `<option value="${type.id}">${type.name}</option>`;
        });

        const joinedOptionsList = optionsList.join('');

        console.log(joinedOptionsList);
        return /*html*/`
                < form class="fish-form" >
                    <p>
                        <label for="name">Name</label>
                        <input id="name" name="name" required placeholder="Oregon Fish">
                </p>

                        <p>
                            <label for="type">Type</label>
                            <select id="type" name="type-id" required>
                                <option disabled selected>&lt;select a type&gt;</option>
                                ${joinedOptionsList}
                            </select>
                        </p>

                        <p>
                            <label for="url">Image Url</label>
                            <input id="url" name="url" required placeholder="http://famous-cat.png">
                </p>

                            <p>
                                <label for="species">Fish Species</label>
                                <input id="species"
                                    name="species"
                                    required
                                    pattern="[0-9]{4}"
                                    placeholder="trout"
                                    title="species">
                </p>
                <p>
                                <label for="zone">Zone in Oregon</label>
                                <input id="zone"
                                    name="zone"
                                    required
                                    pattern="[0-9]{4}"
                                    placeholder="marine"
                                    title="zone">
                </p>

                                <p>
                                    <label for="weight">Weight In Ounces</label>
                                    <span class="horizontally-centered">
                                        <input id="weight" name="weight" type="range" min="0" max="500" value="10">
                                            <span id="weight">10</span>
                    </span>
                </p>

                                    <fieldset for="fresh-water">
                                        <legend>Does the fish live in fresh water?</legend>
                                        <label class="horizontally-centered">
                                            <input id="fresh-water" name="fresh-water" type="checkbox"> Yes
                    </label>
                </fieldset>
                                    <fieldset for="salt-water">
                                        <legend>Does the fish live in salt water?</legend>
                                        <label class="horizontally-centered">
                                            <input id="salt-water" name="salt-water" type="checkbox"> Yes
                    </label>
                </fieldset>

                                        <p>
                                            <button>Add This a Fish</button>
                                        </p>
            </form>
                                    `;
    }
}

export default FishForm;