const API_URL = 'http://localhost:3000/';

export async function getUsers() {
  const response = await fetch(`${API_URL}users`);
  return response.json();
}

export async function getUser(id) {
  const response = await fetch(`${API_URL}users/${id}`);
  return response.json();
}

export async function createUser(userData) {
  const response = await fetch(`${API_URL}users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  return response.json();
}