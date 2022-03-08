# Menu Vue

In recent years, we have seen businesses rapidly increase their use of technology to improve efficiency and minimize physical interactions. In today’s contactless world, something as simple as browsing a restaurant menu is now often done by scanning a QR code with your smartphone. Menu Vue is a service that allows businesses to build and share their menus, generate QR codes to view those menus, and give customers the ability to provide feedback on items.

Although other services already provide QR code menus, Menu Vue implements additional user interactions that provide both customers and business owners with valuable information. Customers can leave feedback about items, allowing other customers to make a more informed decision on what to order, and letting business owners know what needs improving.

Live Demo at https://menu-vue.herokuapp.com and http://www.menuvue.com

*Demo is hosted on Heroku and may take a moment to load*

![Menu Vue Demo](preview.gif)

## Technologies Used
* ReactJS
* Ruby on Rails
* Material UI

## Features
- [x] Users may signup for an account
- [x] Users may login/logout
- [x] **C**reate / **R**ead / **U**pdate / **D**elete Businesses
- [x] **C**reate / **R**ead / **U**pdate / **D**elete Categories
- [x]  **C**reate / **R**ead / **U**pdate / **D**elete Items
- [x] Generate QR Code to view menu
- [x] Like/Unlike items
- [x] Comment on items
- [x] Create/manage multiple businesses with one account

## Installation
### Prerequisites
Before you continue, ensure you have met the following requirements:
* You have installed the latest version of [Node.js and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
* You have installed the latest version of [Ruby](https://www.ruby-lang.org/en/documentation/installation/).
* You have installed the latest version of [PostgreSQL](https://www.postgresql.org).
---
1. [Fork and clone](https://github.com/wilfredbayudan/menu-vue/fork) this repository.
2. Run `npm install --prefix client` in the terminal to install dependencies.
3. Run `bundle install` to install dependency gems.
4. Run `rails db:create db:migrate` to setup database.
5. Run `rails s` to start backend server.
6. Run `npm start --prefix client` in another terminal to start frontend server.

By default, the frontend can be accessed through http://localhost:4000

Have fun!

## Usage

### Frontend Routes (GET requests)
---
* `/` - **Homepage**

Will temporarily reroute to `/browse`. New layout for homepage coming soon.

-----

* `/browse` - **Browse**

Displays list of businesses, it's photo, description, and popular items. Clicking a business will navigate to public business page.

-----

* `/how` - **How It Works**

Reserved for a "How It Works" description page.

* `/about` - **About**

Reserved for a "About Us" page.

* `/signup` - **Sign up**

Renders a sign up form for new user registration.

* `/login` - **About**

Renders a log in form to authenticate users.

* `/401` - **Not Authorized**

Renders a "Not Authorized" notification page.

* `/:slugUrl` - **Business Menu Page**

Fetches and displays menu information for a business using it's slug url.

* `/:slugUrl/:categorySlug` - **Business Menu Page - Category**

Fetches and displays items within specified category from specified business.

* `/manage` - **Manage**

Default control panel for logged in users.

* `/manage/users` - **Manage - Users**

Allows business owners to manage user access to businesses.

* `/manage/businesses` - **Manage - Businesses**

List of businesses user manages and options available

* `/manage/businesses/new` - **Manage - Businesses - New**

Form to create new business

* `/manage/businesses/:businessId/menu` - **Manage - Businesses - Business - Menu**

Menu manager to create, update, and edit categories and items for business menu

Backend routes coming soon....

### Backend Routes
---
*Feel free to test these routes using [Postman](https://www.postman.com/)*

## Contributing

Contributing bug reports and pull requests are welcome on GitHub at https://github.com/wilfredbayudan/menu-vue. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the code of conduct.

## License

This project is available as open source under the terms of the MIT License.

## Code of Conduct

Everyone interacting in the menu-vue project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct.