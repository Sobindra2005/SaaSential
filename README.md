# SaaSential - Frontend

A modern SaaS platform for creating and managing web projects with template and AI-driven design options.

## Features

- Project dashboard with visual project cards
- Project creation wizard
- Template-based project creation
- AI-driven design options
- Visual editor for customizing projects

## Tech Stack

- **Framework**: Next.js (App Router)
- **UI Library**: React
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **State Management**: React Hooks

## Project Structure

```
src/
├── app/                 # all routes 
├── components/
│   ├── Common/          # Shared utilities like notifications
│   ├── Layout/          # Layout components including dashboard header
│   ├── ui/              # UI components like cards
│   └── forms/           # Form components including project wizard
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sobindra2005/SaaSential.git
   cd saasential
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

