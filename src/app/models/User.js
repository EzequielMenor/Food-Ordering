import bcrypt from 'bcrypt';
import {model, models, Schema} from "mongoose";

const UserSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {
    type: String, 
    required: true, 
    validate: pass => {
      if (!pass?.length || pass.lenght < 5) {
        new Error('La contraseña debe tener como mínimo 5 caracteres');
      }
    },
  },
}, {timestamps: true}); 

UserSchema.post('validate', function (user){
  const notHashedPassword = user.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(notHashedPassword, salt);
})


export const User = models?.User || model('User', UserSchema);
