import { Schema, model, Document } from "mongoose";

export interface ITournament extends Document {
  name: string;
  entryFee: number;
  prize: number;
  commission: number;
  players: string[];
  createdBy: string;
  status: "upcoming" | "ongoing" | "finished";
  winner?: string;
  format: "1v1" | "2v2" | "4p";
  isPrivate: boolean;
}

const tournamentSchema = new Schema<ITournament>({
  name: { type: String, required: true },
  entryFee: { type: Number, required: true },
  prize: { type: Number, required: true },
  commission: { type: Number, required: true },
  players: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["upcoming", "ongoing", "finished"], default: "upcoming" },
  winner: { type: Schema.Types.ObjectId, ref: "User" },
  format: { type: String, enum: ["1v1", "2v2", "4p"], default: "4p" },
  isPrivate: { type: Boolean, default: false }
}, { timestamps: true });

export default model<ITournament>("Tournament", tournamentSchema);
