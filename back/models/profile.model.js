import mongoose from "mongoose";
const ProfileSchema = new mongoose.Schema(
  {
    birthday: {
      type: Date,
      default: new Date(),
    },
    avatar: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);
const Profile = mongoose.model("Profile", ProfileSchema);
export default Profile;
