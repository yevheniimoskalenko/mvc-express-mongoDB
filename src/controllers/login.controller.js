import User from '../model/user.model.js';
import jwt from 'jsonwebtoken';
import { compareSync } from 'bcrypt';
export default async (req, res) => {
  const { email, password } = req.body;
  const candidate = await User.findOne({ email });

  if (candidate) {
    const isPassword = compareSync(password, candidate.password);

    if (isPassword) {
      const token = jwt.sign(
        {
          email: candidate.email,
          id: candidate.id,
        },
        process.env.secret
      );
      return res.json({ status: 'ok', payload: token });
    }
  } else {
    res.status(401).json({
      status: 'error',
      message: 'Користувач не знайдений чи не підходить пароль',
    });
  }
};
