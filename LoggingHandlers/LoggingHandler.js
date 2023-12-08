
class Logger {
    static log(message) {
        console.log(`[INFO] ${message} ${Date.now().toString()}`);
    }
    static error(statusCode, message) {
        console.error(`[ERROR] ${statusCode} ${message} ${Date.now().toString()}`);
    }
}

module.exports = Logger;


