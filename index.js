const express = require('express');
const cors = require('cors');
const { routerApi } = require('./routes');
const {
  errorHandler,
  logErrors,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(options));
const port = 3000;

app.listen(port, () => {
  console.log('mi port', port);
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
