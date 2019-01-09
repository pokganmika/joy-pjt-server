var NaverStrategy = require('passport-naver').Strategy;
require('dotenv').config();

const { User } = require('../models');

module.exports = passport => {
  passport.use(
    new NaverStrategy(
      {
        clientID: process.env.NAVER_CLIENT_ID,
        clientSecret: process.env.NAVER_CLIENT_SECRET,
        callbackURL: '/auth/naver/callback'
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log('[+] /auth/naver : profile = ', profile);

        try {
          const exUser = await User.findOne({
            where: { snsId: profile.id, provider: 'naver' }
          });
          if (exUser) {
            console.log('[*] /auth/naver/callback : existing user - ', exUser);
            done(null, exUser);
          } else {
            const avatar = User.generateAvatar(`naver-${profile.id}`);
            const newUser = await User.create({
              name: profile.displayName
                ? profile.displayName
                : profile._json.email,
              email: profile.emails[0].value,
              username: profile.displayName,
              provider: 'naver',
              snsId: profile.id,
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
