# php-api
>`A school assigment`

>Gruppnamn: `php-api`,
>Medlemmar: `Beratcan`, `Maia`, `Leo`

---

#### Att tänka på:
- När man raderar ett inlägg ska kommentarerna som är länkat till den också försvinna
- lösenordet till jespers användare i databasen är: `bunneltan`
- installera `eslint` och `prettier` paketen för snygg javascriptkod.
- På varje endpoint där man kan få flera resurser tillbaka `(t.ex. GET /api/entries)` så ska man kunna ange hur många resurser man ska få tillbaka.

---

### Controllers
 * Entries:
  * Hämta 20 senaste entries med `GET` (/api/entries)
  * Hämta ett specifikt entry efter ID med `GET` (/api/entries/{id})
  * Hämta alla entries en user har skrivit via en endpoint. med `GET` via endpoint (/api/entries nånting)
  * Skapa ett inlägg med `POST` (/api/entries)
  * Ta bort ett specifikt entry efter ID med `DELETE` (/api/entries)
  * Uppdatera ett specifikt entry efter ID med `PATCH` (/api/entries)
  * Man ska kunna söka efter en entry via dess titel (/api/entries/{title} kanske)

* Comments:  
  * Hämta 20 senaste kommentarerna med `GET` (/api/comments)
  * Hämta en specifik kommentar med `GET` (/api/comments/{id})
  * Hämta alla kommentarerna som tillhör ett inlägg med `GET` via endpoint (/api/comments nånting)
  * Skapa en kommentar med `POST` (/api/comments/{id})
  * Ta bort en kommentar med `DELETE` (/api/comments/{id})
  * Uppdatera en kommentar med `PATCH` (Om vi får tid)


* Users:
  * Hämta alla användare med `GET` (/api/users)
  * Hämta en specifik användare med `GET` (/api/users/{id})
  * Skapa en användare med `POST` (/register)


* Likes:
  * Hämta alla likes länkade till en entry med `GET` (/api/likes/{entryId})
  * Skapa en like länkad till användaren som "Like":at och entryt som "Like":as med `POST` (/api/likes)
  * Ta bort en like med `DELETE`(/api/likes/{id})

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
  * likeID - INT
  * userID - INT
  * entryID - INT

  /********************************
 *      ENDPOINTS & ROUTES        *
 ********************************/

 https://localhost:3000/api

    /users
    /users/posts
    /users/posts/comments
    /users/posts/comments/likes

