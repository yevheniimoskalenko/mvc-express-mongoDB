import jwt from 'jsonwebtoken';
export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.json({
      status: 'error',
      message: 'не встановлений токен',
    });
  }

  const token = authorization.replace('Bearer ', '');
  if (token === '') {
    return res.json({
      status: 'error',
      message: 'не встановлений токен',
    });
  }
  try {
    const obj = jwt.verify(token, process.env.secret);
    req.user = obj;
    next();
  } catch (err) {
    return res.json({ status: 'error', err });
  }
};
