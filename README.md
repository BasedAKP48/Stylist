# Stylist
A base approach to JavaScript

# Using in node
Install this and eslint (save-dev in new projects)
```
npm install @basedakp48/eslint-config --save-dev
npm install eslint --save-dev
```

Create `.eslintrc.js` in root directory
```
module.exports = {
    "extends": "@basedakp48",
};
```
Done! :D

# Using locally
You may want to use one live instance of Stylist, to do so you "link" the project without
installing the project from npm.
In this directory:
```
npm link
```

In other project:
```
npm link @basedakp48/eslint-config
```

# Editing locally
To lint locally, you must add ESLint to this project yourself:
```
npm install eslint --no-save
```

