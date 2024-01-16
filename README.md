# Full Stack E-Commerce + Dashboard & CMS using React & Next.js (Admin)

The repository for my Full Stack E-Commerce website, I created this project following this [course](https://www.youtube.com/watch?v=5miHyP6lExg), but with my own little tweaks such as responsive Admin page.

Features:

* Admin dashboard is going to serve as both CMS, Admin and API
* You will be able to control mulitple vendors / stores through this single CMS! (For example you can have a "Shoe store" and a "Laptop store" and a "Suit store", and our CMS will generate API routes for all of those individually)
* You will be able to create, update and delete categories
* You will be able to create, update and delete products
* You will be able to upload multiple images for products, and change them whenever you want
* You will be able to create, update and delete filters such as "Color" and "Size", and then match them in the "Product" creation form
* You will be able to create, update and delete "Billboards" which are these big texts on top of the page. You will be able to attach them to a single category, or use them standalone (Our Admin generates API for all of those cases)
* You will be able to Search through all categories, products, sizes, colors, billboards with included pagination
* You will be able to control which products are "featured" so they show on the homepage
* You will be able to see your orders, sales, etc
* You will be able to see graphs of your revenue etc
* Clerk Authentication
* Order creation
* Stripe checkout
* Stripe webhooks
* MySQL + Prisma + PlanetScale

## Prerequisites

**Node version 14.x**

## Cloning the repository
```
git clone https://github.com/aoyo-jun/e-commerce-admin.git
```
## Install packages
```
npm i
```
## Setup .env file
Here you will need to insert your:
* [Clerk](https://clerk.com/) Keys and URLs
* Database URL (I used [PlanetScale](https://planetscale.com/), but you can use the database of your choice)
* [Cloudinary](https://cloudinary.com/) Cloud Name
* [Stripe](https://stripe.com/) API and Webhook Secret
* Your frontend store URL (ex: localhost:3001)

Just follow the corresponding documentation.
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

FRONTEND_STORE_URL=
```
## Setup Prisma
Add MySQL Database (I used PlanetScale)
```
npx prisma generate
npx prisma db push
```
## Start the app
```
npm run dev
```
###### This README was partially copied from the original [next13-ecommerce-admin](https://github.com/AntonioErdeljac/next13-ecommerce-admin) repository.

___

Again, this amazing project is a [course](https://www.youtube.com/watch?v=5miHyP6lExg) by [Code with Antonio](https://www.youtube.com/@codewithantonio)!

Another project following this awesome developer (aka Antonio), thank you so much for the learning experience 🙏
