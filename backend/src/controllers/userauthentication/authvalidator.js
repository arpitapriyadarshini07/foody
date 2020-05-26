const { Validator } = require('node-input-validator');

module.exports = {

     registrationValidator: async (body)=>
    {
        const v = new Validator(body, {
            email: 'required|email',
            password: 'required'
        });
        
        const matched = await v.check();
        if (!matched) {
            return v.errors;
        }
    }

}