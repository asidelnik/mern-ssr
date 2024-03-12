## Tasks
- [x] - 1 - Server - set routes
- [x] - 2 - Client - Next.JS project started
- [x] - 3 - Client - routing
- [x] - 4 - Client - GET data from the server (all requests tested)
- [x] - 5 - Client - like cat POST request
- [x] - 6 - Client - UI & design - started
- [x] - 7 - Client - fix Next.JS rendering performance - too slow - use React Suspense, build, start
- [x] - 8 - DB - add cats (data)
- [x] - 9 - Server - convert to typescript
- [x] - 10 - Client - move search box to header
- [x] - 11 - Client - move cat/:id route to cats-search/:id & delete cats route
- [x] - 12 - Client - home page - converted to server component. Replaced state with next.js loading & error handling & server fetch function 
- [x] - 13 - Client - spinner component created

- [ ] - # - Client - next.js performance - check performance after scss uninstall + css using only
- [ ] -- Move fetch/server requests from client components to server components & import them: https://stackoverflow.com/a/77509801/399527

- [ ] - # - Client - data fetching Next.js - update typescript package version
To use async/await in a Server Component with TypeScript, you'll need to use TypeScript 5.1.3 or higher and @types/react 18.2.8 or higher.



- [ ] - # - Make sure there are no Any types used in client or server
- [ ] -- Client
- [ ] -- Server

- [ ] - # - Server - package.json - try to return "type": "module" & fix mjs build
- [ ] - # - Client - cat page - redesign getting data (not from session)
- [ ] - # - Client - add a spinner to every page or component


- [ ] - # - Client - UI & design - finish
- [ ] -- cat page - get profile page design
- [ ] -- cat page - background color - lighter than cat color
- [ ] -- Redesign like button & count - facebook inspiration
- [ ] - # - Server - check nodemon & typescript
- [ ] - # - Add commenting to typescript
- [ ] - # - Client - maybe implement react-loading-skeleton


Maybe implement express-openapi

## Cat type
```
{
  "name": "String",
  "birthday": "ISODate",
  "age": "Number",
  "address": {
    "street": "String",
    "city": "String",
    "country": "String",
    "zipCode": "String"
  },
  "favoriteFood": "String",
  "colors": ["String"],   
  "heightCM": "Number",  
  "weightG": "Number",   
  "image": "String",     
  "likeCount": "Number",
  "breed": "String" 
}
```

## Cat data
### Images
https://en.wikipedia.org/wiki/List_of_cat_breeds
### Names
Buttercup
Bubbles
Blossom
Sandy Cheeks
Pearl
Mrs. Puff
Trixie
Vicky
Wanda
Marge
Lisa
Lois
Meg
Muriel
Velma
Daphne
Louise
Tina
Linda
