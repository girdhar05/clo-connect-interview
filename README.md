# CLO - CONNECT Store

This project is a React and TypeScript application that allows users to browse, search, filter, and sort products from the CLO CONNECT store. The application features infinite scrolling, responsive design, and various filtering options.

## Features

- **Product Browsing**: View products in a responsive grid layout
- **Lazy Loading**: Products load progressively as you scroll down
- **Search Functionality**: Find products by title or creator name
- **Filtering Options**:
  - Filter by pricing options (Paid, Free, View Only)
  - Price range slider for paid items
- **Sorting Options**:
  - Alphabetically by item name
  - Price: Low to High
  - Price: High to Low
- **URL Parameter Persistence**: Search terms, filters, and price ranges are preserved in the URL
- **Responsive Design**: Works on mobile, tablet, and desktop devices

## Technologies Used

- **React 19**: UI library
- **TypeScript**: Static typing
- **Redux Toolkit**: State management
- **React-JSS**: Styling solution
- **Vite**: Build tool and development server
- **Intersection Observer API**: For infinite scrolling implementation

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/clo-interview.git
cd clo-interview
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── assets/              # Static assets like images
├── components/          # React components
│   ├── contentbox/      # Product grid container
│   ├── filterbox/       # Filtering options
│   ├── header/          # Page header
│   ├── maincontent/     # Main page layout
│   ├── product/         # Individual product card
│   ├── searchbox/       # Search input
│   ├── skeleton/        # Loading placeholders
│   ├── slider/          # Price range slider
│   └── sortbox/         # Sorting options
├── constants/           # Application constants
├── hooks/               # Custom React hooks
│   ├── useData.ts       # Data fetching hook
│   ├── useSort.ts       # Sorting functionality
│   └── useUrlParams.ts  # URL parameter management
├── interface/           # TypeScript interfaces
├── store/               # Redux store configuration
│   └── product/         # Product state management
└── utils/               # Utility functions
```