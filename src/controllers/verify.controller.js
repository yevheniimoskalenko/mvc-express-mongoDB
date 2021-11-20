import jwt from 'jsonwebtoken';
export default async (req, res) => {
  const { authorization } = req.headers;
  const token = authorization.replace('Bearer ', '');
  if (token === '') {
    return res.json({
      status: 'error',
      message: 'не встановлений токен',
    });
  }
  try {
    const obj = jwt.verify(token, process.env.secret);
    return res.json({
      status: 'ok',
      payload: {
        obj,
        user: req.user,
      },
    });
  } catch (err) {
    return res.json(err);
  }
};
