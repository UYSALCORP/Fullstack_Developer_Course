## How to install react
- You should first download and install Node.js
- npx create-react-app project-name (.)
- yarn create react-app (faster than npx) (first install yarn)
* npx always uses the latest version. npm does not.
- npm start. ( If you're not at same directory cd project-name/ )

## Structure
- node_modules: This is where packages installed.
- public: is where static files live in.
- src: is where your dynamic files reside.
### For the project to build, these files must exist with exact filenames
- public/index.html
- src/index.js ( is the JS entry point. )

## What is React and Created by who?
- React is a JavaScript library.
- Created by engineers at Facebook - Jordan Walke
- First time used in Facebook Feed
- React was released first in 2013

 ## Why React?
 ### React Features
 #### JSX:
 - Javascript Syntax Entension. It's not necessary to use but it's recommended. In your project you don't need to use DOM, directly using html codes to running javascript codes.
 - Modules must start with Capital letter. Use camelCase
 - Every return must have a parent element. 2 sibling element cant run codes without a parent element.
 - this element also can be <> (React Fragment). <div> adds a block element on dom. u can use <> for inline elements.
 #### Components:
 - React is all about components. You need to think everything as a component.
 #### Unidirectional Data Flow and Flux: 
 - React, implements one-way-data flow
 - Flux is a pattern that helps to keep your data unidirectional.
 #### License:
 - React is licensed under the Facebook Inc.

 ## React Advantages
 - Uses "Virtual DOM" -> faster than regular DOM
 - Can be used on "client" and "server-side" as well as with other frameworks.
 - Component and Data Patterns improve "Readability