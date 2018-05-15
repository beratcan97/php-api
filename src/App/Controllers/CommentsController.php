<?php

namespace App\Controllers;

class CommentsController
{
    private $db;

    public function __construct(\PDO $pdo)
    {
        $this->db = $pdo;
    }

    public function getAll()
    {
        $getAll = $this->db->prepare('SELECT * FROM comments ORDER BY commentID DESC LIMIT 20');
        $getAll->execute();
        return $getAll->fetchAll();
    }

    public function getAllByUser($userID)
    {
        $getAllByUser = $this->db->prepare('SELECT * FROM comments WHERE createdBy = :userID');
        $getAllByUser->execute([':userID' => $userID]);
        return $getAllByUser->fetchAll();
    }

    public function getAllByEntry($entryID)
    {
        $getAllByEntry = $this->db->prepare('SELECT comments.*, users.username AS "username"
          FROM comments
          INNER JOIN users ON comments.createdBy = users.userID
          WHERE entryID = :entryID');
        $getAllByEntry->execute([':entryID' => $entryID]);
        return $getAllByEntry->fetchAll();
    }

    public function getOne($id)
    {
        $getOne = $this->db->prepare('SELECT * FROM comments WHERE commentID = :id');
        $getOne->execute([':id' => $id]);
        return $getOne->fetch();
    }

    public function add($comment)
    {
        $date = date('Y-m-d, H:i:s');

        $addOne = $this->db->prepare(
            'INSERT INTO comments (content, createdAt, createdBy) VALUES (:content, :createdAt, :createdBy)'
        );

        $addOne->execute([
          ':content'  => $comment['content'],
          ':createdAt' => $date,
          ':createdBy' => $comment['createdBy']
        ]);
        
        // return [
        //   'commentID'          => (int)$this->db->lastInsertId(),
        //   'content'     => $comment['content'],
        //   'completed'   => false
        // ];
    }

    public function delete($id)
    {
        $addOne = $this->db->prepare(
            'DELETE FROM comments WHERE commentID = :commentID '
        );

        $addOne->execute([
          ':commentID'  => $id
        ]);
    }

    public function update($newContent, $commentID)
    {
        $statement = $this->db->prepare('UPDATE comments SET content = :content WHERE commentID = :commentID');
        $statement->execute([
        ":content" => $newContent,
        ":commentID" => $commentID
      ]);
    }
}
