const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const github = require('./githubStrategy');
const facebook = require('./facebookStrategy');
const google = require('./googleStrategy');
const instagram = require('./instagramStrategy');
const naver = require('./naverStrategy');

const { User } = require('../models');

module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user.name);
  });

  passport.deserializeUser((name, done) => {
    User.findOne({ where: { name } })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  local(passport);
  kakao(passport);
  github(passport);
  facebook(passport);
  google(passport);
  instagram(passport);
  naver(passport);
};
