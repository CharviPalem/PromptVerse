
# SaaS AI Platform

This is a **Next.js** project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

##  **Tech Stack**
- **Frontend:** Next.js 15 (App Router), Tailwind CSS  
- **Database:** Prisma ORM with MySQL  
- **Authentication:** Clerk Auth  
- **Backend:** Node.js (to be added later)  
- **AI Tools:** Image, Music, Video, and Code generation models  

##  **Getting Started**

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

##  **Configuration**
1. **Clerk Auth Setup:**  
   - Create a Clerk account at [Clerk](https://clerk.dev).  
   - Add your **Clerk API keys** to the `.env.local` file:  
   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your-frontend-api-key>
   CLERK_SECRET_KEY=<your-secret-key>
   ```

2. **Prisma & MySQL Setup:**  
   - Update the `.env` file with your database connection string:  
   ```env
   DATABASE_URL="mysql://<user>:<password>@localhost:3306/<db_name>"
   ```

   - Run Prisma migration:  
   ```bash
   npx prisma migrate dev --name init
   ```

##  **Learn More**
To learn more about the technologies used, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) – Learn about Next.js features and API.
- [Tailwind CSS](https://tailwindcss.com/docs) – Styling framework documentation.
- [Clerk Auth](https://clerk.dev/docs) – Authentication documentation.
- [Prisma](https://www.prisma.io/docs) – ORM setup and usage.
- [MySQL](https://dev.mysql.com/doc) – Database documentation.

##  **Deployment**
The easiest way to deploy your Next.js app is by using [Vercel](https://vercel.com) – the creators of Next.js.

For production deployment:
```bash
vercel deploy
```

---