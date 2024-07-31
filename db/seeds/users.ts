import { Knex } from 'knex';
import bcrypt from 'bcrypt';

const saltRounds = 10;

export async function seed(knex: Knex): Promise<void> {
  // Hapus data tabel jika ada
  await knex('users').del();

  // Hash password
  const hashedPassword = await bcrypt.hash('12345', saltRounds);

  // Insert data
  await knex('users').insert([
    {
      id: 1,
      nama: 'Bagus',
      email: 'admin@gmail.com',
      password: hashedPassword,
      role: 'superadmin',
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
}
