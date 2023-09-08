import { InferModel, relations } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  primaryKey,
  uuid,
  AnyPgColumn,
  uniqueIndex,
  boolean,
  alias,
} from "drizzle-orm/pg-core";

export const profiles = pgTable("profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  username: text("username").notNull(),
  fullName: text("full_name")
});

export type Profile = InferModel<typeof profiles>;

export const profilesRelations = relations(profiles, ({ many }) => ({

}));