<img src="https://i.imgur.com/go18uJE.jpg">

## SEIR 1003

# Star Wars API - React Router & useEffect practice

---

## Intro
In this deliverable, you'll consume the [Star Wars API](https://swapi.dev/api/starships) and render its data. 

## Setup + Starting Instructions 

1. Create a new react app in this folder. (`npx create-react-app .`)
2. Clean up CRA starter code and verify app loads without issue.
3. Import React-Router Dependencies (`npm i react-router-dom`)
4. Create a Landing page with a link to your /starship route.
5. Setup your App to Router to render a `<StarshipsList />` Component in a /starships route.  (You can start with boilerplate components to get started)
6. After verifying react-router pathing is working displays the correct component
7. Test out the SWAPI data in Insomia to see what it looks like and what types of data you'll be working with

## Primary App Goals
1. Obtain all of the starships from the API Endpoint: `https://swapi.dev/api/starships`) and display each ship inside your `<StarshipsList/>`. 
1. Use `useEffect` to make the request as soon as your topmost-level component loads (App), and store it in state (starShips).
1. Map and render all information from your API call

1. Add links on your landing page to /Startships, /planets, and /characters
1. In each of those routes, run a similar API call rendering and mapping data in each component for those endpoints
1. In which component do we want to make these calls? Do we want to, do we need to pass everything as props to each component?


## Part II - Router Props

In your `<StarshipsList/>`, add a link in for that starship. The link should lead to `/ships/<theSelectedShipsId>`, and display the ship's name (We can use a Link, or Navigate as onClick to do this)
1. When a starship is clicked, a `<StarshipPage>` component should be rendered. Pass into the StarshipPage the id parameter from the url. Take a look at the answers from this week's `React-Router` codealong and use it as a guide 
1. When the `<StarshipPage />` component loads, it should make a request to get the full details about the specified ship. Display that ship's name, model, manufacturer, and any other attributes you find interesting. (Hint: useEffect)
1. The StarshipPage should have a "Return to Starship List" link. Hint: you'll set the link to route back to your `StarshipsList` path. 
1. Using this syntax, get your Planets, Vehicles, Films, & People to render out the same way




## Stretch Goals
1. Add a `<404/>` component, that is rendered by `React-Router` if no matching path is found, or a bad address added manually in the browser.
1. On both the main list and the single ship view, render a "Loading..." message until the data has finished loading. This can be done with a conditional render that looks at the appropriate piece of state.
1. Enhance the `<StarshipPage>` component to render a `<PilotList>` component that lists the names of the pilots for that starship. This will require making a request for each pilot in the ship's pilots list. (Note that only the Millenium Falcon, TIE Advanced x1, and X-wing have pilots. For the ships with no pilots, show a No Pilots message.)
1.Use a guard operator to render a "Loading..." message until the data has finished loading. This can be done with a conditional render that looks at the appropriate piece of state.
1. Add some custom CSS styling to approximate a cool, sci-fi aesthetic. 


