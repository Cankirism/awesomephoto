const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const OpenAI = require('openai');

const app = express();
const options = [
	cors({
		origin:'*'
		
		
	})

];
app.use(options);
app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.resolve(__dirname, './build')));
console.log("started  yes ..");
const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

// app.use("/",async(req,res)=>{

// 	res.send("server is running ");
// })

app.post('/api', async (req, res) => {
   debugger;
	try {
		
		console.log("api side",req.body);
		const { prompt } = req.body;
		console.log(prompt);
		const response = await openai.images.generate({
			prompt,
			
			n: 1,
			size: "1024x1024",
			response_format: 'b64_json',
		});
		
		console.log(response);
		const image = response.data[0].b64_json;
		res.status(200).json({ photo: image });

	}
	catch (error) { 
		res.send(error);
		console.log("hata olustu",error); }

});
app.listen(6000,()=>console.log("server staerted on port 6000"));



























// const express = require('express');
// const path = require('path');
// const cors = require('cors');
// require('dotenv').config();
// const OpenAI = require('openai');

// const app = express();
// app.use(cors());
// app.use(express.json({ limit: '50mb' }));

// app.use(express.static(path.resolve(__dirname, './build')));

// const openai = new OpenAI({
// 	apiKey: process.env.OPENAI_API_KEY,
// });

// app.post('/api', async (req, res) => {
// 	try {
// 		const { prompt } = req.body;
// 		const response = await openai.images.generate({
// 			prompt,
// 			n: 1,
// 			size: '1024x1024',
// 			response_format: 'b64_json',
// 		});

// 		const image = response.data[0].b64_json;
// 		res.status(200).json({ photo: image });
// 	} catch (error) {
// 		console.error(error);
// 	}
// });

// const startServer = async () => {
// 	app.listen(8080, () => console.log('Server started on port 8080'));
// };

// startServer();
