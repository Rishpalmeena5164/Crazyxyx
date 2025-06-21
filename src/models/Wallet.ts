import { Schema, model, Document } from "mongoose";

export interface IWallet extends Document {
  user: string;
  balance: number;
  transactions: {
    amount: number;
    type: "deposit" | "withdraw" | "entry" | "prize";
    date: Date;
    details?: string;
  }[];
}

const walletSchema = new Schema<IWallet>({
  user: { type: Schema.Types.ObjectId, ref: "User", unique: true },
  balance: { type: Number, default: 0 },
  transactions: [{
    amount: Number,
    type: { type: String, enum: ["deposit", "withdraw", "entry", "prize"] },
    date: { type: Date, default: Date.now },
    details: String
  }]
});

export default model<IWallet>("Wallet", walletSchema);
