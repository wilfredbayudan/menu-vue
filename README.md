# Menu Vue

In recent years, we have seen businesses rapidly increase their use of technology to improve efficiency and minimize physical interactions. In today’s contactless world, something as simple as browsing a restaurant menu is now often done by scanning a QR code with your smartphone. Menu Vue is a service that allows businesses to build and share their menus, generate QR codes to view those menus, and give customers the ability to provide feedback on items.

Although other services already provide QR code menus, Menu Vue implements additional user interactions that provide both customers and business owners with valuable information. Customers can leave feedback about items, allowing other customers to make a more informed decision on what to order, and letting business owners know what needs improving.

Live Demo at https://menu-vue.herokuapp.com and http://www.menuvue.com

![Menu Vue Demo](preview.gif)

## Technologies Used
* ReactJS
* Ruby on Rails

## Features
- [x] Users may signup for an account
- [x] Users may login/logout
- [x] **C**reate / **R**ead / **U**pdate / **D**elete Businesses
- [x] **C**reate / **R**ead / **U**pdate / **D**elete Categories
- [x]  **C**reate / **R**ead / **U**pdate / **D**elete Items
- [x] Generate QR Code to view menu
- [x] Like/Dislike Items
- [x] Comment on Items
- [x] Users may create/manage multiple businesses

## Installation
### Prerequisites
Before you continue, ensure you have met the following requirements:
* You have installed the latest version of [Node.js and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
* You have installed the latest version of [Ruby](https://www.ruby-lang.org/en/documentation/installation/).
* You have installed the latest version of [PostgreSQL](https://www.postgresql.org).
---
1. [Fork and clone](https://github.com/wilfredbayudan/menu-vue/fork) this repository.
2. Run `npm install --prefix client` in the Terminal to install dependencies.
3. Run `bundle install` to install dependency gems.
4. Run `rails db:create db:migrate` to setup database.
5. Run `rails s` to start backend server.
6. Run `npm start --prefix client` in another terminal to start frontend server.

By default, the frontend can be accessed through http://localhost:4000

Have fun!

## Usage

### Frontend Routes (GET requests)
* `/` - **Homepage**

Will temporarily reroute to `/browse`. New layout for homepage coming soon.

* `/browse` - **Browse**

Displays list of businesses, it's photo, description, and popular items. Clicking a business will navigate to public business page.