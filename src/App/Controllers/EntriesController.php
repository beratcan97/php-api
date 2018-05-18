<?php

namespace App\Controllers;

class EntriesController
{
    private $db;

    public function __construct(\PDO $pdo)
    {
        $this->db = $pdo;
    }

    public function getAll()
    {
        $getAll = $this->db->prepare('SELECT entries.*,
          users.username AS "entryUsername"
          FROM entries
          INNER JOIN users ON users.userID = entries.createdBy
          ORDER BY entries.entryID DESC LIMIT 20');
        $getAll->execute();
        return $getAll->fetchAll();
    }

    public function getAllByUser($createdBy)
    {
        $getAll = $this->db->prepare('SELECT entries.*,
          users.username AS "entryUsername"
          FROM entries
          INNER JOIN users ON users.userID = entries.createdBy
          WHERE entries.createdBy = :createdBy
          ORDER BY entries.entryID DESC');
        $getAll->execute([
          ':createdBy' => $createdBy
        ]);
        return $getAll->fetchAll();
    }

    public function getOne($id)
    {
        $getOne = $this->db->prepare('SELECT entries.*,
          users.username AS "entryUsername"
          FROM entries
          INNER JOIN users ON users.userID = entries.createdBy
          WHERE entries.entryID = :entryID');
        $getOne->execute([':entryID' => $id]);
        return $getOne->fetch();
    }

    public function add($entry)
    {
        $addOne = $this->db->prepare(
            'INSERT INTO entries (title, content, createdBy, createdAt) VALUES (:title, :content, :createdBy, :createdAt)'
        );

        $date = date('Y-m-d, H:i:s');

        $addOne->execute([':title'  => $entry['title'],
                         ':content'  => $entry['content'],
                         ':createdBy'  => $entry['createdBy'],
                         ':createdAt'  => $date
                       ]);

        return [
          'id'          => (int)$this->db->lastInsertId(),
          'title'     => $entry['title'],
          'content'     => $entry['content'],
          'createdBy'     => $entry['createdBy'],
          'createdAt'     => $date
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

    public function update($entry, $id)
    {
        $statement = $this->db->prepare('UPDATE entries SET title = :title, content = :content WHERE entryID = :entryID');
        $statement->execute([
        ":title" => $entry['title'],
        ":content" => $entry['content'],
        ":entryID" => $id
      ]);
    }
}
