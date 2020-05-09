# vue-cli-plugin-cz

This plugin sets up commitizen and semantic release. 
If you choose to add semantic release, the plugin will:
- install dev dependencies.
- create a `release` config in your `package.json`
- add a `release.yml` github workflow that triggers on push to master.
- you'll need to add `GH_TOKEN` and `NPM_TOKEN` to your repo's secrets.

## Installation

`vue add vue-cli-plugin-cz`

## Usage

`npm run commit`