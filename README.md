## The Shoppies 

An application in which users can search and nominate 5 movies, powered by OMDB API and built with React, Redux, and Bootstrap.

[Demo](https://the-shoppies-award.herokuapp.com/welcome)

Note:
* Both the API and the frontend is hosted for free on Heroku which means significant loading times if you are the first to access the app within the hour. Please be patient and reload the page if necessary.
* The information for creating an account is used purely for demonstrating authentication. 
* If you do not with to create an account you can use these credentials to login: 

    email: `email@email.com`\
    password: `123123123`

## Project Screen Shot(s)

#### Mobile View
<p float="left">
  <img src="src/assets/screenshots/HomeScreen.png" alt="Home Screen Mobile" width="200" height="300"/>
  <img src="src/assets/screenshots/SearchResultsScreen.png" alt="Search Results Screen Mobile" width="200" height="300"/>
  <img src="src/assets/screenshots/MovieInfoScreenMobile.png" alt="Movie Info Screen Mobile" width="200" height="300"/>
</p>

#### Desktop View
<img src="src/assets/screenshots/HomeDesktop.png" alt="Home Screen Desktop" width="450"/>
<img src="src/assets/screenshots/SearchResultsDesktop.png" alt="Search Results Screen Desktop" width="450"/>
<img src="src/assets/screenshots/MovieInfoDesktop.png" alt="Movie Info Screen Desktop" width="450"/>

## Installation and Setup Instructions

To clone this repository you will need `node` and `npm` installed globally on your machine.  

The app is fetching from a hosted API, however you can change this to run on your localhost by cloning the [API](https://github.com/JessieW0010/shoppies-api) and replacing the API base URL in `/src/api`.

Installation:

`npm install`   

To Start Dev Server:

`npm run dev`  

To Visit App:

`localhost:3000`  

## Post application additional features

A pull request has been made for features I'll be adding after the application is reviewed. You can see these additions in the screenshots below!

| Description             |  Screenshot |
:-------------------------:|:-------------------------:
Added number of nomination display to avatar component  |  <img src="src/assets/screenshots/NumNominations.png" alt="Num nominations display" width="100"/>


## Reflections

This was a 4-day project built for Shopify's 2021 Winter Web Development Internship application. The applicaton must allow users to search movies via the hosted [API](https://frozen-dusk-95287.herokuapp.com) (powered by [OMDB API](http://www.omdbapi.com)) and add/ remove 5 movies from their list.

I started this process by using the `create-react-app` boilerplate, then adding `typescript`, `react-router`, `redux`, and `redux-saga`. I did a lot of research into designing the UI to be as simple and minimalistic as possible without being unintuitive. The dark theme was heavily inspired by the Netflix desktop view. 

One of the main challenges I had were project time constraints, originally I had no plans of incorporating third party libraries for building components and styling but these plans were quickly tossed out on day 2. In the end, I chose to add `bootstrap-4` for easier styling, `font-awesome` for icons, `react-toastify` for displaying success and error messages, and `react-responsive` to change display for mobile/ desktop. 
