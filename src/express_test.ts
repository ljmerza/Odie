import express from 'express';

const port = process.env.PORT || 3000;

const app = express();
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello, World!')
})

router.get('/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}`)
})

app.use('/greet', router)

app.listen(port, () => {
  return console.log(`Express is listening at port ${port}`);
});