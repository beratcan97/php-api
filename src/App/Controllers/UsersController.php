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

    public function add($user)
    {
        $hashed = password_hash($user["password"], PASSWORD_BCRYPT);
        $date = date('Y-m-d');

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
}
