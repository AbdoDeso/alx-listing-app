# ALX Listing App

## Brief Description
 ###### The ALX Listing App is a web application designed to showcase listings — similar in concept to Airbnb or property listing platforms. The goal is to build a clean, responsive, and scalable frontend interface that displays cards of properties with relevant details like images, titles, descriptions, pricing, and other metadata.

## Project Goals:
#### Display a list of property listings using reusable components.
#### Create a modern, responsive UI using Tailwind CSS .
#### Structure the app using best practices in React + TypeScript .
#### Centralize types (via interfaces/) and static data (via constants/).
#### Prepare the foundation for future features such as filtering, search, and API integration.


## Project Structure Overview
### Here’s a breakdown of the main directories and their purpose:

#### 1. components/
###### Purpose: Contains all reusable React components.
##### Examples:
###### Card.tsx: Displays a single listing card.
###### Button.tsx: Reusable styled buttons.
###### These components use interfaces from interfaces/ and constants from constants/.

#### 2. interfaces/
###### Purpose: Holds all TypeScript interfaces and types used throughout the app.
##### Examples:
###### CardProps: Interface defining props for the Card component.
###### ButtonProps: Interface for button customization options.
###### Keeps the codebase type-safe and organized.

#### 3. constants/
###### Purpose: Stores reusable data, strings, URLs, and configuration settings.
##### Examples:
###### API base URLs and endpoints.
###### UI labels and messages.
###### App-wide configurations (e.g., page sizes, colors).
###### Helps avoid duplication and makes updates easier.

#### 4. public/assets/
###### Purpose: Stores static assets like images, icons, or fonts that are not imported via JavaScript/TypeScript.



## to Run this Next.js Project Locally
### Prerequisites
#### Node.js (v14 or higher)
#### npm , Yarn , or pnpm
### Check versions:
#### node -v
#### npm -v  # or yarn -v / pnpm -v

### Install Dependencies
#### Use one of the following:

npm install
# or
yarn install
# or
pnpm install
Installs:

#### next, react, react-dom
#### Other dependencies from package.json
### Start Development Server
#### Run:

npm run dev
# or
yarn dev
# or
pnpm dev
#### App will be available at:
####  http://localhost:3000