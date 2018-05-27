# Reactive-library
A project to add authors and books using react, react-router and redux.

## Installation
To run the application, follow the process below :

* Download the github repo, 
* Unzip the downloaded folder
* From terminal navigate to the downloaded folder
* Run `npm install` within the **root folder**. 
* Run `npm start` within the **root folder**. 
* In your browser open the url `localhost:8080`

## Pre-poulating Authors and Books list
To change the pre populate the authors and books list :
* Open the file `src/config.js`
* Edit the property `authors` to add new author
* Edit the property `books` to add new book
* Id is being generated using `author${new Date().getTime()}` or `book${new Date().getTime()}`
NOTE: You can add author and books from the app also. The above is just to pre populate the app.
