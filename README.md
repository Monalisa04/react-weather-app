Description
Starlight is a web application providing weather forecast. It provides information on user's current weather conditions and forecast for upcoming week. Users can also get forecast for different cities. 

Demo : https://master.d2kbl80hox1664.amplifyapp.com/

Please follow the steps below to run the app:

1. Extract the contents of the folder on local drive
2. This module uses Google Maps Geocoding API and requires an API key. Please check this link out[a link]https://developers.google.com/maps/documentation/geocoding/get-api-key to obtain your API key. Please note that without the key, the project will not run. 
3. Please open constants.ts file under src/common/. Replace <API_KEY> with your key.
4. Run npm install
5. Run npm start

Future Enhancements:

- More weather details can be provided on another page which is rendered on clicking the current weather or forecast. There is provision for routing in the project as this was earlier planned but scoped out later
- UI indication when the data is being fetched can be implemented. Source code has provision for this. 
- UI enhancements for responsiveness

Limitations:
- Dependency on API key for getting location details : Unlike the weather APIs, the location API is not created as AWS lambda function, because of some technical issues. This has created the limitation to enter key prior to running the app
- List of cities is currently loaded from static file having limited entries. This can be enhanced to get city name from API

- Use of redux for a simple app as this can be an overkill, but the app now has the capability to scale to many features(components) eg: multiple pages for weather display, calender etc
