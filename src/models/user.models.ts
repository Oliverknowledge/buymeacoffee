import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    
    username: {
        type: String,
        unique: true,
        required: true,
      },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        
    },
    about: {
        type: String,

    },
    link: {
        type: String,
    },
})
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;