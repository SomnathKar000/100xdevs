# Prisma Setup & Migration Guide

## 1. Initialize Prisma in Your Project

Run the following command to initialize Prisma:

```bash
npx prisma init
```

This will create a `prisma/` directory with a `schema.prisma` file and set up your environment.

## 2. Run Your First Migration

After defining your models in `schema.prisma`, run this command to create and apply the initial database migration:

```bash
npx prisma migrate dev --name initial-table-added
```

> 💡 Tip: Use a descriptive name for each migration to keep track of your database changes.

## 3. Generate the Prisma Client

If you ever need to manually regenerate the Prisma Client (after editing `schema.prisma`), run:

```bash
npx prisma generate
```

This ensures that your local Prisma Client reflects your latest schema changes.

## 4. View the Database in Prisma Studio

To open Prisma Studio (a visual editor for your database) in your browser, use:

```bash
npx prisma studio
```
