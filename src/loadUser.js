const  httpGet  = require('./http');

function loadUser(id) {
    // bad practice
    const data = httpGet(`http://server:8080/users/${id}`);
    return JSON.parse(data);
}

module.exports = loadUser;