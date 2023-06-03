학습내용

1. vercel을 통해 https 로 배포할 때 http 요청이 있으면 보안의 문제로 동작하지 않을 수 있다.
   그래서 api 요청을 보낼 때 https 로 주소를 설정해야 한다.

##tip 1

In JavaScript, the [object Object] is the default string representation of an object when it is coerced into a string. To see the actual content of the object, you can use the console.log() function or JSON.stringify() method.

##tip 2

image 파일 참고
=> vercel 컴퓨팅 서버(serverless Function)를 사용해서 api 키를 감춘다.

npm i -D vercel
package.json에 "vercel": "vercel dev" 추가
root 경로에 vercel.json 파일 추가 => 개발 서버, 빌드를 오픈할 때 어떤 명령어를 사용하는지 명시
npm run dev => 열어진 서버(3000대 포트)로 접근
=> api 폴더와 그안에 있는 파일이 하나의 서버처럼 작동하게 된다. (serverless)
민감한 정보(api key 등)을 api 파일에 저장 및 활용하고, 이를 fetch를 통해 가져와서 사용하면 vercel 서버를 통해 정보가 활용되는 만큼 웹에서 그 정보를 확인할 수 없다. 

##tip 3

serverless functions 란?
컴퓨팅 서버를 직접 구축이나 관리하지 않고도 그 기능을 함수 단위로 작성해서 바로 사용할 수 있는 기능/서비스


##tip 4
.env 파일을 만들어서 github에도 apikey가 등록되지 못하게 설정한다. 그리고 vercel 홈페이지에 따로 쓰고 있는 환경변수를 설정해 준다. 

##tip 5
https://transform.tools/
위의 사이트에 들어가면 빠르게 typescript로 변환할 수 있다.