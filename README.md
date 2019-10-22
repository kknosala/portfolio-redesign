# portfolio-redesign
This app is a redesing of my previous portfolio found [here](https://github.com/kknosala/Portfolio). The main focus of this redesign was to move from distinct html pages to a handlebar setup and to move from firebase as the data storage to MySQL. In addition, all of the project information is pulled directly from the MySQL database and dynamically populated via handlebars.

## Live Link
A live version of the website can be found is hosted on [Heroku](https://damp-brushlands-44590.herokuapp.com/).

## Updated Components
This portfolio was built using the following languages, libraries, and servers.
- HTML
- CSS
- CSS Grid
- JavaScript
- Jquery
- MySQL
- Handlebars

## Overview
This website was designed to display information on both myself and on recent projects. Here is a breakdown of each page and its purpose.

### Front Page
The index.html file is the primary landing page for this website. It has a summary of myself, a profile picture, important links, and most recent projects.

#### Summary
This is a personal summary of my self and my goals.

#### Profile
A current picture of myself is dispaly as well as links to my resume, github, and linkedin profile.

#### Recent Projects
This section displays my 4 most recent projects. These projects are set to be displayed on the front page by a boolean attribute in the MySQL database. Any project with the displayFront set to true will display here.

### Portfolio
This page is a display of all of the projects I have completed so far. They range in complexity but give a good, overall view of my abilities and progress. A description of each project with links to the live pages and github page is included.

### contact.html
This page allows users to leave their information if they would like to be contacted by me. The information they enter is stored on the MySQL database.

### references.html
This page displays various references I have recieved over time. It lists the reference's name, ocupation, relationship to me, and the recomendation itself. Users can submit their own recomendation if they choose to. It is saved on a firebase server, then added by myself once it has been reviewed.
