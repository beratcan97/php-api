<?php
if (session_status() == PHP_SESSION_NONE) {
    session_set_cookie_params(3600);
    session_start();
}

require_once '../../vendor/autoload.php';

$container = require '../App/container.php';
$app = new \Slim\App($container);
$auth = require '../App/auth.php';
// require '../App/cors.php';


/********************************
 *          ROUTES              *
 ********************************/
$app->get('/', function ($request, $response, $args) {
    return $this->view->render($response, 'index.php');
});


$app->post('/login', function ($request, $response, $args) {
    $body = $request->getParsedBody();
    $fetchUserStatement = $this->db->prepare('SELECT * FROM users WHERE username = :username');
    $fetchUserStatement->execute([
        ':username' => $body['username']
    ]);
    $user = $fetchUserStatement->fetch();
    if (password_verify($body['password'], $user['password'])) {
        $_SESSION['loggedIn'] = true;
        $_SESSION['userID'] = $user['id'];
        return $response->withJson(['data' => [ $user['id'], $user['username'] ]]);
    }
    return $response->withJson(['error' => 'wrong password']);
});


$app->get('/logout', function ($request, $response, $args) {
    session_destroy();
    return $response->withJson('Success');
});

//  API
$app->group('/api', function () use ($app) {
    require_once 'partials/users_route.php';

    require_once 'partials/entries_route.php';

    require_once 'partials/comments_route.php';

    require_once 'partials/likes_route.php';
});

$app->run();
