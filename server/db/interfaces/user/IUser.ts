import { Document } from "mongoose"

interface IUser {
  email: string
  username: string
  password: string
}

interface IUserDoc extends IUser, Document {
  createdAt: Date
  updatedAt: Date
  comparePassword(candidatePassword: string): Promise<boolean>
}

export { IUser, IUserDoc }
