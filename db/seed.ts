import { db, Contact } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Contact).values([
    {
      name: "Michale",
      lastName: "Jackson",
      email: "michael@jocksonsfive.com",
      phone: "unknown caller id",
      message: "The Girl Is Mine",
    },
  ]);
}
