const KakaoStrategy = require('passport-kakao').Strategy;
const config = require('../config/config');

const { User } = require('../models');

module.exports = passport => {
  passport.use(
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_ID,
        callbackURL: '/auth/kakao/callback'
      },
      async (accessToken, refereshToken, profile, done) => {
        // console.log('[*] /auth/kakao/callback : token - ', accessToken, refereshToken);
        console.log('[*] /auth/kakao/callback : profile -', profile);

        try {
          const exUser = await User.findOne({
            where: {
              snsId: profile.id,
              provider: 'kakao'
            }
          });
          if (exUser) {
            console.log('[*] /auth/kakao/callback : existing user - ', exUser);
            done(null, exUser);
          } else {
            const newUser = await User.create({
              email: profile._json && profile._json.kaccount_email,
              name: profile.displayName,
              snsId: profile.id,
              provider: 'kakao'
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
