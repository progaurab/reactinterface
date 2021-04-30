# reactinterface

1. Create a git repository with name: **reactinterface**
2. Clone that repository:
   ```
       $ git clone https://github.com/progaurab/reactinterface.git
       $ cd reactinterface
   ```
3. Create New React App (using . you can create app in current folder)
   ```
       $ npx create-react-app .
   ```
4. Run the app
   ```
       $ npm start
   ```
5. Custmizeing your installs: Remove these file
   ```
       $ rm -r public/logo* public/robots.txt public/manifest.json src/App.css src/logo.svg src/reportWebVitals.js src/setupTests.js
   ```
6. Clean public/index.html

   ```
       <!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="utf-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1" />
           <meta name="theme-color" content="#000000" />
           <title>React App</title>
       </head>
       <body>
           <noscript>You need to enable JavaScript to run this app.</noscript>
           <div id="root"></div>
       </body>
       </html>
   ```

7. Clean src/Index.js

   ```
   import React from 'react';
   import ReactDOM from 'react-dom';
   import './index.css';
   import App from './App';

   ReactDOM.render(
   <React.StrictMode>
       <App />
   </React.StrictMode>,
   document.getElementById('root')
   );
   ```

8. Clean App.js

   ```
   function App() {
   return (
       <div className="App">
       <h1>Hello World</h1>
       </div>
   );
   }

   export default App;
   ```

9. Add React Icons

   ```
   npm install react-icons --save
   ```

   Importing an Icon
   https://react-icons.github.io/react-icons/

   ```
   import { ICONNAME } from "react-icons/LIBNAME";
   ...
   <ICONNAME />
   ```

10. Installing Tailwind CSS

- https://tailwindcss.com/docs/guides/create-react-app

  ```
  $ npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9 @tailwindcss/forms
  ```

- Since Create React App doesn't let you override the PostCSS configuration natively, we also need to install CRACO to be able to configure Tailwind:

  ```
  npm install @craco/craco
  ```

- Now modify scripts commands in package.json

  ```
  "scripts": {
   "start": "craco start",
   "build": "craco build",
   "test": "craco test",
    "eject": "react-scripts eject"
  },
  ```

- Setting Tailwind Config

  ```
  $ npx tailwindcss init
  ```

- Modify tailwind.config.js, it will remove anything that are not in use before creating css
  ```
  module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {},
  },
  variants: {
      extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
  }
  ```
- Modify our CSS in Index.css
  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- Modify JSX in App.js

  ```
  import { BiArchive } from "react-icons/bi"

  function App() {
  return (
      <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl"> <BiArchive className="inline-block text-red-400 align-top" />Hello World</h1>
      </div>
  );
  }

  export default App;

  ```

# Getting Started with Create React App

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- https://www.linkedin.com/learning/react-js-building-an-interface-8551484/

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
