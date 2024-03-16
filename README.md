# Pet Website
## Stack
- Node.JS
- Express.JS
- Typescript
- MongoDB + Atlas
- Next.JS
- React


## Top rated cats - home page
![image](https://github.com/asidelnik/pet-website/assets/10272524/d4e0a3d6-f162-410c-aef9-f6e70fa26613)

## Search cats page
![image](https://github.com/asidelnik/pet-website/assets/10272524/7f3f4b83-6f6b-4372-b952-4eb1c4d1236e)

## Liking a cat
![image](https://github.com/asidelnik/pet-website/assets/10272524/9eed22f9-5f12-4158-89c2-e3f29d858fd6)

## Cat profile page
![image](https://github.com/asidelnik/pet-website/assets/10272524/aa7df534-1c71-4595-8517-ba1eb790cb55)

## Mobile view of profile page
![image](https://github.com/asidelnik/pet-website/assets/10272524/f9e50331-7e7f-4565-87a1-19df11c82311)


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
- [x] - 15 - Client - removed suspense, moved fetch functions to separate file. Search grid component - use next.js searchParams props instead of hook.
- [x] - 16 - Client - styling
- [x] -- Small card - styling completed
- [x] - 17 - Client - removed cats data fetch caching to enable like PUT request to update like count even after refresh.
- [x] - 18 - Client - cat page - get data with fetch by id instead of session storage
- [x] - 19 - Client - top rated - flex layout
- [x] - 20 - Client - cat page - styling
- [x] - 21 - Client - mobile layout
## Future tasks  
- [ ] - Comment the code
- [ ] - # - Mongo projection - GET queries for usage in small card UI - should get only required fields
- [ ] - # - Client - dynamic sort & pagination - all GET requests should send filter, sort & pagination (skip & limit) data from the UI
- [ ] - # - Mongo Index - add index on the cats collection name field - for faster querying of search cats by name
- [ ] - # - Client - replace no-cache from GET requests with Next.js revalidation when likeCat PUT request sent.
- [ ] - # - Client - like button - show like count update faster
- [ ] - # - Next.js - try turbo for quicker running: "dev": "next dev --turbo",
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
