<?php
// LIKES
// $app->get('/likes', function ($request, $response, $args) {
//     $allLikes = $this->get('likes')->getAll();
//     return $response->withJson(['data' => $allLikes]);
// });

$app->get('/likes/{id}', function ($request, $response, $args) {
    $id = $args['id'];
    $singleLike = $this->get('likes')->getAll($id);
    return $response->withJson(['data' => $singleLike]);
});

$app->delete('/likes/{id}', function ($request, $response, $args) {
    $id = $args['id'];
    $deleteLike = $this->get('likes')->delete($id);
    return $response->withJson(['data' => $deleteLike]);
});

$app->post('/likes', function ($request, $response, $args) {
    $body = $request->getParsedBody();
    $addLike = $this->get('likes')->add($body);
    return $response->withJson(['data' => $addLike]);
});
