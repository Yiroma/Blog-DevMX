## Concept

This template is meant to serve as a foundation for every P2/P3 following the React-Express-MySQL stack, as learned in Wild Code School and modify by Yiroma.
It's pre-configured with a set of tools which'll help students produce industry-quality and easier-to-maintain code, while staying as simple as possible to use.

## Setup & Use

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- If you are using `yarn` or `pnpm`, adapt the `config/cli` in `package.json`
- Run command `npm install` or `npm i`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code
- `fix` : Fixes linter errors **(run it if `lint` growls on your code !)**

## FAQ

### Tools

- **_Concurrently_** : Allows for several commands to run concurrently in the same CLI
- **_Vite_** : Alternative to **_Create-React-App_**, packaging less tools for a more fluid experience
- **_ESLint_** : "Quality of code" tool, ensures chosen rules will be enforced
- **_Prettier_** : "Quality of code" tool as well, focuses on the styleguide
- **_Airbnb Standard_** : One of the most known "standards", even though it's not officially linked to ES/JS
- **_Nodemon_** : Allows to restart the server everytime a .js file is udated
