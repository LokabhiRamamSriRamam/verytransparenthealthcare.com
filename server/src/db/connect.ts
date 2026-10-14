import mongoose from "mongoose";

export async function connectDb(uri: string): Promise<void> {
  mongoose.connection.on("connected", () => console.log(`[db] connected to ${mongoose.connection.name}`));
  mongoose.connection.on("disconnected", () => console.warn("[db] disconnected"));
  mongoose.connection.on("error", (err) => console.error("[db] error:", err.message));

  await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
}

export async function disconnectDb(): Promise<void> {
  await mongoose.disconnect();
}
