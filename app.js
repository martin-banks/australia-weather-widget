const fetch = require('node-fetch')

const endpoints = [
  'http://www.bom.gov.au/fwo/IDV60901/IDV60901.95936.json', // Melbourne
  'http://www.bom.gov.au/fwo/IDN60901/IDN60901.95766.json', // Sydney
]

function getLatest (data) {
  // takes data response as json format
  const { name, air_temp, local_date_time } = data.observations.data[0]
  console.log({
    name,
    local_date_time,
    air_temp,
  })
}

endpoints.forEach(e => {
  fetch(e)
    .then(response => response.json())
    .then(getLatest)
    .catch(console.log)
})
