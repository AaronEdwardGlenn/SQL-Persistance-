const URL = '/api';

export async function getFishes() {
    const url = `${URL}/fish`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function getSpecies() {
    const url = `${URL}/species`;
    const response = await fetch(url);
    console.log(url); 
    const data = await response.json();
    return data;
}

export async function addFish(fish) {
    const url = `${URL}/fish`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(fish)
    });

    const data = await response.json();
    return data;
}
