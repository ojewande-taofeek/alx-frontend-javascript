<h1>0x00. ES6 Basics</h1>

<h2>Concepts</h2>

<em>For this project, we expect you to look at these concepts:</em>

<ul>
    <li><a href="https://intranet.alxswe.com/concepts/852">JavaScript programming</a></li>
    <li><a href="https://intranet.alxswe.com/concepts/542">Software Linter</a></li>
</ul>

<img src="es6_image.png" alt="ES6 image">

<h2>Resources</h2>
<h4>Read or watch:</h4>

<ul>
    <li><a href="https://intranet.alxswe.com/rltoken/HRvh-7X2k2JmPu2XMuvlnQ">ECMAScript 6 - ECMAScript 2015</a></li>
    <li><a href="https://intranet.alxswe.com/rltoken/bu6OK8Wbzzxr04Si-qup-w">Statements and declarations</a></li>
    <li><a href="https://intranet.alxswe.com/rltoken/kn70en_i7XsVl9PUhAK1fQ">Arrow functions</a></li>
    <li><a href="https://intranet.alxswe.com/rltoken/e1-hBHivLFWOip87Lc4Jfw">Default parameters</a></li>
    <li><a href="https://intranet.alxswe.com/rltoken/TB_tbhDM8tPkVIS4_Tw_rw">Rest parameter</a></li>
    <li><a href="https://intranet.alxswe.com/rltoken/MyAmrYqmTSHF66QmE5D8bA">Demystifying ES6 Iterables & Iterators</a></li>
</ul>


<h2>Learning Objectives</h2>
<ul>
    <li>What ES6 is</li>
    <li>New features introduced in ES6</li>
    <li>The difference between a constant and a variable</li>
    <li>Block-scoped variables</li>
    <li>Arrow functions and function parameters default to them</li>
    <li>Rest and spread function parameters</li>
    <li>String templating in ES6</li>
    <li>Object creation and their properties in ES6</li>
    <li>Iterators and for-of loops</li>
</ul>

<h2>Requirements</h2>
<h3>General</h3>
<ul>
    <li>All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x</li>
    <li>Allowed editors: vi, vim, emacs, Visual Studio Code</li>
    <li>All your files should end with a new line</li>
    <li>A README.md file, at the root of the folder of the project, is mandatory</li>
    <li>Your code should use the js extension</li>
    <li>Your code will be tested using the Jest Testing Framework</li>
    <li>Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide</li>
    <li>All of your functions must be exported</li>
</ul>

<h2>Setup</h2>
<h3>Install NodeJS 12.11.x</h3>
<p>(in your home directory):</p>
<samp>
<code>
<p>curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh</p>
<p>sudo bash nodesource_setup.sh</p>
<p>sudo apt install nodejs -y</p>
</code>
<br>
<code>
<p>$ nodejs -v</p>
<p>v12.11.1</p>
<p>$ npm -v</p>
<p>6.11.3</p>
</code>
</samp>

<h2>Install Jest, Babel, and ESLint</h2>

<h3>Configuration files</h3>
<p>Add the files below to your project directory</p>
<details>
    <summary>package.json</summary>
    <pre>
        <code>
            {
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
        </code>
    </pre>

</details>
<details>
    <summary>babel.config.js</summary>
    <pre>
        <code>
            module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
        </code>
    </pre>

</details>
<details>
    <summary>.eslintrc.js</summary>
    <pre>
        <code>
            odule.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
        </code>
    </pre>
</details>

<h3>Finally…</h3>
<p>Don’t forget to run npm install from the terminal of your project folder to install all necessary project dependencies.</p>