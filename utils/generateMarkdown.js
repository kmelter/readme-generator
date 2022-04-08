const isomorphicFetch = require('isomorphic-fetch');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeTest = 'test';
  return badgeTest;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  isomorphicFetch
    const licenseLink = fetch(`https://api.github.com/licenses/${license}`)
      .then(response => response.json())
      .then(data => console.log(data.url));

    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  isomorphicFetch
    const licenseBody = fetch(`https://api.github.com/licenses/${license}`)
      .then(response => response.json())
      .then(data => console.log(data.body));
    
      return licenseBody;
}

// TODO: Create a function to generate markdown for README
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