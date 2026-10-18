# README.md

# GitHub Timeline

GitHub Timeline is a web application that visualizes a GitHub user's public repositories in a timeline format, displaying repository names, creation dates, and descriptions. It also provides a summary of the number of repositories created each year.

## Features

- Enter a GitHub username to generate a timeline of public repositories.
- Click the 'Generate' button to fetch and display the timeline.
- View repository names, creation dates, and descriptions.
- Summary of the number of repositories by year.
- Warning message if the GitHub username is invalid.

## Technologies Used

- Next.js
- React
- Axios

## Deployment

The application is automatically deployed to GitHub Pages using GitHub Actions upon each push to the `main` branch.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/github-timeline.git
   ```

2. Navigate to the project directory:

   ```bash
   cd github-timeline
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Configuration for GitHub Pages

The site is exported as static HTML via `output: "export"` in `next.config.ts`, so `next build` writes the deployable site to the `out` directory.

The `basePath` and `assetPrefix` are read from the `NEXT_PUBLIC_BASE_PATH` environment variable. The deployment workflow sets this automatically from the `actions/configure-pages` output, so no manual edit is required. For local builds against a project page, set it explicitly, e.g.:

```bash
NEXT_PUBLIC_BASE_PATH=/your-repo-name npm run build
```

## License

This project is licensed under the MIT License.

## Acknowledgements

Powerd by o1-mini

prompt based on app-ideas:

https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/GitHub-Timeline-App.md
