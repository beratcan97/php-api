# php-api
A school assigment

## Glöm ej
- När man raderar ett inlägg ska kommentarerna som är länkat till den också försvinna

# Project structure:
  * App
    * Controllers
      * EntriesController.php
      * UsersController.php
      * CommentsController.php
      * LikesController.php
    * auth.php
    * ConfigHandler.php
    * container.php
    * cors.php
  * public
    * index.php
    * css
      * style.css
    * scss
      * partials
        * header.scss
        * footer.scss
      * modules
        * colors.scss
        * spaces.scss
      * style.scss
    * scripts
      * fetch.js
      * main.js
    * views
      * index.php

# Database structure:
* entries
  * entryID - INT (AI)(PK)
  * title - VARCHAR (100)
  * content - VARCHAR (1000)
  * createdBy - INT
  * createdAt - DATETIME


* users
  * userID - INT (AI)(PK)
  * username - VARCHAR (50)
  * password - VARCHAR (200)
  * createdAt - DATETIME
  * admin - BOOL


* comments
  * commentID - (AI)(PK)
  * entryID - INT
  * content - VARCHAR(250)
  * createdBy - INT
  * createdAt - createdAt


* likes
  * userID - INT
  * entryID - INT
