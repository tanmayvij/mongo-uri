module.exports = (uri) => {

    let authDb = null, port = null, host = '', db = '', username = '', password = '', srv = false;

    // Get authentication source
    if(uri.includes('authSource')) {
        authDb = uri.split('authSource=').pop();
    }

    // Remove unnecessary query params
    if(uri.includes('?')) {
        uri = uri.split('?').shift();
    }
    
    srv = uri.includes('srv'); // Check for SRV
    uri = uri.split('://').pop(); // Remove 'mongodb://' or 'mongodb+srv://' from URI
    username = uri.split(':').shift(); // Get Username

    let length = uri.split(':').length;
    if(length === 2) // Doesn't have port
    {
        uri = uri.split(':').pop(); // Remove username from URI
        password = uri.split('@').shift(); // Get Password
        uri = uri.split('@').pop(); // Remove password from URI
        host = uri.split('/').shift(); // Get Host
        db = uri.split('/').pop(); // Get DB
    }
    else if(length === 3) // Has port
    {
        uri = `${uri.split(':')[1]}:${uri.split(':')[2]}`; // Remove username from URI
        password = uri.split('@').shift(); // Get Password
        uri = uri.split('@').pop(); // Remove password from URI
        host = uri.split(':').shift(); // Get Host
        uri = uri.split(':').pop(); // Remove host from URI
        port = parseInt(uri.split('/').shift()); // Get Port
        db = uri.split('/').pop(); // Get DB
    }


    let data = {
        host,
        username,
        password,
        db,
        srv,
        authDb,
        port
    };
    return data;
}