const { User } = require('../../../models');
const jwt = require('jsonwebtoken');
const config = require('../../../config/config');

describe('user.generateAutotoken', () => {
  it('should return a valid JWT', async () => {
    const user = await User.create({ id: 1, isAdmin: false });
    const token = user.generateAuthToken();
    const decoded = jwt.verify(token, config.jwtPrivateKey);
    expect(decoded).toMatchObject({ id: 1, isAdmin: false });
  });
});
