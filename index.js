const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
// const PORT =  3000;

app.use(bodyParser.json());
app.use(cors())
let data = [];

// ...................POST..........................
app.post('/data/save', (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.send('اطلاعات با موفقیت اضافه شد');
  console.log(newData);
});
// ...................POST..........................

// ...................PUT..........................
app.put('/data/save', (req, res) => {
  const updatedData = req.body;
  data.push(...updatedData);
  res.send('اطلاعات با موفقیت به روز شد');
});
// ...................PUT..........................

// ...................GET..........................
app.get('/data', (req, res) => {
  res.json(data);
});
// ...................GET..........................

app.listen(PORT, () => {
  console.log(`SERVER IS RUN:   http://localhost:${PORT}/data`);
});
