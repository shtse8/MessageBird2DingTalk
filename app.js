const express = require('express')
const bodyParser = require("body-parser");
const axios = require('axios');
const app = express()
const port = process.env.PORT || 80

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

app.post("/", function (req, res) {
	axios.post('https://oapi.dingtalk.com/robot/send?access_token=7903f40a61ee9241b72b3102717a5d61f377805f3c2b22aa5274cbc66cba499d', 	{
		"msgtype": "text",
		"text": {
			"content": JSON.stringify(req.body)
		}
	})
});


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))