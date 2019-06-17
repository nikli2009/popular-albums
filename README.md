# Popluar Albums ( React-Native Demo )

### 1. set up your dev environment
- `VSCode Extensions` - Install all the extensions as below (Shift + CMD + P on Mac)
  - Flow Language Support
  - Prettier -Code formatter
  - React Native Tools
  - Markdown All in One (Optional)

- Node
  Simply install nodejs v10.0.0, if you have installed `n` as node version manager on Mac.
  ```
  n 10.0.0

  // Verify
  node -v
  v10.0.0
  ```
- Yarn
  Use Brew to install Yarn
  ```
  brew install yarn --ignore-dependencies
  ```
  then run `yarn` to install all the required dependencies
  ```
  yarn
  ```

- Eslint
  
  Install eslint globally or locally (~~to create eslintrc.js later~~, already created)
    ```
    npm install eslint --save-dev
    ```

- Prettier




- Flow
  ```
  yarn add flow-bin@0.92.0 --dev (to match with the flow version number in .flowconfig)
  ```
  then open `settings.json` to disable `JavaScript validation` of VSCode due to a known issue of VSCode
  ```
  {
    "javascript.validate.enable": false,
  }
  ```
  then force to use Flow in `node_modules`
  ```
  {
    "flow.useNPMPackagedFlow": true
  }
  ```


- Final VSCode User Settings(JSON)
```
{
    "editor.formatOnSave": true,
    "javascript.format.enable": false,
    "prettier.eslintIntegration": true,
    "javascript.validate.enable": false,
    "http.proxyStrictSSL": false,
    "flow.useNPMPackagedFlow": true
}
```

### 2. Start
- Flow Server
  
  start server
  ```
  npm run flow start
  ```
  or shut down an existing one
  ```
  npm run flow stop
  ```

### 3. Code Quality Validation before Commit
- Install Husky via Yarn
  ```
  yarn add husky --dev
  ```
- Install Lint-Staged
  ```
  // npx mrm lint-staged ====> we don't have to use that cuz we already have an lint-staged configuration file.
  // instead, simply run
  yarn add --dev lint-staged
  ```
- TEST - Try to violate any ESLint rules and commit (CommandLine and Tool like SourceTree will both show error and stop you from proceeding)