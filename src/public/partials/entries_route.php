<?php
// ENTRIES
$app->get('/entries', function ($request, $response, $args) {
    $allEntries = $this->get('entries')->getAll();
    return $response->withJson(['data' => $allEntries]);
});

$app->get('/entries/user/{id}', function ($request, $response, $args) {
    $id = $args['id'];
    $allEntries = $this->get('entries')->getAllByUser($id);
    return $response->withJson(['data' => $allEntries]);
});

$app->get('/entries/{id}', function ($request, $response, $args) {
    $id = $args['id'];
    $singleEntry = $this->get('entries')->getOne($id);
    return $response->withJson(['data' => $singleEntry]);
});

$app->post('/entries', function ($request, $response, $args) {
    $body = $request->getParsedBody();
    $newEntry = $this->get('entries')->add($body);
    return $response->withJson(['data' => $newEntry]);
});

$app->delete('/entries/{id}', function ($request, $response, $args) {
    $id = $args['id'];
    $deleteEntry = $this->get('entries')->delete($id);
    return $response->withJson(['data' => $deleteEntry]);
});

$app->patch('/entries', function ($request, $response, $args) {
    $body = $request->getParsedBody();
    $selectedEntry = $this->get('entries')->update($title, $newContent, $entryID);
    return $response->withJson(['data' => $selectedEntry]);
});
