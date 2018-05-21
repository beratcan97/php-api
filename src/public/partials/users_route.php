<?php
// USERS
$app->get('/users', function ($request, $response, $args) {
    $allUsers = $this->get('users')->getAll();
    return $response->withJson(['data' => $allUsers]);
});

$app->get('/users/{id}', function ($request, $response, $args) {
    $id = $args['id'];
    $singleUser = $this->get('users')->getOneByName($id);
    return $response->withJson(['data' => $singleComment]);
});
