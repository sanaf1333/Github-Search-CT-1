# GitHub Search App 
This is a simple single page application that allows users to search for users, repositories, or issues on GitHub using the GitHub Search API. The application is built using React.js, Custom Hooks for infinite scrolling and debounce, Redux, React Router, and AntD using Design Tokens for UI.

## Features

* Users can search for users, repositories, or issues on GitHub using the GitHub Search API.
* There are two input fields, one search field for the user to type the text and a dropdown where the user can either pick "User", "Issues" or "Repository" to define the entities that they want to search.
* When the user doesn't have any input or clears the input, the input fields are shown in the middle of the page.
* There is a switch for dark and light theme.
* The application has debounce implemented as a reusable custom hook, where we can pass into it our desired callback function and custom delay timing.
* A custom hook for infinite scrolling is designed. This custom hook checks whenever the last element is on the screen and then updates the data accordingly.

## Technical Details

* The application is built using React.js, Custom Hooks, Redux, React Router, and AntD Design Tokens. Webpack is used as a module bundler.
* All the edge cases have been handled.
* AntD Design Tokens and theme configurations are properly used.
* Design tokens are used in such a way that changing a design token reflects across the app.

## Installation

* Clone this repository to your local machine.
* Run npm install to install all the dependencies.
* Run npm start to start the development server.
* Visit (http://localhost:3000) to view the application.

### Github Search API
(https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-users)
