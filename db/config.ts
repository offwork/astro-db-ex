import { column, defineDb, defineTable } from 'astro:db';

const Contact = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    lastName: column.text(),
    email: column.text(),
    phone: column.text(),
    message: column.text({ multiline: true })
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: { Contact }
});
