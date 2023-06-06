# delivery-app
Live page: https://mikhail-ropii.github.io/delivery-front/

Repo:

https://github.com/Mikhail-Ropii/delivery-front

https://github.com/Mikhail-Ropii/delivery-back

To run this solution locally you should download repo (delivery-front and delivery-back) and open in your IDE back and front separately. Change base URL in file baseURL.js in "delivery-front" repo to http://localhost:3001, add .env to root directory and write REACT_APP_MAPS_API_KEY=AIzaSyCULHS6Xf14bTZsOq0Ii9648XhuHPPkGSk

Install required dependencies in both parts:
```
npm install
```
Start Back-End on port:3001
```
npm start
```
or
```
npm run start:dev
```
Then start Front-End:
```
npm start
```
P.S. Usually I use .env for points of entering, api keys... to keep this information from being made public. But in this case I duplicated it in main code. Just in case:)
