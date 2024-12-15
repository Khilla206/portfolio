const countryDiv = document.getElementById('user-country');

// Variable to store IP address
let userIP = '';

// Step 1: Fetch the client's IP address from ipify
fetch('https://api64.ipify.org?format=json') // IPv6-compatible API
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(ipData => {
    userIP = ipData.ip; // Store the IP address
    console.log(`IP Address: ${userIP}`);

    // Step 2: Fetch the country information from country.is
    return fetch('https://api.country.is/');
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(countryData => {
    console.log(`Country: ${countryData.country}`);
    console.log(`Country Code: ${countryData.country_code}`);

    // Display the IP and location information in the HTML
    countryDiv.innerHTML = `
      You are connecting from: <strong class="vetter">${countryData.country} (${countryData.country_code})</strong>
      with IP Address: <strong class="vetter">${userIP}</strong>
    `;
  })
  .catch(error => {
    console.error('Error:', error);
    countryDiv.textContent = 'Unable to detect your location or IP address.';
  });
