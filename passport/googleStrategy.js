var GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

const { User } = require('../models');

module.exports = passport => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log('[+] /auth/google : profile = ', profile);

        try {
          const exUser = await User.findOne({
            where: { snsId: profile.id, provider: 'google' }
          });
          if (exUser) {
            console.log('[*] /auth/google/callback : existing user - ', exUser);
            done(null, exUser);
          } else {
            const newUser = await User.create({
              email: profile.email,
              name: profile.displayName,
              snsId: profile.id,
              provider: 'google'
            });
            console.log('[*] /auth/google/callback : newUser - ', newUser);
            done(null, newUser);
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
