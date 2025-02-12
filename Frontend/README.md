
# Code Reviewer

A full-stack code review application that allows users to paste code, get an AI-powered review, and display the results in Markdown format. The project consists of a React frontend and an Express backend.

## Features

- **Code Editor**: Paste your code for review using a simple code editor with syntax highlighting powered by `react-simple-code-editor` and `prismjs`.
- **AI-Powered Code Review**: The backend processes the code via an AI service and returns detailed feedback.
- **Markdown Rendering**: Results are rendered in Markdown using `react-markdown` for a clean, formatted display.
- **Loading Indicator**: A spinner is displayed while the review is in progress.
- **Context Management**: State is managed across components with the React Context API.

## Table of Contents

- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [License](#license)


### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)


## Project Structure

```plaintext
.
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── Code/Code.jsx-Code.module.scss      # Code editor component
│   │   │   ├── Result/Result.jsx-Result.module.scss     # Markdown result display component with loading spinner
│   │   ├── hooks
│   │   │   └── useContext.js    # React Context for shared state (code, result, loading)
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── package.json
│   └── ...
├── backend
│   ├── src
│   │   ├── routes
│   │   │   └── ai.controller.js # Controller handling the AI code review endpoint
                ai,routes.js # Routing of the backend
            services-ai.service.js
        ----app.js
│   │   └── server.js            # Express server setup with JSON body parser
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



## License

This project is licensed under the [MIT License](LICENSE).

```

---

### How to Use This README

1. **Create a `README.md` file:** Copy and paste the content above into a file named `README.md` in the root of your repository.
2. **Customize as Needed:** Update sections such as prerequisites, installation commands, project structure, or any URLs to match your project details.
3. **Add a License File:** If you mention a license (like MIT), include a `LICENSE` file in your repository.

This README should help users understand your project. Enjoy coding!