import User from '../model/user.model.js';
import { genSaltSync, hashSync } from 'bcrypt';
export default async (req, res) => {
  const { email, password } = req.body;
  return res.json(req.user);
};
