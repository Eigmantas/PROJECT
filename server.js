const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, './public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.get('/matsedill', (req, res) => {
  res.render('matsedill', { title: 'Matseðill FB' });
});

app.get('/gullfoss', (req, res) => {
  res.render('Gullfoss-details', { title: 'Gullfoss' });
});

app.get('/', (req, res) => {
    res.render('index');
});

app.use((req, res, next) => {
  res.status(404).render('404', { title: 'Síða fannst ekki' });
});

app.listen(PORT, () => {
  console.log(`Server keyrir á http://localhost:${PORT}`);
});