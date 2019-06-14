/**
 * This is a wrapper for a new api
 */
const compose = require('./index.js')
class dockerCompose extends compose {
    constructor(composeDir) {
        super();
        // Set the Working dir
        this.cwd = composeDir || process.cwd    
    }
}
return dockerCompose
