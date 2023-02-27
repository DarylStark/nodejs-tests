let express = require('express');
let app = express();

app.use("/", require('./webserver/frontend'));
app.use("/wiki", require('./webserver/wiki'));
app.use("/static", express.static("static"));

let server = app.listen(8085, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
