const fetch = require('node-fetch');

async function fetchGooglePage() {
  const url = 'https://www.google.com';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch data from the URL');
    }

    const data = await response.text();
    console.log('Data from Google homepage:');
    console.log(data);
  } catch (error) {cd
    console.error('Error:', error.message);
  }
}

fetchGooglePage();
