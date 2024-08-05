import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import Profile from "../models/profile.model.js";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(422).json({ message: "User already exists" });
    }
    //generate new password
    const salt = await bcrypt.genSalt(5);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newProfile = new Profile();

    const savedProfile = await newProfile.save();

    //save user and hash password
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      matriculate: req.body.matriculate,
      email: req.body.email,
      role: req.body.role,
      password: hashPassword,
      profile: savedProfile._id,
    });
    const savedUser = await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", savedUser: savedUser });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      matriculate: req.body.matriculate,
    });
    if (!user)
      return res.status(404).json({
        message: "User not found",
      });
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid)
      return res.status(401).json({
        message: "wrong password or email",
      });
    const accessToken = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        matriculate: user.matriculate,
        firstName: user.firstName,
        lastName: user.lastName,
        isAdmin: user.isAdmin,
      },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "3 days",
      }
    );
    user.token = accessToken;
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export const authCheck = async (req, res) => {
  try {
    const user = await User.findById(req.verifiedUser._id)
      //.populate("address")
      .populate({ path: "profile", select: "avatar birthday " });
    if (!user) {
      return res.status(404).json({ message: "not found User" });
    } else {
      return res.status(200).json(user);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};
