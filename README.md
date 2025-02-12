Below is a concise README with added details about using the Gemini API and an overview of the code reviewer:

```markdown
# Code Reviewer

A full-stack code review application that allows users to paste code, receive an AI-powered review, and view detailed feedback rendered in Markdown. The project consists of a React frontend and an Express backend that leverages the Gemini API for advanced code analysis.

## Features

- **Code Editor:** Paste or write code using a simple editor with syntax highlighting.
- **AI-Powered Code Review:** The backend uses the Gemini API to analyze your code and return detailed feedback and suggestions.
- **Markdown Rendering:** Reviews are rendered in Markdown with `react-markdown` for a clean, formatted display.
- **Loading Indicator:** A spinner shows while the review is processing.
- **Context Management:** React's Context API is used to share state (code, review results, and loading status) across components.

## Table of Contents

- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [License](#license)

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Usage

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/code-reviewer.git
   cd code-reviewer
   ```



## Project Structure

```plaintext
.
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── Code
│   │   │   │   ├── Code.jsx            # Code editor component
│   │   │   │   └── Code.module.scss
│   │   │   └── Result
│   │   │       ├── Result.jsx          # Markdown result display component with loading spinner
│   │   │       └── Result.module.scss
│   │   ├── hooks
│   │   │   └── useContext.js           # React Context for shared state (code, result, loading)
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── package.json
│   └── ...
├── backend
│   ├── src
│   │   ├── routes
│   │   │   ├── ai.controller.js        # Controller handling the AI code review endpoint
│   │   │   └── ai.routes.js            # Routing for AI review endpoints
│   │   ├── services
│   │   │   └── ai.service.js           # Service integrating with the Gemini API
│   │   ├── app.js                      # Main Express application setup
│   │   └── server.js                   # Express server entry point with JSON body parser
│   ├── package.json
│   └── ...
└── README.md
```

## Technologies

- **Frontend:**
  - [React](https://reactjs.org/)
  - [react-simple-code-editor](https://github.com/satya164/react-simple-code-editor)
  - [prismjs](https://prismjs.com/)
  - [react-markdown](https://github.com/remarkjs/react-markdown)
- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [Axios](https://axios-http.com/)
  - **Gemini API:** Used for AI-powered code analysis and feedback.

## License

This project is licensed under the [MIT License](LICENSE).
```

---
This README provides a clear overview of the project, its features, and how to get started. Enjoy building your AI Code Reviewer!
