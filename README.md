# React Component Lifecycle Example

This is a simple React Application that helps to understand and see the React Component Lifecycle in action. It was created using [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Install dependencies](#prerequisites)
- [Run the Application](#run-the-application)
- [Folder structure](#folder-structure)
- [Components](#components)
    - [App](#app)
    - [Cockpit](#cockpit)
    - [Persons](#persons)
    - [Person](#person)
- [Lifecycle tracking](#lifecycle-tracking)
- [React Hooks](#react-hooks)
- [License](#license)

## Getting Started

### Prerequisites
- Node >= 8.10
- Yarn >= 0.25

### Install dependencies

In the project directory, run:

```
yarn
```

To install all the project dependencies.

## Run the Application

In the project directory, you can run:
```
yarn start
```

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Folder structure

The application has very similar folder structure that an application created with [Create React App](https://github.com/facebook/create-react-app). We just added `assets`, `components` and `containers` (where we keep components such as `App`) folders.

```
react-lifecycle-example
├── LICENSE
├── README.md
├── node_modules
├── package.json
├── yarn.lock
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    ├── setupTests.js
    ├── assets
    ├── components
    └── containers
        └── App
            ├── App.module.css
            ├── App.js
            └── App.test.js
```

## Components
![components](docs/assets/components.png)

This is a very simple application and it has just four components at all.

- App
- Cockpit
- Person
- Persons

`App` is the container of the application, it stores and manupulates all the information needed in it's state.

`Cockpit` contains some information based on data stored in `App` component, it was created to demonstrate the React Component Lifecycle when there is an update.

`Person` contains information about a Person (really?) it has a input with two-way binding and was created to demonstrate how this work.

`Persons` is a container for a list of `Person` components. It was created to demonstrate how we can optimze the application without do some unnecessary `render` calls.


## Lifecycle Tracking

TODO

## License

React Component Lifecycle Example is open source software [licensed as MIT](https://github.com/davipviana/react-lifecycle-example/blob/master/LICENSE).