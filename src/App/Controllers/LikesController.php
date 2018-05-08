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

    public function getAll($entryID)
    {
        $getAllLikes = $this->db->prepare('SELECT * FROM likes WHERE $entryID = :entryID');
        $getAllLikes->execute([':entryID' => $entryID]);
        return $getOne->fetch();
    }

    public function add($like)
    {
        /**
         * Default 'completed' is false so we only need to insert the 'content'
         */
        $addOne = $this->db->prepare(
            'INSERT INTO likes (entryID, userID) VALUES (:entryID, :userID)'
        );

        /**
         * Insert the value from the parameter into the database
         */
        $addOne->execute(
            [':entryID'  => $like['entryID'],
             ':userID'  => $like['userID']]
        );
    }

    public function delete($likeID){
        $statement = $db->prepare('DELETE FROM likes WHERE likeID = :likeID');
        $statement->execute(
        [':likeID'  => $likeID]
        );
    }
}