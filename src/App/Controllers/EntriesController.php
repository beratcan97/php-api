<?php

namespace App\Controllers;

class TodoController
{
    private $db;

    /**
     * Dependeny Injection (DI): http://www.phptherightway.com/#dependency_injection
     * If this class relies on a database-connection via PDO we inject that connection
     * into the class at start. If we do this TodoController will be able to easily
     * reference the PDO with '$this->db' in ALL functions INSIDE the class
     * This class is later being injected into our container inside of 'App/container.php'
     * This results in we being able to call '$this->get('Todos')' to call this class
     * inside of our routes.
     */
    public function __construct(\PDO $pdo)
    {
        $this->db = $pdo;
    }

    public function getAll()
    {
        $getAll = $this->db->prepare('SELECT * FROM entries');
        $getAll->execute();
        return $getAll->fetchAll();
    }

    public function getOne($id)
    {
        $getOne = $this->db->prepare('SELECT * FROM entries WHERE id = :id');
        $getOne->execute([':id' => $id]);
        return $getOne->fetch();
    }

    public function add($entry)
    {
        
        $addOne = $this->db->prepare(
            'INSERT INTO entries (title, content, createdBy, createdAt) VALUES (:title, :content, :createdBy, :createdAt)'
        );

        /**
         * Insert the value from the parameter into the database
         */
        $addOne->execute([':title'  => $entry['title'],
                         ':content'  => $entry['content'],
                         ':createdBy'  => $entry['createdBy'],
                         ':createdAt'  => $entry['createdAt']]);

        /**
         * A INSERT INTO does not return the created object. If we want to return it to the user
         * that has posted the entry we must build it ourself or fetch it after we have inserted it
         * We can always get the last inserted row in a database by calling 'lastInsertId()'-function
         */
        return [
          'id'          => (int)$this->db->lastInsertId(),
          'title'     => $entry['title'],
          'content'     => $entry['content'],
          'createdBy'     => $entry['createdBy'],
          'createdAt'     => $entry['createdAt']
          
        ];
    }

    public function delete($id)
    {
        $addOne = $this->db->prepare(
            'DELETE FROM entries WHERE entryID = :entryID '
        );

        $addOne->execute([
          ':entryID'  => $id
        ]);
    }

    public function update($title, $newContent, $entryID)
    {
        $statement = $this->db->prepare("UPDATE entries SET title = :title, content = :content WHERE entryID = :entryID");
        $statement->execute([
        ":title" => $title,
        ":content" => $newContent,
        ":entryID" => $entryID
      ]);
    }
}
