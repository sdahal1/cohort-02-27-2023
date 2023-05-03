// figure out the port on which the app should listen
// pull in the app from app.js
// make the app listen on the port

const { PORT = 5000 } = process.env;
const app = require('./app');

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))
