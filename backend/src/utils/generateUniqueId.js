const crypto = require('crypto');

/**
 * Teste unitário = testa algo muito específico
 */

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');

}