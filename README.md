# php-api

> `School assigment`

> Gruppnamn: `php-api`,
> Medlemmar: `Beratcan`, `Maia`, `Leo`

---

#### Fetch funktioner:

* / routes
  * `api.login(body)` - skickar data som ligger i body mot /login routen.
  * `api.register(body)` - registrerar ny användare via /register route.

- /api/ routes
  * `api.get("/route")` - Hämtar data från angiven route
  * `api.getOne("/route", {id})` - Hämtar **ett** objekt med {id} från routen
  * `api.post("/route", body)` - postar data som finns i body mot angiven route
  * `api.updateEntry(body)` - Uppdaterar entry när man är i edit läge.
  * `api.updateUser(body)` - Gör en användare eller ta bort en användares admin privilegium
  * `api.remove("/route/{id}")` - Raderar objektet i angiven route med {id}

## Controllers

* Entries
* Comments
* Users
* Likes

---

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
  * scripts
    * components
      * adminPanel
        * AdminPanel.js
        * partials
          * makeAdminBtn.js
      * entries
        * entries.js
        * partials
          * comments.js
          * deleteBtn.js
          * likeBtn.js
      * searchbar
        * searchbar.js
    * modules
      * fetch.js
      * utils.js
    * partials
      * buildAdminPanel.js
      * buildEntries.js
      * entryForm.js
      * loginForm.js
      * registerForm.js
      * signOut.js
    * main.js
  * views
    * components
      * entry_form.php
      * footer.php
      * head.php
      * navbar.php
    * admin.php
    * entries.php
    * index.php
    * login.php
    * profile.php
    * register.php

---

# Database structure:

* entries
  * entryID - INT (AI)(PK)
  * title - VARCHAR (100)
  * content - VARCHAR (1000)
  * createdBy - INT
  * createdAt - DATETIME

- users
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

- likes
  * likeID - INT
  * userID - INT
  * entryID - INT
