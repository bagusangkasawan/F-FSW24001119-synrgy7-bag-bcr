import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("cars").del();

    // Inserts seed entries
    await knex("cars").insert([
        {
            name: "Toyota Innova",
            harga: 500_000_000,
            foto: "https://res.cloudinary.com/dcyojno0c/image/upload/v1716047808/Challenge_5/ukb5l6zqrt5c6rlvdjw4.jpg",
            start_rent: new Date(),
            finish_rent: new Date(),
            created_at: new Date(),
            updated_at: new Date(),
        },
    ]);
}
