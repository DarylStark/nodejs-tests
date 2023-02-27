let express = require('express');
let app = express();

let frontend = require('./webserver/frontend');

app.use("/wiki", frontend);

let server = app.listen(8085, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
