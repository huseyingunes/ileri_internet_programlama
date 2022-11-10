const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.get('/', (req, res) => {
  res.send('Merhaba Dünya!')
})

app.get('/ajax', (req, res) => {
    res.send('<h1>AJAX</h1>')
  })

  app.get('/jquery', function(req, res) {
    res.sendFile(path.join(__dirname, '/4_ajax_get_web.html'));
  });

app.listen(port, () => {
  console.log(`Uygulama ${port} nolu portta çalışıyor...`)
})