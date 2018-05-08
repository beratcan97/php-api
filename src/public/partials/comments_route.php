<?php
// COMMENTS
$app->get('/comments', function ($request, $response, $args) {
    $allEntries = $this->get('comments')->getAll();
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

$app->delete('/comments', function ($request, $response, $args) {
    $this->get('comments')->delete();
});

$app->patch('/comments', function ($request, $response, $args) {
    $body = $request->getParsedBody();
    $newComment = $this->get('comments')->update($body);
    return $response->withJson(['data' => $newEntry]);
});
