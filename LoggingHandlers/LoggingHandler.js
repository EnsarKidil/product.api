//This is the logging handler
//This class has the responsibility of logging
//There are 2 types of logging in this application, INFO and ERROR

class Logger {
    static log(message) {
        console.log(`[INFO] ${message} ${Date.now().toString()}`);
    }
    static error(statusCode, message) {
        console.error(`[ERROR] ${statusCode} ${message} ${Date.now().toString()}`);
    }
}

module.exports = Logger;


