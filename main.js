/**
 * Simple http traffic relay. Useful in meshnets to route requests through udp from host to host
 * @author juanvallejo
 */

var filternet   = require('filternet');
var proxy       = filternet.createProxyServer({});

// proxy.on('interceptResponseContent', function(buffer, response, isSsl, charset, callback) {
//
//    console.log(response);
//    callback(buffer);
//
// });

proxy.on('interceptRequest', function(options, callback) {
    
    if(options.host == 'cnu.edu') {
     //   console.log('this is a test ');
    }
    
    callback(options);
});
