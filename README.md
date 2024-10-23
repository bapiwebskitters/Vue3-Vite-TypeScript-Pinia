# Project Name

Demo Vue3 Project setup with  Vite,TypeScript,Pinia etc.

## Project Overview

This is a Vue 3 application built with TypeScript, utilizing Vite as a build tool, and Pinia for state management. This project supports Server-Side Rendering (SSR) to enhance performance and SEO capabilities.

### Project Structure

├── public
├── src
│   ├── assets            # Static assets
│   │     ├── styles
│   │     │     ├── _mixins.scss
│   │     │     ├──_reset.scss
│   │     │     ├── _variables.scss
│   │     │     ├── main.scss
│   │     ├── vue.svg
│   ├── components        # Vue components
│   ├── layouts           # Layouts for pages
│   ├── pages             # Page components for routing
│   ├── router            # Vue Router configuration
│   ├── store             # Pinia store modules
│   ├── services          # API call services
│   │     ├── api         # API call services
│   │     │     ├── auth.api.ts # Auth APIs call
│   │     ├── interceptors      # Base API configuration
│   │     │     ├── axiosInterceptor.ts  # Auth APIs call
│   │     └── auth.service.ts # Example service
│   ├── utils             # Utility functions
│   │     ├── formatters.ts # Example formatter
│   │     └── validators.ts  # Example validator
│   ├── helpers           # Helper functions
│   │     └── arrayHelpers.ts # Example array helper
│   ├── interfaces        # TypeScript interfaces
│   │     ├── user.ts     # User interface
│   │     └── product.ts  # Product interface
│   ├── types             # TypeScript types
│   │     ├── apiTypes.ts # API response types
│   │     └── storeTypes.ts # Store types
│   ├── App.vue           # Main App component
│   ├── main.ts           # Client entry point
│   └── entry-server.ts   # Server entry point
├── index.html            # HTML entry
├── server.js
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── yarn.lock

### Stack

- **Vue 3**: The progressive JavaScript framework for building user interfaces.
- **TypeScript**: A superset of JavaScript that provides static typing, enhancing development with type safety.
- **Vite**: A fast build tool that provides an optimal development experience.
- **Pinia**: A state management library for Vue, providing a simple and intuitive API.
- **Express**: A minimal and flexible Node.js web application framework used for server-side operations.
- **SCSS**: A preprocessor scripting language that is interpreted or compiled into CSS.

### Getting Started

#### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [Yarn](https://yarnpkg.com/) (for package management)

#### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd miracles
