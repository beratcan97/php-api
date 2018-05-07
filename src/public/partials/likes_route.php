<?php
// LIKES
$app->get('/likes', function ($request, $response, $args) {
    $allLikes = $this->likes->getAll();
    return $response->withJson(['data' => $allLikes]);
});

$app->get('/likes/{id}', function ($request, $response, $args) {
    $id = $args['id'];
    $singleLike = $this->likes->add($id);
    return $response->withJson(['data' => $singleLike]);
});

$app->delete('/register', function ($request, $response, $args) {
    $body = $request->getParsedBody();
    $deleteLike = $this->likes->delete($body);
    return $response->withJson(['data' => $deleteLike]);
});
