module.exports = (api, options) => {
    api.extendPackage({
      devDependencies: {
        "git-cz": "^4.3.1",
        "cz-conventional-changelog": "^3.1.0"
      },
      config: {
        "commitizen": {
          "path": "./node_modules/cz-conventional-changelog"
        }
      },
      scripts: {
        "commit": "git-cz"
      }
    })

    if (options.addSemanticRelease) {
      api.extendPackage({
        devDependencies: {
          "semantic-release": "^17.0.7"
        },
        config: {
          "release": {
            "branches": ["master", "next"]
          }
        },
        scripts: {
          "release": "semantic-release"
        }
      })
    }

  }