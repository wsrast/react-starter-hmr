react-starter
===

Simple react.js starter project based off of Andrew Farmer's [excellent
tutorial](https://github.com/ahfarmer/minimal-react-starter). I recommend you
check it out if any of the source files here are confusing to you. I've made a
few changes to convert some of the source to ES6 that the original tutorial
had written in ES5.


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

1. Set up another repo with more common functionality added: HMR, CSS processor, Routing, Redux, Server
Rendering, Database (Mongo) connectivity, Image sizing processor.
2. Implement HMR (Hot Module Replacement). Auto page refresh is great, but it loses state on deep routes.
HMR doesn't, because it's only replacing the modules that have changed, and it's doing it dynamically,
keeping all your other, existing JS objects untouched.
3. Needs LESS support. Working with straight CSS is painful after you've worked with LESS or SASS.
4. Needs routing support. I'm surprised this wasn't included in this bare-bones template. Any app without
it is pretty useless.
5. Separation of concerns. The application should have some logical splits across files. The single main.js
file here isn't sufficient for a real application.