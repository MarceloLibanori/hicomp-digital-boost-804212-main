const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const dist = path.join(__dirname, '../dist');
app.use(express.static(dist));
app.get('*', (req, res) => {
  res.sendFile(path.join(dist, 'index.html'));
});
app.listen(port, () => console.log(`SPA server listening on http://127.0.0.1:${port}`));
