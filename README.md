# 📝 Next.js 15 Todo App

A modern Todo application built with **Next.js 15**, **RTK Query**, and **TypeScript**, featuring **Server-Side Rendering**, **Incremental Static Regeneration**, and **real-time updates**.

---

## 🚀 Features

- ✅ Next.js 15 with App Router
- ⚡ RTK Query for efficient data fetching and caching
- 🔐 TypeScript for full type safety
- 🚀 Server-Side Rendering (SSR) for fast initial loads
- 🧠 Incremental Static Regeneration (ISR) with smart revalidation
- 🔗 Pagination with URL state management
- 🎨 Modern UI/UX with Tailwind CSS
- 📱 Responsive Design for all devices
- 🔄 Real-time updates with optimistic updates
- 🛠️ Error handling with retry mechanisms

---

## 🛠️ Tech Stack

| Category           | Tech                          |
|--------------------|-------------------------------|
| Framework          | Next.js 15                    |
| State Management   | Redux Toolkit + RTK Query     |
| Styling            | Tailwind CSS                  |
| Language           | TypeScript                    |
| API                | JSONPlaceholder (REST API)    |

---

## ⚙️ Getting Started

### 🔑 Prerequisites

- Node.js `v18+`
- npm or yarn

### 📦 Installation

📆 Installation

# Clone the repository
git clone <repository-url>
cd nextjs-todo-app

# Install dependencies
npm install

▶️ Run Development Server

npm run dev

Open http://localhost:3000 in your browser.

🏗️ Build for Production

npm run build
npm start

📝 API Endpoints

Using JSONPlaceholder API:

GET /todos?_start=0&_limit=10 – Fetch paginated todos

POST /todos – Create new todo

DELETE /todos/:id – Delete todo

📆 Installation

# Clone the repository
git clone <repository-url>
cd nextjs-todo-app

# Install dependencies
npm install

▶️ Run Development Server

npm run dev

Open http://localhost:3000 in your browser.

🏗️ Build for Production

npm run build
npm start

📝 API Endpoints

Using JSONPlaceholder API:

GET /todos?_start=0&_limit=10 – Fetch paginated todos

POST /todos – Create new todo

PATCH /todos/:id – Update todo

DELETE /todos/:id – Delete todo

🔍 Key Implementation Details

🔁 Server-Side Rendering (SSR)

Initial todo data is fetched server-side

SEO-friendly with meta tags & structured data

🧱 Incremental Static Regeneration (ISR)

Pages generated at build time

Data revalidates every hour (revalidate: 3600)

🔄 RTK Query Integration

Automatic caching and invalidation

Optimistic updates for UX boost

Background refetching (stale-while-revalidate)

Built-in retry logic

📄 Pagination Strategy

Server-side pagination using _start and _limit

Client-side navigation without full reloads

URL state management for bookmarkable views

🧷 Type Safety

Fully typed data structures

Strict API response typing

Full IntelliSense support
