<?php
// ENTRIES
$app->get('/entries', function ($request, $response, $args) {
    $allEntries = $this->entries->getAll();
    return $response->withJson(['data' => $allEntries]);
});

$app->get('/entries/{id}', function ($request, $response, $args) {
    $id = $args['id'];
    $singleEntry = $this->entries->getOne($id);
    return $response->withJson(['data' => $singleEntry]);
});

$app->post('/entries', function ($request, $response, $args) {
    $body = $request->getParsedBody();
    $newEntry = $this->entries->add($body);
    return $response->withJson(['data' => $newEntry]);
});

$app->delete('/entries', function ($request, $response, $args) {
    $this->entries->delete();
});

$app->patch('/entries', function ($request, $response, $args) {
    $body = $request->getParsedBody();
    $newEntry = $this->entries->update($body);
    return $response->withJson(['data' => $newEntry]);
});