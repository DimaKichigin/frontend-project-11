# RSS Aggregator

#### **You can try the app [here](https://frontend-project-11-six-sigma.vercel.app/)**

### Hexlet tests and linter status

[![Actions Status](https://github.com/DimaKichigin/frontend-project-11/workflows/hexlet-check/badge.svg)](https://github.com/DimaKichigin/frontend-project-11/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/7c1b549f73f6c32cdf2e/maintainability)](https://codeclimate.com/github/DimaKichigin/frontend-project-11/maintainability)
[![Node CI](https://github.com/DimaKichigin/frontend-project-11/actions/workflows/nodejs.yml/badge.svg)](https://github.com/DimaKichigin/frontend-project-11/actions/workflows/nodejs.yml)

## Description

[RSS Reader](https://frontend-project-11-six-sigma.vercel.app/) is a service for aggregating RSS feeds that makes it easy to read a variety of sources, such as blogs or your favorite news. It allows you to add an unlimited number of RSS feeds, update them and add new entries to the whole stream.

**How to use it:**

• Find a blog or news feed, which you prefer to read

• Use `link-to-RSS` converters to make your blog/news link suitable for [RSS Reader](https://frontend-project-11-six-sigma.vercel.app/)

• Make sure the link is a file with `.xml` markup

• Add this link to the feed

• If you need to change the language, press `RU/EN` button in the upper-right corner

• All downloaded feeds would constantly update every 5 seconds, so you won't miss anything

• That's it!

## Installation

```sh

# Step 1 — clone this repository
$ git clone https://github.com/DimaKichigin/frontend-project-11.git

# Step 2 — install the dependencies
$ make install

# Step 3 — install the packages
$ sudo npm link

# Step 4 — make new bundle using production mode
$ make production
```

## Technologies that were used in the project

- Bootstrap - *html/css framework*
- Webpack - *frontend builder*
- Eslint - *static code analysis tool for identifying *problematic patterns
- Lodash - *javascript utility library*
- Yup - *schema builder for runtime value parsing and validation*
- On-change - *watch an object or array for changes*
- I18next - *to translate the page into English*
- Axios - *library for executing http requests*
- DOMParser - *RSS parsing mechanism*

## How it looks

![image](https://github.com/DimaKichigin/frontend-project-11/assets/86886922/06dad07c-e003-4ecf-95a7-148732b652b0)
