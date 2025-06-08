# Essay Improvement Tool

## Features

### Core Functionality
- **Real-time Text Highlighting**: As you type in the flagged sentence box, matching text in the essay is instantly highlighted
- **Smart Text Replacement**: Replace all instances of flagged text with improved versions
- **Character Counter**: Track the length of your essay and flagged sentences
- **Responsive Design**: Optimized for all screen sizes and devices

### User Interface
- **Split-Screen Layout**: 
  - Essay editor on the left (desktop)
  - Flag & suggest panel on the right (desktop)
  - Stacked layout on mobile devices
- **Mobile Optimizations**:
  - Touch-friendly interface
  - Optimized input fields
  - Helpful mobile usage tips
  - Prevents unwanted zoom on iOS

### Advanced Features
- **Sticky Panels**: Panels remain accessible while scrolling on desktop
- **Visual Feedback**: 
  - Real-time highlighting
  - Character counters
  - Status indicators
  - Success/error states
- **Accessibility**: 
  - Proper contrast ratios
  - Clear visual feedback
  - Optimized touch targets

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.x or later)
- npm (v6.x or later)
- Angular CLI (v16.x or later)

## Installation

1. Clone the repository:

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:
   ```bash
   ng serve
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

## Development Notes

### Project Structure
```
src/
├── app/
│   ├── components/
│   │   ├── essay-editor/
│   │   │   ├── essay-editor.component.ts
│   │   │   ├── essay-editor.component.html
│   │   │   └── essay-editor.component.css
│   │   └── flag-suggest-panel/
│   │       ├── flag-suggest-panel.component.ts
│   │       └── flag-suggest-panel.component.html
│   ├── models/
│   │   └── text-replacement.model.ts
│   ├── services/
│   │   └── text-replacement.service.ts
│   └── app.ts
```

### Key Technologies
- Angular 16+
- Tailwind CSS
- TypeScript
- Jasmine/Karma for testing

### Testing
Run the test suite:
```bash
ng test
```

The project includes comprehensive unit tests for:
- Text replacement functionality
- Component interactions
- UI state management
- Edge cases handling

## Responsive Design

The application uses a mobile-first approach with three main breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Mobile Optimizations
- Stacked layout for better content flow
- Larger touch targets
- Optimized font sizes
- Special mobile usage tips
- Enhanced touch feedback

### Desktop Enhancements
- Split-screen layout
- Sticky panels
- Enhanced hover states
- Keyboard shortcuts (coming soon)

