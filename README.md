This application is set up using React + TypeScript + Vite

## Run app:

1. Make sure you have installed:
    - node v20.10.0
    - npm v10.2.3
2. Clone app from Github https://github.com/TamilaAhmedovna/pokemons_test_task
3. In the root project folder run:
    - `npm install`
    - `npm run dev`
5. Go to http://localhost:5173/ in the browser

## Some comments and small additions to pay attention on:
1. In order to show more info in the table it is worth implementing an additional endpoint for that. In this case we won’t need to make 5 more requests for every page.
2. Sorting is implemented in the easiest way since it is not clear what the user value here.
3. It shouldn’t be possible to click on pagination controls to get a new set of Pokemons until the previous request is in pending state.
4. It is needed to set up linter and prettier; better to put styles in dedicated files.
5. There is no need to use Redux since the app is too small.
6. When you click on the same Pokemon multiple times only one request will be sent.
7. Delay of fetching pokemon info is implemented with Saga Effect Delay.

