var GitHubStrategy = require('passport-github').Strategy;
require('dotenv').config();

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
            const avatar = await User.generateAvatar(`github-${profile.id}`);
            const newUser = await User.create({
              email: profile.emails && profile.emails[0].value,
              name: profile.username,
              snsId: profile.id,
              provider: 'github',
              avatar: avatar
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
