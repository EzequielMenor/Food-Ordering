import {model, models, Schema} from "mongoose";

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: {
    type: String, 
    required: true, 
    validate: pass => {
      if (pass?.length || pass.lenght <5) {
        new Error('La contraseña debe tener como mínimo 5 caracteres');
        return false;
      }
    },
  },
}, {timestamps: true}); 

export const User = models?.User || model('User', UserSchema);
