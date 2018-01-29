import { resolve } from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import chalk from 'chalk';

// import { wrap } from './utils';

const port = process.env.PORT || process.argv[2] || 8080;
const app = express();

app.use(bodyParser.json());
app.use(express.static(resolve(process.cwd(), 'public')));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
else {
    app.use(morgan('combined'));
}

app.listen(port, () => {
    console.log(`Server now running on port ${chalk.green(port)}`);
});
