# Who am I

https://www.linkedin.com/in/summertime/
https://github.com/GamesOfSummer

I've been doing this a while
I don't know everything - I leave my ego at the door. You defo know something I don't in this JS ecosystem.
Follow me on LinkedIn! Always happy to offer a few minutes or answer a question to anything.

ASK QUESTIONS WHENEVER

# TO start - Redux in the wild

I am going to assume you know React, JS, Typescript

Visit my portfolio website - show a smaller store
Shopping cart, user info, dark mode
Redux is still being used

Visit Reddit/NPR - they have a Redux store

# Why use Redux?

- Global Store - everything and anything can access it, ie, a database for your frontend
- Avoid props drilling
- The tooling is AMAZINGGGGGGGGGGGGGGGGGGGGGGGG

- You are going to get asked about it in your React interviews 🙃

# Warning - Redux has a ton of moving parts

It's complicated. It's okay to feel overwhelmed. Even I don't know everything.

History - mutating was awful, now we are better with Redux Toolkit

# Start with CRA install

```
npx create-react-app my-app --template typescript
```

# make a shopping cart

after all, a shopping cart is _probably_ going to be needed to be 'seen' everywhere, so it's a great first case.

# make two store fronts in Next.JS

As simple as possible, no stress

# What goes in the Redux store?

Everything? NO.

Use context API for small needs. Even some props drilling is okay.

Devs can complain about Redux when the store gets too big - so be mindful of that.

# Using Redux Toolkit

https://redux.js.org/introduction/getting-started

https://redux-toolkit.js.org/introduction/getting-started

Redux is still a complicated mess at times, but RTK reduces that pain.

https://redux-toolkit.js.org/tutorials/quick-start

Is perfect to follow through~

=================================

# Wth is a reducer

Reducers are functions that take the current state and an action as arguments, and return a new state result. In other words, (state, action) => newState.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
