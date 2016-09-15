# Matilha Comoditize

Comoditize - A silly word created by us that means 'to make a commodity', turn something into an asset that does not have a process of alteration or an asset that is not different from another. Here is why:

- We believe that the biggest part of an app code should never be coded again.
- We believe that's more than a ctrl+c and ctrl+v.
- We are talking about plug code parts into each other easily, seeing those codes as commodities.
- We can do that and also keeps the user experience relevant and diferentiated for each distinc project.


This is a project based on Ionic Framework and uses components architecture. This project aims to provide codes for the most common features for mobile and web apps. We are currently launching this project and it is not stable at all.

##Trello

Link with next steps and other features: [link](https://trello.com/b/zIftVbBr/matilha-app-boilerplate)

## Dependencies
```
npm install -g bower gulp-cli cordova ionic@1.3.22
```

## How to install
```
npm install
bower install
```

# How to run in browser
```
gulp watch
```

## Already done:
- Ionic side menu mode component
- Ionic tab menu mode component

## To do List:
- add ionic sass file - Done!
- clean up and put tabsmenu into standards - Done!
- plugin login components

## Steps to create a new module:
1. Component
2. Route / Call
3. View
4. Controller / Service
5. Test

## This project should provide a base app bootstraping with:

- Comon testable components like:
  - Login and Logout
  - Social Login
  - Onboarding
  - API module
  - Account page
  - Feed page
  - Push Notification integration - We are using OneSignal
  - User tracking and analytics - GA, mixpanel
  - Customer comunication - Intercom
  - Ready to go menus
  - Local Storage
  - Social Sharing
  - Modal factories
  - Form validation
  - Common app pages:
    - Use terms
    - Privacy Policy
    - Help
    - FAQ
    - Contact
- Everything based in Ionic - for multi plat coding
- Create ENV vars and injection
- Documentation for launching steps
- Clear gulp tasks and documented gulp tasks
- Updated .gitignore

## For the future App CI
- Rails server running on a Vagrant machine with most common features:
  - API
  - User creation and access holes
- Code climate integration for mobile and web server
- Husky Hooks

## This project is based in projects like:
https://github.com/mwaylabs/generator-m-ionic
