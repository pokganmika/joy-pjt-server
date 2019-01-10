const { User } = require('../../../models');

describe('AWS S3', () => {
  it('should upload file to AWS S3.', async () => {
    const avatar = User.generateAvatar('tkhwang@gmail.com');
    const hash = await User.generateHash('tkhwang@gmail.com');
    const user = await User.create({
      name: 'tkhwang',
      email: 'tkhwang@gmail.com',
      password: hash,
      avatar
    });
    console.log(user);
    expect(user).toMatchObject({ id: 1, isAdmin: false });
  });
});
