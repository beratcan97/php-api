# php-api
>`A school assigment`

>Gruppnamn: `php-api`,
>Medlemmar: `Beratcan`, `Maia`, `Leo`

---

### To Do:
#### Inloggning:
  * Skapa en `<form>` som tar emot username och password
  * `action` bör vara `action="api/login"`.
  * Om `<button>` används behöver den vara av `type="submit"`
  * `Formdata` behöver fånga upp data och skicka det vidare till `api.get("login")`
  * en "response" bör returneras från fetch funktionen
  * Kanske bör lägga till `userID` till session

#### Front page:
  * Om man är inloggad bör sidan ladda 20 senaste entries.
  * Det bör räcka att hämta de sista 20 ID:n
  * Kanske skriva en `"/profile"` sida där man ser sina egna entries och har möjlighet att redigera/radera samt posta nytt.

#### Profile:
  * Ett förslag bara. Om vi hinner
  * en profilsida som är baserat på /users
  * Man kan se användarens entries och läsa de kommentarer denne har fått.


---

#### Att tänka på:
- När man raderar ett inlägg ska kommentarerna som är länkat till den också försvinna. Förslagsvist raderas kommentarerna först.
- lösenordet till jespers användare i databasen är: `bunneltan`
- Tips: installera `eslint` och `prettier` paketen för snygg javascript kod.
- Använd semantiska taggar i HTML


#### Fetch funktioner:
  - `api.get("/route")` - Hämtar data från angiven route
  - `api.getOne("/route", {id})` - Hämtar **ett** objekt med {id} från routen
  - `api.post("/route", body)` - postar data som finns i body mot angiven route
  - `api.patch("/route", body)` - samma som `post` fast uppdaterar. EJ TESTAD
  - `api.delete("/route/{id}")` - Raderar objektet i angiven route med {id}
  - `api.login(body)` - skickar data som ligger i body mot /login routen. Body måste innehålla "username" och "password".


---

### Controllers
 #### Entries:
  * Hämta 20 senaste entries med `GET` (/api/entries)
  * Hämta ett specifikt entry efter ID med `GET` (/api/entries/{id})
  * Hämta alla entries en user har skrivit via en endpoint. med `GET` via endpoint (/api/entries nånting)
  * Skapa ett inlägg med `POST` (/api/entries)
  * Ta bort ett specifikt entry efter ID med `DELETE` (/api/entries)
  * Uppdatera ett specifikt entry efter ID med `PATCH` (/api/entries)
  * Man ska kunna söka efter en entry via dess titel (/api/entries/{title} kanske)

#### Comments:  
  * Hämta 20 senaste kommentarerna med `GET` (/api/comments)
  * Hämta en specifik kommentar med `GET` (/api/comments/{id})
  * Hämta alla kommentarerna som tillhör ett inlägg med `GET` via endpoint (/api/comments nånting)
  * Skapa en kommentar med `POST` (/api/comments/{id})
  * Ta bort en kommentar med `DELETE` (/api/comments/{id})
  * Uppdatera en kommentar med `PATCH` (Om vi får tid)


#### Users:
  * Hämta alla användare med `GET` (/api/users)
  * Hämta en specifik användare med `GET` (/api/users/{id})
  * Skapa en användare med `POST` (/register)


#### Likes:
  * Hämta alla likes länkade till en entry med `GET` (/api/likes/{entryId})
  * Skapa en like länkad till användaren som "Like":at och entryt som "Like":as med `POST` (/api/likes)
  * Ta bort en like med `DELETE`(/api/likes/{id})

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
      * components
        * Här finns komponenter
      * index.php

---

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
