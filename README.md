# vue-cli-plugin-cz

This plugin sets up commitizen and semantic release. 
The plugin will install commitizen but will give you the option to add semantic release.
If you choose to add semantic release, the plugin will set up configuration for release via GitHub Actions.

## Installation

`vue add vue-cli-plugin-cz`


## Usage

### Scripts

#### `commit`
Will run commitizen.

`npm run commit` 

#### `release`
Will create a release.

`npm run release`

#### `changelog`

Will create changelog.

`npm run changelog`

## Github Actions Workflow

This plugin will add the following workflow:

```yml
name: Release
on:
  push:
    branches:
      - master
jobs:
  release:
    name: Release
    runs-on: ubuntu-18.04
    steps:
      - name: Checkout
        uses: actions/checkout@v1
      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          node-version: 12
      - name: Install dependencies
        run: npm ci
      - name: Release
        env:
          GITHUB_TOKEN: ${{ secrets.GH_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
        run: npm run semantic-release
```

By default, it will create a release on GitHub, add a tarball to the release, and skip publishing to NPM.

You will need to add a Github personal access token (`GH_TOKEN`) and a `NPM_TOKEN` to your repo's secrets.