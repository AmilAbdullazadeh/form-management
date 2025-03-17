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

### Project Structure Philosophy

Our project structure follows a feature-based architecture with clear separation of concerns:

1. **Feature-Based Organization**: 
   - Each feature (like FormManagement) is isolated with its own UI, API, and hooks
   - Promotes code ownership and clear boundaries
   - Makes navigation intuitive for new developers
   - Simplifies feature addition and removal

2. **Shared Resources**:
   - Common components, hooks, and utilities in `/shared` directory
   - Prevents code duplication and ensures consistency
   - Improves maintainability and promotes code reuse

3. **Clear Module Separation**:
   - UI components are separate from business logic
   - API calls are isolated in dedicated modules
   - Hooks encapsulate complex behavior

Advantages of this structure:
- **Scalability**: Easy to add new features without affecting existing code
- **Maintainability**: Related code stays together, improving understanding
- **Testability**: Clear boundaries make unit testing simpler
- **Collaboration**: Multiple developers can work on different features simultaneously

## Import/Export Pattern and Type Organization

### Import Strategy

We follow consistent import patterns for better readability and organization:

```typescript
// 1. External dependencies first
import React from 'react';
import { useDispatch } from 'react-redux';

// 2. Local styles
import styles from './Component.module.scss';

// 3. Type imports
import { ComponentProps } from './Component.types';

// 4. Related components/utilities
import { SomeUtil } from '../../utils/someUtil';
```

Advantages:
- **Consistent organization**: Makes code review easier
- **Clear dependency hierarchy**: External vs. internal dependencies
- **Improved readability**: Groups related imports together

### Export Pattern

Components and types follow explicit named exports:

```typescript
// Component export
export const Button: React.FC<ButtonProps> = ({ ... }) => { ... };

// Type export
export type ButtonProps = { ... };
export enum ButtonVariant { ... }
```

Advantages:
- **Explicit imports**: Prevents accidental imports of unwanted elements
- **Tree-shakable**: Bundlers can eliminate unused exports
- **Better IDE support**: Autocompletion works more effectively

### Type Organization

We organize types in dedicated `.types.ts` files adjacent to their components:

```
Button/
├── Button.tsx           # Component implementation
├── Button.types.ts      # Component types
└── Button.module.scss   # Component styles
```

For shared types, we group them by domain in the `types` directory:
```
types/
├── base.ts      # Basic shared types
├── icon.ts      # Icon-related types
├── status.ts    # Status-related types
├── variant.ts   # UI variant types
```

This approach:
- **Co-locates** types with their implementation
- **Separates concerns** between implementation and type definitions
- **Improves discoverability** by keeping related files together

## Custom Components and Utilities

### Why Custom Components?

We built custom components instead of using component libraries for several reasons:

1. **Full Control**: Complete ownership of component behavior and styling
2. **Performance**: Minimal bundle size with only what we need
3. **Consistency**: Tailored specifically to our design system
4. **Learning**: Building components from scratch improves team knowledge
5. **No External Dependencies**: Reduces vulnerability to third-party issues

### Custom Hooks

Custom hooks were created to encapsulate and reuse complex logic across the application:

- **useForm**: Handles form state, validation, and submission with TypeScript support
- **useModal**: A versatile hook for managing modal dialog state with support for both simple open/close functionality and more complex data management
- **useDragAndDrop**: Implements drag and drop functionality for UI elements

### UI Components

Custom UI components provide consistency and reusability:

- **Shared components**: Reusable UI elements like buttons, cards, inputs, modals, etc.
- **Form components**: Specialized components for form building

### Utilities and Helpers

Utility functions solve common problems and reduce code duplication:

- **validation.ts**: Form validation logic and rules
- **classNames.ts**: Utility function for managing class names

### Library Alternatives

If using external libraries instead of custom components, these would be good choices:

#### Component Libraries
- **Shadcn UI**: Modern, accessible components with minimal bundle size

#### Form Management
- **React Hook Form**: Performance-focused form management
- **Zod**: TypeScript-first schema validation

#### Styling Alternatives
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

The decision between custom components vs. libraries should consider:
- Team expertise and learning curve
- Project timeline and resources
- Long-term maintenance requirements
- Bundle size constraints
- Design system complexity

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