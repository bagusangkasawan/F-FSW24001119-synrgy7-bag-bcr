# Restaurant Apps

## Description
This is a restaurant application created as part of an Expert Front-End submission. The app uses Webpack for bundling, Babel for transpiling, and Jest for testing.

## Prerequisites
Before you begin, ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

## Installation
Install the dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode
To run the application in development mode with hot reloading, use the following command:
```bash
npm run start-dev
```
This will start the Webpack Dev Server with the configuration from `webpack.dev.js`. The application will be available at `http://localhost:8080`.

### Build
To build the application for production, use the following command:
```bash
npm run build
```
This will generate the production-ready bundle in the `dist` directory.

### Serve
To serve the built application from the `dist` directory, use the following command:
```bash
npm run serve
```
This will start an HTTP server to serve the built application.

## Linting
To run the linter and ensure your code adheres to the specified standards, use the following command:
```bash
npm run lint
```

## Configuration

### Webpack
- **Development**: `webpack-dev-server` is configured using `webpack.dev.js`.
- **Production**: `webpack` is configured using `webpack.prod.js`.

### Babel
- **Transpiling**: Uses Babel preset `@babel/preset-env` for modern JavaScript transpiling.

## Author
Bagus Angkasawan Sumantri Putra - [bagusasp01@gmail.com](mailto:bagusasp01@gmail.com)

## License
This project is licensed under the [ISC License](LICENSE).

### Explanation:

- **Description**: Describes the application.
- **Prerequisites**: Details the necessary installations.
- **Installation**: Instructions for installing dependencies.
- **Running the Application**: Commands to run the application in different modes.
- **Linting**: Command to run code linting.
- **Configuration**: Details about Webpack and Babel configuration.
- **Author**: Author information.
- **License**: Licensing information.

Feel free to adjust any details according to your project specifics!
