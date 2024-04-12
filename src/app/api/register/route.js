import {User} from "../../../app/models/User.js";
import mongoose from "mongoose"

export async function POST(req) {
  const body = await req.json();
  mongoose.connect(process.env.MONGO_URL);
  const pass = body.password;
  if (!pass?.legth || pass.lenght < 5) {
    new Error('la contraseña debe tener como mínimo 5 caractered')
  }

  const notHashedPassword = pass;
  const salt = bcrypt.genSaltSync(10);
  body.password = bcrypt.hashSync(notHashedPassword, salt);

  

  const createdUser = await User.create(body)
  return Response.json(createdUser);
}

