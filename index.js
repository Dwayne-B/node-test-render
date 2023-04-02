import axios from 'axios';
import * as dotenv from 'dotenv';
import ejs from 'ejs';
import express from 'express';
const app = express();
const url = 'https://api.punkapi.com/v2/beers/random';
app.set('view engine', 'ejs');

dotenv.config();

app.get('', (req, res) => {
	axios.get(url).then((apiResponse) => {
		console.log(apiResponse);

		let { name, image_url, abv } = apiResponse.data.shift();
		console.log(image_url);

		res.render('index', { name, image_url, abv });
	});
});

app.listen(process.env.PORT, () => {
	console.log('listening on port ' + process.env.PORT);
});
