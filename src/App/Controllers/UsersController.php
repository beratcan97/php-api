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
        //Creats hashed password
        $hashed = password_hash($user["password"], PASSWORD_BCRYPT);

        /**
         * Default 'completed' is false so we only need to insert the 'content'
         */
        $addOne = $this->db->prepare(
            'INSERT INTO users (username, password, createdAt) VALUES (:username, :password, :createdAt)'
        );
        /**
         * Insert the value from the parameter into the database
         */
        $addOne->execute(
            //ex [':content'  => $todo['content']]
            [':username'  => $user['username'],
            ':password'  => $hashed,
            ':createdAt'  => $user['createdAt']]
        );
    }
}
