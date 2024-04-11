const bcrypt = require('bcrypt');

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                reject(err); // Reject with error
            } 
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) {
                        reject(err); // Reject with error
                    } 
                        resolve(hash); // Resolve with hash
                });
        });
    });
};

const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed);
};

module.exports = {
    hashPassword,
    comparePassword
};
