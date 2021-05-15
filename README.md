# URL Shorter

User can signup and signin
User can add new URLS and get sort URL 
User can use tiny url to get original URL for redirect.

## Prerequisite - Tech
- Node.Js >= 10
- MySQL >= 5.6
- npx & npm
- Postman for testing

## Build with
- Express
- Typescript
- MySQL
- ES6
- JWT

## Features
- Used the platform `typescript-express-starter` to build the project and made changes.
- SignUp
- SignIn
- Logout
- User Information ( Managment )
- Add URL, for create dummy URL
- Shorten url, Redirect original.

## Installation
URL Shorten requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/higunjan/url-shorter.git
cd url-shorter
npm install
```

To run development
```
npm run dev
```
To build as bundle
```
npm run build
```

For production environments...

```sh
npm install --production
npm start
```

Verify the deployment by navigating to your server address in
your preferred browser/postman.

```sh
http://localhost:3000
```

## API Documentation
You can find the API documentation / postman file inside the dir `ROOT_DIR/api-document-postman/*`
```
url-shorter.postman_collection.json     // For API in postman
url-shorter.postman_environment.json    // Postman environment file
```
Basic dump of MySQL you can utils for more info,
```
ROOT_DIR/dump/Dump20210515.sql
```

## License

MIT

**Gunjan Patel!**