var GitHubStrategy = require('passport-github').Strategy;
require('dotenv').config();
const config = require('../config/config');

const { User } = require('../models');

module.exports = passport => {
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: '/auth/github/callback'
        // callbackURL: config.SERVER_URL + '/auth/github/callback'
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log('[+] /auth/github : profile = ', profile);

        try {
          const exUser = await User.findOne({
            where: { snsId: profile.id, provider: 'github' }
          });
          if (exUser) {
            console.log('[*] /auth/github/callback : existing user - ', exUser);
            done(null, exUser);
          } else {
            const newUser = await User.create({
              email: profile._json && profile._json.email,
              name: profile.username,
              snsId: profile.id,
              provider: 'github'
            });
            console.log('[*] /auth/kakao/callback : newUser - ', newUser);
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