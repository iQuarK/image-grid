# Image grid

The project comprises a backend (in expressjs) and a frontend (in nextjs).

## Backend
To run the backend, you have to go to the folder:

`$ cd backend`

Get the packages:

`$ npm install`

And then just execute the server:
`$ npm run server`

Currently, the port is `8080`, so you can test the endpoint by going to `http://localhost:8080/api/v1/photos?pageNumber=2`. The `pageNumber` parameter is optional and defaults to 1. 

## Frontend
That is a normal nextjs app, so you have to go to the folder:
`$ cd frontend`

Get the packages:
`$ npm install`

And then just execute the server:
`$ npm run dev`

It will run on `http://localhost:3000`.

## what to expect
You should see something like that (for dark mode):

<img width="1067" alt="Screenshot 2024-06-18 at 06 15 09" src="https://github.com/iQuarK/image-grid/assets/86655/fe165913-195e-449f-bfd5-53d27b9251b2">

If you move the mouse, you will see a hover effect; if you click, the image will be bigger.

[chrome-capture-2024-6-18.webm](https://github.com/iQuarK/image-grid/assets/86655/de860447-28ce-45e9-ac5c-9b17e2ae58dc)

## Pagination and Image cache

Also, if you use the buttons below, you will move among the pages returned from the server, as it is using the NextJS's Image component, it caches the photos for a quicker loading.

[record pagination.webm](https://github.com/iQuarK/image-grid/assets/86655/6c11b712-c3c3-48de-a639-8d54f7e48831)

## Responsiveness

Yes, it is responsive:
[responsive.webm](https://github.com/iQuarK/image-grid/assets/86655/66a64a19-7ef6-4fdc-bc97-3047098c3d1c)

And no, it is not in position absolute.

[asolte.webm](https://github.com/iQuarK/image-grid/assets/86655/f45643b2-b41a-4200-ae15-bab265522a04)



<img width="1121" alt="Screenshot 2024-06-18 at 06 24 05" src="https://github.com/iQuarK/image-grid/assets/86655/54c2e066-4cd9-488b-9626-52a1d8ff5abd">



