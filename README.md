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
- [x] - 14 - Client - CatsSearchSuspended - converted to server component with loading, error & server fetch
- [x] - 15 - Client - removed suspnse, moved fetch functions to separate file. Search grid component - use next.js searchParams props instead of hook.
- [x] - 16 - Client - styling
- [x] -- Small card - styling completed
- [x] - 17 - Client - removed cats data fetch caching to enable like PUT request to update like count even after refresh.
- [x] - 18 - Client - cat page - get data with fetch by id instead of session storage
- [x] - 19 - Client - top rated - flex layout
- [x] - 20 - Client - cat page - styling
- [x] - 21 - Client - mobile layout
- [ ] - 22 - Client - like button - show like count update faster

- [ ] - # - Maybe implement express-openapi & skeleton loader

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
