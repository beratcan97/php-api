# php-api
A school assigment


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
