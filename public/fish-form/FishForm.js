import Component from '../Component.js';
import { addFish } from '../services/fish-api.js';

class FishForm extends Component {

    onRender(form) {
        // event goodness for showing display of range value
        const weightRange = form.querySelector('#weight');
        const weightDisplay = form.querySelector('#weight-display');
        const syncWeight = () => weightDisplay.textContent = weightRange.value;
        weightRange.addEventListener('input', syncWeight);
        syncWeight();

        // handle form event
        form.addEventListener('submit', async event => {
            event.preventDefault();

            const formData = new FormData(form);

            const fish = {
                name: formData.get('name'),
                species: parseInt(formData.get('species-id')),
                url: formData.get('url'),
                zone: formData.get('zone'),
                typical_weight_oz: parseInt(formData.get('weight')),
                fresh_water: formData.get('is-fresh') === 'on',
                salt_water: formData.get('is-salt') === 'on'
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
        const species = this.props.species;
        const optionsList = species.map(species => {
            return `<option value="${species.id}">${species.name}</option>`;
        });

        const joinedOptionsList = optionsList.join('');

        console.log(joinedOptionsList);
        return /*html*/`
                <form class="fish-form">
                    <p>
                        <label for="name">Name</label>
                        <input id="name" name="name" required placeholder="Oregon Fish">
                </p>

                        <p>
                            <label for="species">Species</label>
                            <select id="species" name="species-id" required>
                                <option disabled selected>&lt;select a species&gt;</option>
                                ${joinedOptionsList}
                            </select>
                        </p>

                        <p>
                            <label for="url">Image Url</label>
                            <input id="url" name="url" required placeholder="https://media.giphy.com/media/Lzq20swFmfvMs/giphy.gif">
                </p>


                                <p>
                                    <label for="weight">Weight in Oz</label>
                                    <span class="weight">
                                        <input id="weight" name="weight" type="range" min="0" max="500" value="10">
                                            <span id="weight-display">20</span>
                    </span>
                </p>

                                    <fieldset for="is-salt">
                                        <legend>Is it a salt water fish?</legend>
                                        <label class="horizontally-centered">
                                            <input id="is-salt" name="is-salt" type="checkbox"> Yes
                    </label>
                </fieldset>
                <fieldset for="is-fresh">
                                        <legend>Is it a fresh water fish?</legend>
                                        <label class="horizontally-centered">
                                            <input id="is-fresh" name="is-fresh" type="checkbox"> Yes
                    </label>
                    <p>
                            <label for="zone">Habitat Zone</label>
                        <input id="zone" name="zone" required placeholder="Marine">
                </p>
                </fieldset>
                                        <p>
                                            <button>Add This Fish</button>
                                        </p>
            </form>
                                    `;
    }
}

export default FishForm;