const URL = '/api';

export async function getFish() {  
    const url = `${URL}/fish`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}
