require('dotenv').config();
const express = require('express');
const dbConnect = require('./config/dbConnect');
const methodOverride = require('method-override');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dbConnect();

app.use('/', require('./routers/loginRoutes'));
app.use(express.static('./public'));

app.use(methodOverride('_method'));

app.use('/contacts', require('./routers/contactsRouter'));

app.listen(3000, () => {
    console.log('서버 실행 중');
});
