var InstagramStrategy = require('passport-instagram').Strategy;
require('dotenv').config();

const { User } = require('../models');

module.exports = passport => {
  passport.use(
    new InstagramStrategy(
      {
        clientID: process.env.INSTAGRAM_CLIENT_ID,
        clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
        callbackURL: '/auth/instagram/callback'
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log('[+] /auth/instagram : profile = ', profile);

        try {
          const exUser = await User.findOne({
            where: { snsId: profile.id, provider: 'instagram' }
          });
          if (exUser) {
            console.log(
              '[*] /auth/instagram/callback : existing user - ',
              exUser
            );
            done(null, exUser);
          } else {
            const newUser = await User.create({
              name: profile.username,
              snsId: profile.id,
              provider: 'instagram'
            });
            console.log('[*] /auth/instagram/callback : newUser - ', newUser);
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
