# Who am I

- https://www.linkedin.com/in/summertime/
- https://github.com/GamesOfSummer

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
