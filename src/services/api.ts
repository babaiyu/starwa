const SWAPI_URL: string = 'https://swapi.co/api/';

// Headers -> GET API
const headers = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
};

// Generate Response to JSON
export async function handleResponse(response: Response) {
  const text = await response.text();
  const data = text && JSON.parse(text);
  return data;
}

export async function movies() {
  const movieURL: string = `${SWAPI_URL}films`;
  const response = await fetch(movieURL, headers);
  return handleResponse(response);
}

export async function characters() {
  const charactersURL: string = `${SWAPI_URL}people`;
  const response = await fetch(charactersURL, headers);
  return handleResponse(response);
}

export async function planets() {
  const planetURL: string = `${SWAPI_URL}planets`;
  const response = await fetch(planetURL, headers);
  return handleResponse(response);
}

export async function starships() {
  const starshipsURL: string = `${SWAPI_URL}starships`;
  const response = await fetch(starshipsURL, headers);
  return handleResponse(response);
}

export async function vehicles() {
  const vehiclesURL: string = `${SWAPI_URL}vehicles`;
  const response = await fetch(vehiclesURL, headers);
  return handleResponse(response);
}
