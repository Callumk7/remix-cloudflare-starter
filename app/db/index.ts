import * as schema from "./schema";
import { drizzle } from "drizzle-orm/d1";

// Use this for d1 connections
export const createDrizzle = (client: D1Database) => {
	return drizzle(client, { schema });
};
