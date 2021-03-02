# Upload and display images using Prisma

This example shows how to implement a basic image gallery using [Next.js](https://nextjs.org/), [Prisma Client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client) and [Cloudinary](https://cloudinary.com/). It uses a SQLite database file which you can find at [`./prisma/dev.db`](./prisma/dev.db).

## Getting started

### 1. Clone repository and install dependencies

Install npm dependencies:

```
git clone https://github.com/fgiuliani/prisma-upload-image prisma-upload-image
```

Switch into the newly created folder:

```
cd prisma-upload-image
```

Install npm dependencies:

```
npm install
```

### 2. Configure Environment Variables

Go to `.env.local`and configure the details related to your [Cloudinary](https://cloudinary.com/) account.

### 3. Start the app

```
npm run dev
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore it.
