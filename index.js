let express = require('express');
let app = express();

app.use("/", require('./webserver/frontend'));
app.use("/wiki", require('./webserver/wiki'));

let server = app.listen(8085, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
