# energy-project

This code is fully deployed on Heroku:

[https://energy-project.herokuapp.com]

Architecture:
Flash deployed python app that uses Jupyter notebook to load csv data to postgreSQL, then app.py serves this postgres data plus csv and json data as separate endpoints. The app.py then also has endpoints ot pass this data to html templates. 
The HTML templates use customized bootstrap theme with fontAwesome icons and javascript libraries like Ploly.js, Charts.js, Pagination.js for visualization.
Map visualizations use Leaflet, Plotly Maps, Mapbox and Choropleth maps to show power plants in United states.
