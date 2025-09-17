# Task Management App

A modern, responsive web application for managing tasks and tracking productivity. Built with React, Firebase, and Vite.

## Live Preview

[Try the app live!](https://taskmanaager.netlify.app/)

## Features

- User authentication (Firebase Auth)
- Create, edit, delete, and complete tasks
- Real-time updates with Firebase Firestore
- Task prioritization and categorization
- Dashboard with analytics and productivity insights
- Responsive design for desktop and mobile
- Notifications and reminders (to be included soon)

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn
- Firebase project (for Auth and Firestore)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/codimaniac/Task-Management-App.git
    cd Task-Management-App
    ```
2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```
3. Configure Firebase:
    - Copy your Firebase config to `src/utils/firebaseConfig.js`.
    - Enable Firestore and Auth in your Firebase console.

### Running the App

```sh
npm run dev
# or
yarn dev