import { Schema, model, Document } from "mongoose";

export interface IGame extends Document {
  tournament: string;
  players: string[];
  state: any;
  result: {
    winner: string;
    scores: { [playerId: string]: number };
  };
  startedAt: Date;
  finishedAt?: Date;
}

const gameSchema = new Schema<IGame>({
  tournament: { type: Schema.Types.ObjectId, ref: "Tournament" },
  players: [{ type: Schema.Types.ObjectId, ref: "User" }],
  state: { type: Schema.Types.Mixed },
  result: {
    winner: { type: Schema.Types.ObjectId, ref: "User" },
    scores: { type: Schema.Types.Mixed }
  },
  startedAt: { type: Date, default: Date.now },
  finishedAt: { type: Date }
});

export default model<IGame>("Game", gameSchema);
