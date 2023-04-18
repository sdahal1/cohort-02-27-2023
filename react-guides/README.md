# Michelle's React Guides

## How to Make a New Component

1. Create a file in UpperCamelCase matching the name of your component.
2. `import React from 'react';`
3. `function ComponentName()` that returns some basic HTML
4. `export default ComponentName`
5. In the other component file where you want to render your new component, import and render it. Confirm that you can see your basic HTML on the page.

## Where to Put State

1. Draw the tree structure of your components.
2. Highlight all of the components that will use the state variable you're thinking of creating.
3. Find the first common ancestor of those components. That's where the state should live.

## How to Pass Props (Information from Parent Components to Their Children)

1. Pass a prop in the parent component, where you create the child component, using attribute syntax. (`propName={propValue}`)
2. In the child component, add that prop into the parameters. (`function ComponentName({ propName })`)
3. Use that prop in the child component. (`<h3>{propName}</h3>`, or a map, or accessing various properties of an object, etc)
4. Test by checking that the child component has correctly rendered the data.

## How to Let Children Send Data To Their Parents

1. In the parent component, define a function that you would like the child components to be able to access. (`function updateThisStateVariable(newValue)`)
2. Pass that function as a prop to the child component(s).
3. In the child component, call that function at the appropriate time (often in an event handler), passing in the argument that will allow the parent element to take the proper action.
4. Use `console.log` or other mechanisms to test that data is being passed correctly.

## How to Request Data From an API

1. Make a state variable to hold the data.
2. Write a `useEffect`. Add in the second argument: when do you want the `useEffect` to run?
3. Fill in the `useEffect` function with a call to `fetch` that puts the resulting data into the state variable.
4. Try to render that state variable onto the page to ensure you've gotten data. Test.
5. Add in the `AbortController` cleanup code.

## How to Add a Route to a Page

1. Make sure you've set up a `Router` component wrapping your `App` component.
2. Add a `Route`, specifying its `path`.
  a. Consider whether you want the path to be `exact` or not.
  b. Consider whether the `Route` should be inside of a `Switch` or not.
3. Specify which component(s) to render inside of that route.
4. Test by visiting that path in your browser.