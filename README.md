react-starter-hmr
===

Simple react.js starter project based off of Andrew Farmer's [excellent
tutorial](https://github.com/ahfarmer/minimal-react-starter). I recommend you
check it out if any of the source files here are confusing to you. I've made a
few changes to convert some of the source to ES6 that the original tutorial
had written in ES5.

This version of the project adds hot module replacement as a convenience. The
original used autorefresh, which is something that becomes tedious in a real app.
You can verify that the HMR tooling is working by looking in your browser's console.


Usage
---
 
Start the development server with this command:
 
```
npm start
```

 
Setup
---
 
```
npm install
```


Compile
---
 
```
npm run compile
```


Left To Do
---

1. Set up another repo with more common functionality added: CSS processor, Routing, Redux, Server
Rendering, Database (Mongo) connectivity, Image sizing processor, autoprefixer.
2. Needs LESS support. Working with straight CSS is painful after you've worked with LESS or SASS.
3. Needs routing support. I'm surprised this wasn't included in this bare-bones template. Any app without
it is pretty useless.
4. Separation of concerns. The application should have some logical splits across files. The single main.js
file here isn't sufficient for a real application.