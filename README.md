# Popluar Albums ( React-Native Demo )

### 1. set up your dev environment
- Install all the extensions as below (Shift + CMD + P on Mac)
  - Flow Language Support
  - Prettier -Code formatter
  - React Native Tools
  - Markdown All in One (Optional)

- Eslint
  
  Install eslint globally or locally (to create eslintrc.js later)
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