import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const axios = require('axios');
const cheerio = require('cheerio');

// Function to scrape data
async function scrapeData(url, keyword) {
  try {
    // Fetch HTML content
    const response = await axios.get(url);
    const html = response.data;

    // Load HTML into Cheerio
    const $ = cheerio.load(html);

    // Create an array to store filtered Gage Height values
    const gageHeightValues = [];

    // Extract rows
    $('table[border="0"][align="left"][cellspacing="1"][cellpadding="1"] tr').slice(1).each((index, row) => {
      const rowData = $(row).find('td');
      const stationName = rowData.eq(1).text().trim(); // Assuming Station name is in the second column (index 1)
      
      // Check if the station name contains the keyword 'Rock'
      if (stationName.includes(keyword)) {
        const gageHeightValue = rowData.eq(3).text().trim(); // Assuming Gageheight, feet is in the fourth column (index 3)
        gageHeightValues.push(gageHeightValue);
      }
    });

    // Create an object with filtered Gage Height values
    const result = {
      gageHeightValues,
    };

    return result;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

// Example usage
const url = 'https://waterdata.usgs.gov/il/nwis/current/?type=flow';
const keyword = 'ROCK RIVER';
scrapeData(url, keyword).then((result) => {
  if (result) {
    console.log('Gage Height Values:', result.gageHeightValues);
  }
});
