import Component from '../Component.js';
<<<<<<< HEAD
import { addCat } from '../services/cat-api.js';

class CatForm extends Component {

    onRender(form) {
        // event goodness for showing display of range value
        const livesRange = form.querySelector('#lives');
        const livesDisplay = form.querySelector('#lives-display');
        const syncLives = () => livesDisplay.textContent = livesRange.value;
        livesRange.addEventListener('input', syncLives);
=======
import { addFish } from '../services/fish-api.js';

class FishForm extends Component {

    onRender(form) {
        // event goodness for showing display of range value
        const weightRange = form.querySelector('#weight');
        const weightDisplay = form.querySelector('#weight');
        const syncLives = () => weightDisplay.textContent = weightRange.value;
        weightRange.addEventListener('input', syncLives);
>>>>>>> 7a9b2cc06638512ad4b4b0ae921ec035e0c93e42
        syncLives();

        // handle form event
        form.addEventListener('submit', async event => {
            event.preventDefault();

            const formData = new FormData(form);

<<<<<<< HEAD
            const cat = {
                name: formData.get('name'),
                typeId: parseInt(formData.get('type-id')),
                url: formData.get('url'),
                year: parseInt(formData.get('year')),
                lives: parseInt(formData.get('lives')),
                isSidekick: formData.get('is-sidekick') === 'on'
            };

            try {
                const saved = await addCat(cat);
=======
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
>>>>>>> 7a9b2cc06638512ad4b4b0ae921ec035e0c93e42
                // for now log out our saved cat,
                // eventually use id to redirect to detail page
                console.log(saved);

<<<<<<< HEAD
                window.location = `cat-list.html`;
            }
            catch (err) {
                console.log('cat not saved :(', err);
=======
                window.location = `fish-list.html`;
            }
            catch (err) {
                console.log('fish not saved :(', err);
>>>>>>> 7a9b2cc06638512ad4b4b0ae921ec035e0c93e42
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
<<<<<<< HEAD
                < form class="cat-form" >
                    <p>
                        <label for="name">Name</label>
                        <input id="name" name="name" required placeholder="Famous Cat">
=======
                < form class="fish-form" >
                    <p>
                        <label for="name">Name</label>
                        <input id="name" name="name" required placeholder="Oregon Fish">
>>>>>>> 7a9b2cc06638512ad4b4b0ae921ec035e0c93e42
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
<<<<<<< HEAD
                                <label for="year">Year Introduced</label>
                                <input id="year"
                                    name="year"
                                    required
                                    pattern="[0-9]{4}"
                                    placeholder="2005"
                                    title="Four digit year">
                </p>

                                <p>
                                    <label for="lives">Lives Remaining</label>
                                    <span class="horizontally-centered">
                                        <input id="lives" name="lives" type="range" min="0" max="9" value="9">
                                            <span id="lives-display">5</span>
                    </span>
                </p>

                                    <fieldset for="is-sidekick">
                                        <legend>Is a Sidekick?</legend>
                                        <label class="horizontally-centered">
                                            <input id="is-sidekick" name="is-sidekick" type="checkbox"> Yes
=======
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
>>>>>>> 7a9b2cc06638512ad4b4b0ae921ec035e0c93e42
                    </label>
                </fieldset>

                                        <p>
<<<<<<< HEAD
                                            <button>Add This Cat</button>
=======
                                            <button>Add This a Fish</button>
>>>>>>> 7a9b2cc06638512ad4b4b0ae921ec035e0c93e42
                                        </p>
            </form>
                                    `;
    }
}

<<<<<<< HEAD
export default CatForm;
=======
export default FishForm;
>>>>>>> 7a9b2cc06638512ad4b4b0ae921ec035e0c93e42
