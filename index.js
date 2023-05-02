const fs = require('fs');
const semver = require('semver');
const pkg = require('./package.json');

// Check for the presence of a .env file
if (!fs.existsSync('.env')) {
    throw new Error('No .env file found!');
  }

// Load environment variables from the .env file
require('dotenv').config({ path: './.env' });

// Check if the current Node.js version satisfies the required version
if (!semver.satisfies(process.version, pkg.engines.node)) {
  console.error(`Required Node.js version ${pkg.engines.node} not satisfied with current version ${process.version}.`);
  process.exit(1);
}