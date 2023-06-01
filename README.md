demo : https://movie-g1qyxf7ol-youjun-iwon.vercel.app/#/

Learning contents

1. When distributing to https through vercel, if there is an http request, it may not work due to security issues.
   So when sending an api request, you need to set the address to https.

##tip 1

In JavaScript, the [object Object] is the default string representation of an object when it is coerced into a string. To see the actual content of the object, you can use the console.log() function or JSON.stringify() method.

##tip 2

reference of image file

=> Hide the api key from the web using a vercel compute server (serverless function).

npm i -D vercel
package.json에 "vercel": "vercel dev" 
Add vercel.json file to the root path => Specify which command to use when opening the development server and build A.
npm run dev
=> The api folder and the files in it work like a server. (serverless)
If sensitive information (api key, etc.) is stored and used in an api file and retrieved and used through fetch, the information cannot be verified on the web as the information is utilized through the vercel server.

##tip 3

serverless functions?
Functions/services that can be used immediately by writing the function without directly building or managing the computing server


##tip 4
Create an .env file to prevent apikey from being registered on github. And set the environment variable that is used separately on the vercel homepage.
