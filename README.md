# Weather App

## Function
Look up any city and the following information will be presented:
```
City Name, Country Name
Today's date
Current temperature
Description of current weather (Cloudy, sunny, etc.)
"Feels like" temperature
High & Low temperature
```

## Configure the App

Start the app with:
```
$ npm start 
$ npm run server
```
This starts the app on the localhost:3000 server, as well as the JSON server that I configured (to localhost:5000; localhost:5000/cities to actually open up the page where the information is stored) 

## Screenshots
Initial Screen:
![Initial screen](https://github.com/jyl6198/weather-app/blob/master/src/images/empty_page.png)
Screen after searching a city:
![Screen after search](https://github.com/jyl6198/weather-app/blob/master/src/images/searched_city.png)

## Visualizing and Comparing the data

As one who appreciates text -> visuals, I made a simple python program that converts the data
stored in the JSON file and made plots to visualize & compare the information 

## Screenshots
Graph of everything: <br />
![Graph of Everything](https://github.com/jyl6198/weather-app/blob/master/src/images/graph_all.png)


Graphs organized and categorized by time zone:
![Time zone graph](https://github.com/jyl6198/weather-app/blob/master/src/images/organized_graph.png)

## Known issues/bugs
```
Will throw a console "error" when looking up a city more than once 
(as that information is already stored and cannot be stored again)

Unable to "update/refresh" data 
(i.e., you will have to delete the stored information if you want an updated city's inforamtion)
