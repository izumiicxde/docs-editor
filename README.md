# Next.js Docs Clone

A full-featured Google Docs-style collaborative document editing web application built with Next.js, TipTap, Clerk, Convex, and Liveblocks.

---

## Features

- **Real-Time Collaboration** – Multi-user editing with cursors, changes synced live using Liveblocks.
- **Authentication** – Secure user login and session handling with Clerk.
- **Rich Text Editing** – Built using TipTap editor with support for:

  - Bold, Italic, Underline, Strikethrough
  - Headings, Lists, Tables, Code Blocks
  - Images, Links, Tasks, Highlighting, Color, and Alignment

- **Document Management** – Create, rename, delete, and manage multiple documents per user.
- **Cloud Data Storage** – Data managed with Convex backend-as-a-service.
- **Keyboard Command Palette** – CMDK-based palette for efficient navigation and actions.
- **UI Components** – Built using Radix UI, Tailwind CSS, Lucide icons, and custom components.
- **User Avatars and Cursors** – Collaboration cursors with name tags and profile pictures.
- **OTP Input, Toasts, and Dialogs** – UX enhancements using `input-otp`, `sonner`, and `@radix-ui/*`.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19 (RC), Tailwind CSS, Radix UI
- **Editor**: TipTap 2 + Extensions
- **Auth**: Clerk
- **Collaboration**: Liveblocks
- **Backend**: Convex
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod
- **Utilities**: date-fns, clsx, class-variance-authority
- **Icons**: lucide-react, react-icons

---

## Getting Started

### 1. Clone the repository

`git clone https://github.com/izumiicxde/docs-editor.git docs-editor`
`cd docs-editor`

### 2. Install dependencies

`npm install`
or
`yarn`

### 3. Configure environment variables

Create a `.env.local` file at the root of the project with the following variables:

- **CLERK_SECRET_KEY** – your Clerk secret key
- **CLERK_PUBLISHABLE_KEY** – your Clerk frontend key
- **NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY** – your Liveblocks public API key
- **CONVEX_DEPLOYMENT** – your Convex deployment URL
- **NEXT_PUBLIC_CONVEX_URL** – same as above, for client

Adjust other environment variables based on your integrations.

### 4. Run the app

`npm run dev`
OR
`yarn dev`

## Scripts

- `dev` – start development server
- `build` – build production bundle
- `start` – start production server
- `lint` – run eslint

---

## License

MIT – feel free to use, modify, and distribute.
