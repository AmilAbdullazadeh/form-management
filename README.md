# Form Management System

A modern web application for form management built with Next.js, TypeScript, Redux Toolkit, and SCSS.

## Features

- Form management and tracking
- Responsive design for all devices
- Type-safe development with TypeScript
- State management with Redux Toolkit and RTK Query
- Clean and maintainable architecture
- Written in SCSS
- Custom hooks for form management
- Readable, simple, maintainable code and structure

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: Type-safe JavaScript
- **Redux Toolkit**: State management with RTK Query for API calls
- **SCSS**: CSS preprocessor for styling
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **Commitlint**: Commit message linting

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd user-management
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   
   Create a `.env` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_API_URL=your_api_url
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm run start`: Start the production server
- `npm run lint`: Run ESLint to check code quality
- `npm run format`: Format code with Prettier
- `npm run test`: Run tests
- `npm run test:watch`: Run tests in watch mode
- `npm run test:coverage`: Run tests with coverage report

## Project Structure

```
user-management/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── forms/        # Form management pages
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── features/         # Feature modules
│   │   └── FormManagement/ # Form management feature
│   ├── shared/           # Shared components and utilities
│   ├── resources/        # Static resources and assets
│   └── middleware.ts     # Next.js middleware
├── public/               # Static files
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
├── commitlint.config.js  # Commitlint configuration
├── next.config.js        # Next.js configuration
└── tsconfig.json         # TypeScript configuration
```

## Form Management

The application provides a comprehensive form management system:

1. **Create Forms**: Design custom forms with various field types
2. **Edit Forms**: Modify existing forms as needed
3. **Track Submissions**: Monitor and analyze form submissions
4. **Form Management**: Manage form access and permissions

## State Management

Redux Toolkit is used for state management with the following structure:

- **Slices**: Feature-based state slices
- **RTK Query**: API integration for data fetching
- **Middleware**: Custom middleware for logging and analytics

## Styling

The application uses SCSS for styling with:

- Modular CSS approach
- Responsive design principles
- Theme customization
- Accessibility compliance

## Commit Message Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Changes to the build process or auxiliary tools