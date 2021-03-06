<?php
// COMMENTS
$app->get('/comments', function ($request, $response, $args) {
    $allComments = $this->get('comments')->getAll();
    return $response->withJson(['data' => $allComments]);
});

$app->get('/comments/user/{id}', function ($request, $response, $args) {
    $id = $args['id'];
    $allComments = $this->get('comments')->getAllByUser($id);
    return $response->withJson(['data' => $allComments]);
});

$app->get('/comments/entries/{id}', function ($request, $response, $args) {
    $id = $args['id'];
    $allComments = $this->get('comments')->getAllByEntry($id);
    return $response->withJson(['data' => $allComments]);
});

$app->get('/comments/{id}', function ($request, $response, $args) {
    $id = $args['id'];
    $singleComment = $this->get('comments')->getOne($id);
    return $response->withJson(['data' => $singleComment]);
});

$app->post('/comments', function ($request, $response, $args) {
    $body = $request->getParsedBody();
    $newComment = $this->get('comments')->add($body);
    return $response->withJson(['data' => $newComment]);
});

$app->delete('/comments/{id}', function ($request, $response, $args) {
    $id = $args['id'];
    $deleteComment = $this->get('comments')->delete($id);
    return $response->withJson(['data' => $deleteComment]);
});

$app->patch('/comments', function ($request, $response, $args) {
    $body = $request->getParsedBody();
    $newComment = $this->get('comments')->update($body);
    return $response->withJson(['data' => $newEntry]);
});
