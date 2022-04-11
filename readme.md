# Welcome to our take home test

This repository holds all the required information for completing the take home test.

## ⏰ We expect you to use between 2-4 hours on the test

If you complete all the tasks within that timerange you can add any feature you want. You can look through the list of ideas for inspiration but you can do whatever you want to.  
If you do not complete all the tasks within the 4 hours that is also fine. Maybe your code is just very clean, concice and organised or maybe some unpredictable problem took a long time and that is fine - we know how it can be 😀

## 🛫 Getting started

If you feel like something is off or isn't working as intended then reach out to jha@toecho.dk or contact the person who sent you the assignment. We have tried to keep the test simple, but stuff breaks so something could be broken in our end if the project wont run.

0. (make sure you have node.js installed)
1. Clone the repository
2. navigate to `/frontend` and type `npm i`
3. After installation completes type `npm start`. The react app should now be started on port 3000 locally
4. in another terminal window navigate to `/backend` and type `npm i`
5. After installation completes run `npm run dev` or `npm start`  
   (`npm run dev` will run nodemon which automatically restarts the server everytime you make changes)
6. Verify that the server is started by opening `http://localhost:4000/`. You should see "Hello world" in the browser
7. For database we are using SQLite here. You can see some examples for how to use the driver we included here: https://github.com/kriasoft/node-sqlite#examples

# The tasks

We have created a bit of functionality so you have something to work from. It is now up to you to add the following functionality. You will need to add new apis and integrate them with the react app. For styling you are free to alter the markup, change the classes etc. We have not included any css-libraries to keep the project simple, but if you feel much more at home with scss, sass, styled components or similar and feel like you can add them without spending too much time on it you're welcome to. You can find the mockups under `resources/`. The font used in the mockup are 'Roboto' which can be found here https://fonts.google.com/specimen/Roboto

- [x] The database comes with a list of users. Replace the dummy users in app.jsx with the actual users from the database

- [x] Make the form work, so users can be added with the form

- [x] Make edit work for individual users (you can reuse the same form component in the top if you want)

- [ ] Make delete work for individual users

- [ ] When adding a new user, make sure the list updates

- [ ] Style the page using the mockups

# ✅ What to do when you are done

You can either upload the project to a github repo of your own (or something similar) and send us a link to it or you can zip your project and send it to us (remember not to include node_modules though!).

We will talk about your solution in the next interview so you have a chance to tell us about your thoughts and ideas and why you have done it the way you have.

# 💡 Ideas for additional tasks

- Implement pagination either through buttons or on scroll lazy load
- Create another table that has a relation to the users-table this could be skills, hobbies, friends or something else and include this data in the app (CRUD)
- Implement some kind of authorisation-strategy for the api (basic auth, JWT or something else entirely)
- Add animations
- Add filters and/or sorting of the users
- Implement redux
- Organize the api
- Organize the app
- Handle loading and error states (you can use some artificial delays in the api or use network throttling in chrome)
- Make users searchable, either through filters in the frontend or through a database query
