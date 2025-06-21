import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  phone: string;
  email?: string;
  password?: string;
  wallet: number;
  otp?: string;
  otpExpiresAt?: Date;
  referralCode: string;
  referredBy?: string;
  isAdmin: boolean;
  kycVerified: boolean;
  socialId?: string;
  stats?: {
    gamesPlayed: number;
    gamesWon: number;
    tournamentsJoined: number;
    tournamentsWon: number;
  }
}

const userSchema = new Schema<IUser>({
  phone: { type: String, unique: true, sparse: true },
  email: { type: String, unique: true, sparse: true },
  password: { type: String },
  wallet: { type: Number, default: 0 },
  otp: { type: String },
  otpExpiresAt: { type: Date },
  referralCode: { type: String, unique: true },
  referredBy: { type: String },
  isAdmin: { type: Boolean, default: false },
  kycVerified: { type: Boolean, default: false },
  socialId: { type: String },
  stats: {
    gamesPlayed: { type: Number, default: 0 },
    gamesWon: { type: Number, default: 0 },
    tournamentsJoined: { type: Number, default: 0 },
    tournamentsWon: { type: Number, default: 0 }
  }
}, { timestamps: true });

export default model<IUser>("User", userSchema);
