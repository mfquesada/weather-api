# weather-api

## Getting Started

Install dependencies

```bash
npm install
```

Create a .env file in the root directory with the following content

```bash
PORT=3000
API_KEY=52b24be7a4b555ef2c1e34d5e70548fc
```

Run with command:

```bash
node ./app.js
```

## Test and Coverage

```bash
npm run test
```

```bash
npm run coverage
```

## Endpoints

[health-check](http://localhost:3000/)
[location](http://localhost:3000/v1/location/)
[current/:city?](http://localhost:3000/v1/current/Buenos%20Aires/)
[forecast/:city?](http://localhost:3000/v1/forecast/Buenos%20Aires/)
