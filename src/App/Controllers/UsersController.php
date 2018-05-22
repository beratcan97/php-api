<?php

namespace App\Controllers;

class UsersController
{
    private $db;

    public function __construct($pdo)
    {
        $this->db = $pdo;
    }

    public function getAll()
    {
        $getAll = $this->db->prepare('SELECT * FROM users');
        $getAll->execute();
        return $getAll->fetchAll();
    }

    public function getOne($userID)
    {
        $getOne = $this->db->prepare('SELECT * FROM users WHERE userID = :userID');
        $getOne->execute([':userID' => $userID]);
        return $getOne->fetch();
    }

    public function getOneByName($username)
    {
        $getOne = $this->db->prepare('SELECT * FROM users WHERE username = :username');
        $getOne->execute([':username' => $username]);
        return $getOne->fetch();
    }

    public function add($user)
    {
        $hashed = password_hash($user["password"], PASSWORD_BCRYPT);
        $date = date('Y-m-d, H:i:s');


        $addOne = $this->db->prepare(
            'INSERT INTO users (username, password, createdAt, admin) VALUES (:username, :password, :createdAt, :admin)'
        );

        $addOne->execute(
            [
              ':username'  => $user['username'],
              ':password'  => $hashed,
              ':createdAt'  => $date,
              ':admin' => false
            ]
        );
    }

        public function update($body, $id)
        {
            $statement = $this->db->prepare('UPDATE users SET username = :username, admin = :admin WHERE userID = :userID');
            $statement->execute([
            ":username" => $body['username'],
            ":admin" => $body['admin'],
            ":userID" => $id
          ]);

          return ['username' => $body['username']];
        }
}
