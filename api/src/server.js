import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
	res.status(202).send();
});

export const start = () => {
	app.listen(3000, () => {
		console.log('server is up and running on port 3000');
	});
};
