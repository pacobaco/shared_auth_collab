const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const teamRoutes = require('./routes/teamRoutes');
const sessionRoutes = require('./routes/sessionRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api/team', teamRoutes);
app.use('/api/session', sessionRoutes);

mongoose.connect('mongodb://localhost:27017/sharedcollab', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(4000, () => console.log('Server running on port 4000'));
}).catch(err => console.error(err));