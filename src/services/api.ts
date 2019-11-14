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
export function handleResponse(response: Response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    return data;
  });
}

// Function for Hit API
export async function example() {
  const EXAMPLE: string = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(EXAMPLE, headers);
  return handleResponse(response);
}

export async function movies() {
  const movieURL: string = `${SWAPI_URL}films`;
  const response = await fetch(movieURL, headers);
  return handleResponse(response);
}
