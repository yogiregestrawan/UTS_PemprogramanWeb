# Ace Studios Landing Page

A modern, responsive landing page for Ace Studios built with Next.js, TypeScript, and Tailwind CSS. This project follows atomic design principles for better component organization and maintainability.

![Ace Studios Landing Page](https://placeholder.svg?height=300&width=600&text=Ace+Studios+Landing+Page)

## Features

- ✅ responsive design that works on all devices
- 🧩 Atomic design structure for better component organization
- 🔄 Reusable components with props for easy customization
- 📱 Mobile-friendly navigation
- ♿ Accessibility features built-in
- 🚀 Optimized for performance

## Tech Stack

- **Next.js**: React framework for production
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For utility-first styling
- **Lucide React**: For scalable vector icons

## Installation

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Setup

# 1. Clone the repository:

\`\`\`bash
git clone https://github.com/yourusername/ace-studios-landing.git
cd ace-studios-landing
\`\`\`

# 2. Install dependencies:

\`\`\`bash
npm install
or
yarn install
\`\`\`

# 3. Run the development server:

\`\`\`bash
npm run dev
or
yarn dev
\`\`\`

# 4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows atomic design principles:

\`\`\`
components/
├── atoms/         # Basic building blocks (Button, Logo, Badge, etc.)
├── molecules/     # Groups of atoms (HeaderNav, HeroContent, etc.)
├── organisms/     # Complex components (Header, Footer, ServicesSection, etc.)
├── templates/     # Page layouts (MainLayout)
└── pages/         # Specific page implementations
\`\`\`

## Usage

### Basic Usage

The project is structured to be easy to use and customize. The main page is defined in `app/page.tsx` which uses the `HomePage` component.

### Customizing Components

Most components accept props for customization. For example, the `UltimateServices` component can be customized:

\`\`\`tsx
<UltimateServices 
  title="Custom Title"
  description="Custom description text"
  services={[
    {
      title: "Custom Service",
      description: "Service description",
      icon: <YourIcon />
    },
    // More services...
  ]}
  ctaText="Custom CTA"
  ctaLink="/custom-link"
/>
\`\`\`

### Adding New Pages

To add new pages, create a new file in the `app` directory following Next.js App Router conventions.

## Git Workflow

### Commit Message Format

We follow a structured commit message format to maintain a clear and descriptive history:

\`\`\`
type(scope): concise description

[optional body]
[optional footer]
\`\`\`

#### Types:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Changes that don't affect code functionality (formatting, etc.)
- **refactor**: Code changes that neither fix a bug nor add a feature
- **perf**: Performance improvements
- **test**: Adding or correcting tests
- **chore**: Changes to build process, dependencies, etc.

#### Scope:

The scope should be the name of the component or module affected (e.g., header, footer, services).

#### Examples:

\`\`\`
feat(services): add new ultimate services component

- Create UltimateServiceItem component
- Implement UltimateServices container
- Add default props for easy usage
\`\`\`

\`\`\`
fix(header): resolve mobile menu display issue on small screens

The mobile menu was overflowing on devices smaller than 320px.
This fix adds proper padding and overflow handling.
\`\`\`

\`\`\`
refactor(components): convert to use props instead of hardcoded values

- Update UltimateServices to use props
- Add TypeScript interfaces for props
- Provide sensible defaults
\`\`\`

### Branching Strategy

1. `main` - Production-ready code
2. `develop` - Integration branch for features
3. Feature branches - Named as `feature/feature-name`
4. Bug fix branches - Named as `fix/bug-name`

Always create a new branch for each feature or bugfix, and submit a pull request to merge into `develop`.

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.ts`:

```ts
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      violet: {
        100: "#F4F1FF",
        // Add your custom colors
      },
    },
    // Add other customizations
  },
}
