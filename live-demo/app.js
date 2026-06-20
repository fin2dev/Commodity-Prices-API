document.getElementById('getDataBtn').addEventListener('click', async function () {
  const apiKey = document.getElementById('apiKey').value.trim();
  const commodityName = document.getElementById('commodity').value;
  const responseBox = document.getElementById('responseBox');
  const requestUrlInput = document.getElementById('requestUrl');

  if (!apiKey) {
    responseBox.textContent = 'Please enter your API key.';
    return;
  }

  const url = `https://apidata.fin2dev.com/v1/commodities?key=${encodeURIComponent(apiKey)}&commodity_name=${encodeURIComponent(commodityName)}`;

  requestUrlInput.value = url;
  responseBox.textContent = 'Loading...';

  try {
    const response = await fetch(url);
    const data = await response.json();

    responseBox.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    responseBox.textContent = `Request failed: ${error.message}`;
  }
});

document.getElementById('copyUrlBtn').addEventListener('click', async function () {
  const requestUrlInput = document.getElementById('requestUrl');

  if (!requestUrlInput.value) {
    return;
  }

  await navigator.clipboard.writeText(requestUrlInput.value);

  this.textContent = 'Copied!';

  setTimeout(() => {
    this.textContent = 'Copy URL';
  }, 1500);
});
