<?php
// LIKES
$app->get('/likes', function ($request, $response, $args) {
    $allLikes = $this->get('likes')->getAll();
    return $response->withJson(['data' => $allLikes]);
});

$app->get('/likes/{id}', function ($request, $response, $args) {
    $id = $args['id'];
    $singleLike = $this->get('likes')->add($id);
    return $response->withJson(['data' => $singleLike]);
});

$app->delete('/register', function ($request, $response, $args) {
    $body = $request->getParsedBody();
    $deleteLike = $this->get('likes')->delete($body);
    return $response->withJson(['data' => $deleteLike]);
});
