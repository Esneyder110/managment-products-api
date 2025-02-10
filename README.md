# Product Management

Backend for Pillar Labs Technical Assessment

# Table of Contents

- [Product Management](#product-management)
- [Table of Contents](#table-of-contents)
- [Stack and Dependencies](#stack-and-dependencies)
- [How to Run App](#how-to-run-app)
- [Next Steps](#next-steps)
- [Tools Used](#tools-used)

# Stack and Dependencies

The backend stack includes:

- **[Express.js](https://expressjs.com)**: Web app framework for Node.js
- **[Prisma](https://www.prisma.io)**: Next-gen Node.js/TypeScript ORM
- **[MongoDB](https://www.mongodb.com)**: Scalable NoSQL document database.
- **[Zod](https://zod.dev)**: TypeScript schema declaration/validation.

## File Structure

Balances modularity and verbosity.
API versioned at `{host}/api/v1/`.

## How to Run App

Requires Node v20.

### Local dev

1.  `npm install`
2.  `npm install --global vercel@latest`
3.  `vercel dev`

`app.listen` fails on Vercel deployment.

## Next Steps

- Implement pagination, sorting, and advanced filters.
- Add testing.
- Implement delete endpoint.
- Customize error messages.
- Add authentication.

## Tools Used

- MongoDB Compass
- Mongo Atlas (database)
- Vercel (hosting)
- Codeium (autocomplete AI)
