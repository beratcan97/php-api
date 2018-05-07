<?php
// COMMENTS
$app->get('/comments', function ($request, $response, $args) {
    $allEntries = $this->comments->getAll();
    return $response->withJson(['data' => $allComments]);
});

$app->get('/comments/{id}', function ($request, $response, $args) {
    $id = $args['id'];
    $singleComment = $this->comments->getOne($id);
    return $response->withJson(['data' => $singleComment]);
});

$app->post('/comments', function ($request, $response, $args) {
    $body = $request->getParsedBody();
    $newComment = $this->comments->add($body);
    return $response->withJson(['data' => $newComment]);
});

$app->delete('/comments', function ($request, $response, $args) {
    $this->comments->delete();
});

$app->patch('/comments', function ($request, $response, $args) {
    $body = $request->getParsedBody();
    $newComment = $this->comments->update($body);
    return $response->withJson(['data' => $newEntry]);
});
