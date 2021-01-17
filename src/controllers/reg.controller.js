import User from '../model/user.model.js';
import { genSaltSync, hashSync } from 'bcrypt';
const salt = genSaltSync(10);
export default async (req, res) => {
  const { email, password } = req.body;
  const candidate = await User.findOne({ email });

  if (candidate) {
    return res.json({ message: 'такий користувач був створений раніше' });
  } else {
    const user = new User({
      email,
      password: hashSync(password, salt),
    });
    await user.save();
  }
};
