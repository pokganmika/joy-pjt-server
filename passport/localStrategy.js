const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
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
          // const { error } = validate({ email: email, password: password });
          // done(null, false, {
          //   message: error.details[0].message
          // });

          const exUser = await User.findOne({ where: { email } });
          if (exUser) {
            const result = await bcrypt.compare(password, exUser.password);
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
          console.error(error);
          done(error);
        }
      }
    )
  );
};
