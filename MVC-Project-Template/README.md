# MVC Simple Project Template

Use this template to start a project that follows the  MVC (Model-View-Controller), a software architectural paradigm.

## What is MVC

MVC (Model-View-Controller) is a popular software design pattern used to add organization and structure to your codebase.

For more information about what MVC is, checkout my [Lecture](https://slides.com/jsoncarr/mvc).

## What is this template

The actual project template is for a simple todo list. It is a full stack web application, but it's meant to be used as a template.

As such it's very basic, with practically no styling/UI (so that you can add all that according to your preference).

### Packages/Dependencies

You can (and should) just to use whatever you'd like, but the template uses the following packages:

dotenv, ejs, express, mongodb, mongoose, nodemon

## How to use this template

### Install dependencies/packages

`npm install`

- Create a `.env` file and add the following as `key: value`
  - PORT: 2121 (can be any port example: 3000)
  - DB_STRING: `your database URI`

### Customize

For example, use pug or react to handle your views instead of ejs. Or use an sql database instead of mongodb.
