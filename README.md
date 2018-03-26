To run this locally, you will need to set the DATABASE_URI environment variable to a mongodb instance (example: mongodb://dbuser:dbpassword@domain.com:port/collection).
Once you've set the DATABASE_URI, you can start the app using yarn start-dev or npm start-dev.

There is an example of the app running at https://calm-fjord-31716.herokuapp.com/ .  EDIT: After further testing, I realized that the api was inaccessible on heroku and I was inadvertently loading my local version. I can provide a DATABASE_URI for testing purposes. 