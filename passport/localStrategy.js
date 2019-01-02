const LocalStrategy = require('passport-local').Strategy;
const Joi = require('joi');

const { User } = require('../models');

module.exports = passport => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email, password, done) => {
        try {
          console.log('[+] passport - local :', email, password);
          const { error } = validate({ email: email, password: password });

          if (error) {
            done(null, false, {
              message: error.details[0].message
            });
          }

          const exUser = await User.findOne({ where: { email } });
          if (exUser) {
            // const result = await bcrypt.compare(password, exUser.password);
            const result = await User.comparePassword(
              password,
              exUser.password
            );
            if (result) {
              done(null, exUser);
            } else {
              console.log('[-] passport - LocalStrategy : wrong password');
              // done(null, false, { message: 'Wrong password' });
              done(null, false, { message: 'Invalid email or password.' });
            }
          } else {
            done(null, false, { message: 'not registered email' });
          }
        } catch (error) {
          console.error('[-] passport LocalStrategy ', error);
          done(error);
        }
      }
    )
  );
};

function validate (req) {
  const schema = {
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email({ minDomainAtoms: 2 }),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  };

  return Joi.validate(req, schema);
}
