# delivery-app
Next.js version (serverless) repo: https://github.com/Mikhail-Ropii/next-app

Live page: https://next-app-mikhail-ropii.vercel.app/

Repo:

https://github.com/Mikhail-Ropii/delivery-front

https://github.com/Mikhail-Ropii/delivery-back

To run this solution locally you should download repo (delivery-front and delivery-back) and open in your IDE back and front separately. Change base URL in file baseURL.js in "delivery-front" repo to http://localhost:3001.

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
