<!DOCTYPE html>
<html lang="en">
<head>
<body>
  <h1>Next.js Full-Stack Blog</h1>
  <p>Welcome to the Next.js Full-Stack Blog! This project is a blog application built using Next.js. Follow the instructions below to set up and run the project.</p>
  
  <h2>Features</h2>
  <ul>
    <li>Create, read, update, and delete blog posts</li>
    <li>Server-side rendering for better SEO and initial load performance</li>
    <li>Client-side rendering for dynamic user interactions</li>
    <li>Dockerized setup for easy database deployment</li>
  </ul>
  
  <h2>Prerequisites</h2>
  <p>Before you begin, ensure you have the following software installed on your machine:</p>
  <ul>
    <li><a href="https://nodejs.org/">Node.js</a> (version 14.x or later)</li>
    <li><a href="https://www.npmjs.com/">npm</a> (comes with Node.js) or <a href="https://yarnpkg.com/">Yarn</a></li>
    <li><a href="https://www.docker.com/">Docker</a> (for containerized environment)</li>
    <li><a href="https://docs.docker.com/compose/">Docker Compose</a></li>
  </ul>
  
  <h2>Getting Started</h2>
  <h3>Installation</h3>
  <ol>
    <li><strong>Clone the repository:</strong>
      <pre><code>clone the repo to your local device</code></pre>
    </li>
    <li><strong>Install dependencies:</strong>
      <p>Using npm:</p>
      <pre><code>npm install</code></pre>
      <p>Using Yarn:</p>
      <pre><code>yarn install</code></pre>
    </li>
  </ol>
  
  <h3>Configuration</h3>
  <ol>
    <li><strong>Environment Variables:</strong>
      <p>Create a <code>.env</code> file in the thinkblog directory of the project and add the following environment variables:</p>
      <pre><code>
      GOOGLE_CLIENT_ID=""
      GOOGLE_CLIENT_SECRET=""
      POSTGRES_PASSWORD=""
      POSTGRES_USER=""
      POSTGRES_DB=""
      DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/${POSTGRES_DB}?schema=public"</code></pre
    </li>
    <li><strong>Docker Compose:</strong>
      <p>Ensure you have Docker and Docker Compose installed. Use the provided <code>docker-compose.yml</code> file to set up the database and other services.</p>
      <p>Start the services using Docker Compose:</p>
      <pre><code>docker compose up</code></pre>
      <p>This command will start the database and any other services defined in the <code>docker-compose.yml</code> file.</p>
    </li>
  </ol>
  
  <h3>Running the Application</h3>
  <ol>
    <li><strong>Development:</strong>
      <p>Start the development server:</p>
      <p>Using npm:</p>
      <pre><code>npm run dev</code></pre>
      <p>Using Yarn:</p>
      <pre><code>yarn dev</code></pre>
      <p>Open your browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a> to see the application in action.</p>
    </li>
    <li><strong>Production:</strong>
      <p>Build the application for production:</p>
      <p>Using npm:</p>
      <pre><code>npm run build
npm start</code></pre>
      <p>Using Yarn:</p>
      <pre><code>yarn build
yarn start</code></pre>
      <p>This will start the application in production mode. Make sure to adjust environment variables for production as needed.</p>
    </li>
  </ol>
</head>
<body>
  <h1>Next.js Full-Stack Blog</h1>
  <p>Welcome to the Next.js Full-Stack Blog! This project is a blog application built using Next.js. Follow the instructions below to set up and run the project.</p>
  
  <h2>Features</h2>
  <ul>
    <li>Create, read, update, and 
