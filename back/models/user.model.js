import mongoose from "mongoose";
import mongooseToSwagger from "mongoose-to-swagger";
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    matriculate: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["RH", "manager", "salaried"],
      default: "salaried",
    },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
    token: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", UserSchema);
const swaggerUserSchema = mongooseToSwagger(User);

/**
 * @swagger
 * tags:
 *   - name: User
 *     description: Operations related to users

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           minLength: 5
 *           example: "Themri"
 *         lastName:
 *           type: string
 *           minLength: 5
 *           example: "montassar"
 *         email:
 *           type: string
 *           format: email
 *           example: "montassarTH@RH.com"
 *         password:
 *           type: string
 *           minLength: 6
 *           maxLength: 20
 *           example: "700532"
 *         role:
 *           type: string
 *           enum: ["RH", "manager", "salaried"]
 *           description: The role of the user.
 *         matriculate:
 *            type: "string"
 *            example: "700532"
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - password
 *         - "matriculate"
 *
 *
*/
export default User;
