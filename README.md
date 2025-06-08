# Essay Improvement Tool

A modern Angular application that helps users improve their essays by providing real-time text highlighting and replacement functionality. The application features a responsive design that works seamlessly across desktop, tablet, and mobile devices.

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
   ```bash
   git clone <repository-url>
   cd Medical-Word-App
   ```

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

## Browser Support

The application is tested and supported on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

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

## Known Issues

- PowerShell Execution Policy: If you encounter script execution issues, run:
  ```powershell
  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
  ```

## Future Enhancements

Planned features for future releases:
- [ ] Undo/Redo functionality
- [ ] Multiple text replacements at once
- [ ] Export/Import essay functionality
- [ ] Rich text formatting
- [ ] Keyboard shortcuts
- [ ] Dark mode support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Angular team for the excellent framework
- Tailwind CSS for the utility-first CSS framework
- The open-source community for inspiration and support
