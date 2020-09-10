# Card UI for FingerprintJS

A user-interface and prototype for adding/storing credit card information. Part of my application for joining the FingerprintJS team.

**Short Technical Overview:**

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It uses [Overmind](https://overmindjs.org/) for state management, [Formik](https://formik.org/) for form management, [Emotion (styled)](https://emotion.sh/docs/styled) for styling, [ESLint](https://eslint.org/)/[Prettier](https://prettier.io/)/[Husky](https://github.com/typicode/husky) for keeping code tidy. For environment details, it uses [FingerprintJS](https://fingerprintjs.com/). It is hosted on [Netlify](https://www.netlify.com/) and automatically deploys on master updates.

## Getting Started

1. Download or clone the project files locally and navigate to the project directory.

```
cd card-ui-fingerpintjs
```

2. Install the project dependencies.

```
yarn
```

3. Then start the site. Once compiled, you should see and be able to access your site locally at localhost:3000

```
yarn start
```

4. If you are using a [VSCode](https://code.visualstudio.com/) or another modern ide with ESLint enabled, your files should lint automatically after each save. If not, you can run the following command to lint your changes. _Note: when contributing to this project, Husky, will check to make sure that all of your files are linted properly before you can push any commits._

```
yarn lint
```
