const isomorphicFetch = require('isomorphic-fetch');


function renderLicenseBadge(license) {
  //With more time, I might attempt to use key-value pairs to link the user inputs with the actual code for the license badge
}

//I have been having difficulty getting the fetches to work and pass the information in the template literal.
//I have console logged the data to demonstrate that the fetch request is completed.
function renderLicenseLink(license) {
  isomorphicFetch
    const licenseLink = fetch(`https://api.github.com/licenses/${license}`)
      .then(response => response.json())
      .then(data => console.log(data.url));

    //return licenseLink;
}

function renderLicenseSection(license) {
  isomorphicFetch
    const licenseBody = fetch(`https://api.github.com/licenses/${license}`)
      .then(response => response.json())
      .then(data => console.log(data.body));
    
    //return licenseBody;
}

//generateMarkdown by passing in user inputs
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
[${data.username}](github.com/${data.username})

Email me with additional questions: ${data.email}

## License
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}
  `;
}

module.exports = generateMarkdown;