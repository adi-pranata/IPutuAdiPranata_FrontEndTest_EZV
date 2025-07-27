Next.js 15 Todo App
Modern todo application built with Next.js 15, RTK Query, and TypeScript featuring server-side rendering, incremental static regeneration, and real-time updates.
🚀 Features

Next.js 15 with App Router
RTK Query for efficient data fetching and caching
TypeScript for full type safety
Server-Side Rendering (SSR) for fast initial loads
Incremental Static Regeneration (ISR) with smart revalidation
Pagination with URL state management
Modern UI/UX with Tailwind CSS
Responsive Design for all devices
Real-time Updates with optimistic updates
Error Handling with retry mechanisms

🛠️ Tech Stack

Framework: Next.js 15
State Management: Redux Toolkit + RTK Query
Styling: Tailwind CSS
Language: TypeScript
API: JSONPlaceholder REST API

🚀 Getting Started
Prerequisites

Node.js 18+
npm or yarn

Installation

Clone the repository:

git clone <repository-url>
cd nextjs-todo-app

Install dependencies:

npm install

Run the development server:

npm run dev

Open http://localhost:3000 in your browser

Build for Production
npm run build
npm start

📝 API Endpoints
The app uses JSONPlaceholder API:

GET /todos?_start=0&_limit=10 - Fetch paginated todos
POST /todos - Create new todo
PATCH /todos/:id - Update todo
DELETE /todos/:id - Delete todo

🎯 Key Implementation Details
Server-Side Rendering (SSR)

Initial todo data is fetched server-side for faster first paint
SEO-friendly with proper meta tags and structured data

Incremental Static Regeneration (ISR)

Pages are statically generated at build time
Data revalidates every hour (revalidate: 3600)
Combines static generation benefits with dynamic data

RTK Query Integration

Automatic caching and invalidation
Optimistic updates for better UX
Background refetching with stale-while-revalidate
Error handling with retry logic

Pagination Strategy

Server-side pagination using _start and _limit parameters
Client-side navigation without full page reloads
URL state management for bookmarkable pages

Type Safety

Comprehensive TypeScript types for all data structures
Strict type checking for API responses
IntelliSense support throughout the application

🎨 UI/UX Features

Responsive Design: Works on desktop, tablet, and mobile
Loading States: Skeleton loaders and spinners
Error Handling: User-friendly error messages with retry options
Smooth Animations: Hover effects and transitions
Accessibility: Proper ARIA labels and keyboard navigation
Modern Design: Clean, minimalist interface with Tailwind CSS

🔧 Configuration
Environment Variables
Create a .env.local file for custom configurations:
envNEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com
REVALIDATE_TIME=3600
Customization

Pagination: Modify itemsPerPage in TodoList.tsx
Revalidation: Change revalidate value in todos/page.tsx
Styling: Update Tailwind classes or modify globals.css
API: Replace JSONPlaceholder with your own API endpoints

📊 Performance Optimizations

Static Generation: ISR for optimal loading times
Code Splitting: Automatic code splitting with Next.js
Image Optimization: Next.js Image component (when needed)
Bundle Analysis: Built-in bundle analyzer
Caching: RTK Query automatic caching
Compression: Gzip compression enabled

🧪 Testing
bash# Type checking
npm run type-check

# Linting
npm run lint

# Build verification
npm run build
🤝 Contributing

Fork the repository
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
🙏 Acknowledgments

Next.js for the amazing framework
Redux Toolkit for state management
Tailwind CSS for styling
JSONPlaceholder for the free API