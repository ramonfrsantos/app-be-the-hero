const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => { // geralmente é escrito em formado de frase: isso...
    it('should generate an unique ID', () => {
        const id = generateUniqueId();
        
        expect(id).toHaveLength(8);
    })
});
   