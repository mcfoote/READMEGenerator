// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let output;
  switch(license) {
    case 'MIT':
      output = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Mozilla':
      output = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'GNU':
      output = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD':
      output = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'ISC':
      output = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case 'Apache':
      output = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'None':
      output = '';
    break;
  }
  return output;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let output;
  switch(license) {
    case 'MIT':
      output = '(https://opensource.org/licenses/MIT)';
      break;
    case 'Mozilla':
      output = '(https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'GNU':
      output = '(https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD':
      output = '(https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'ISC':
      output = '(https://opensource.org/licenses/ISC)';
      break;
    case 'Apache':
      output = '(https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'None':
      output = '';
    break;
  }
  return output;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'none') {
    return `This project has no license`
  } else return `You may read more about the ${license} here: `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Badges
  ${renderLicenseBadge(data.license)}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## About
  ${data.about}

  ## Installation
  
`;
}

module.exports = generateMarkdown;
