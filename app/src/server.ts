import express from 'express';
import expressListEndpoints from 'express-list-endpoints';
import user from './routes/user';
import pair from './routes/pair';
import team from './routes/team';
import issue from './routes/issue';
import userIssue from './routes/userIssue';
import cors from 'cors';
import e from 'cors';
const app = express();
// express4.xx以降で以下を同梱
// https://expressjs.com/ja/api.html
// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
const corsOptions: e.CorsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/', user);
app.use('/', pair);
app.use('/', team);
app.use('/', issue);
app.use('/', userIssue);

/* 5000番ポートで待ち受け */
app.listen(5000, () => {
  console.log(`Node.js is listening to PORT: 5000`);
  console.log(expressListEndpoints(app));
});
