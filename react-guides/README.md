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

## How to Let Children Send Data To Their Parents

1. In the parent component, define a function that you would like the child components to be able to access. (`function updateThisStateVariable(newValue)`)
2. Pass that function as a prop to the child component(s).
3. In the child component, call that function at the appropriate time (often in an event handler), passing in the argument that will allow the parent element to take the proper action.
