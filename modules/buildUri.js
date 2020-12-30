module.exports = (params) => {
    
    let uri = "mongodb";
    let db = params.db || "test"; // Get DB

    // Check for SRV
    if(params.srv) {

        uri+= "+srv";
        uri+= `://${params.username}:${params.password}@${params.host}`

        if(params.port) uri+= `:${params.port}`; // Check for Port
        
        uri+= `/${db}?authSource=${params.authDb}`;
    }
    else {
        uri+= `://${params.username}:${params.password}@${params.host}`;
        
        if(params.port) uri+= `:${params.port}`; // Check for Port

        uri+= `/${db}?authSource=${params.authDb}`;
    }
    return uri;
}