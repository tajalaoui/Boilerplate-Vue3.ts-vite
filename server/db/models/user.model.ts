import mongoose, { Schema } from "mongoose"
import bcrypt from "bcrypt"
import { IUserDoc } from "../interfaces/user/IUser"

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

userSchema.index({ email: 1 })

// userSchema.virtual("fullName").get(function (this: IUserDoc) {
//   return `${this.firstName} ${this.lastName}`
// })

// When the user registers
userSchema.pre("save", async function (this: IUserDoc, next) {
  // only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) return next()

  // Random additional data
  const salt = await bcrypt.genSalt(10)

  const hash = await bcrypt.hashSync(this.password, salt)

  // Replace the password with the hash
  this.password = hash

  return next()
})

// Compare a candidate password with the user's password
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  // So we don't have to pass this into the interface method
  const user = this as IUserDoc

  return bcrypt.compare(candidatePassword, user.password).catch((e) => false)
}

export default mongoose.model<IUserDoc>("User", userSchema)
