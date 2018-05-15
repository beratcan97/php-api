<?php

namespace App\Controllers;

class LikesController
{
    private $db;

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
        // die(var_dump($like));
        $addOne = $this->db->prepare(
            'INSERT INTO likes (userID, entryID) VALUES (:userID, :entryID)'
        );

        $addOne->execute([
          ':userID'  => $like['userID'],
          ':entryID'  => $like['entryID']
        ]);
    }

    public function delete($likeID)
    {
        $statement = $db->prepare('DELETE FROM likes WHERE likeID = :likeID');
        $statement->execute(
        [':likeID'  => $likeID]
        );
    }
}
