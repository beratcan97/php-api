<?php
if (session_status() == PHP_SESSION_NONE) {
    session_set_cookie_params(3600);
    session_start();
}

require_once '../../vendor/autoload.php';

$container = require '../App/container.php';
$app = new \Slim\App($container);
$auth = require '../App/auth.php';
require '../App/cors.php';


/********************************
 *          ROUTES              *
 ********************************/
$app->get('/', function ($request, $response, $args) {
    return $this->view->render($response, 'index.php');
});

$app->get('/register', function ($request, $response, $args) {
    return $this->view->render($response, 'components/register.php');
});

$app->get('/login', function ($request, $response, $args) {
    return $this->view->render($response, 'components/login.php');
});

$app->get('/profile', function ($request, $response, $args) {
    return $this->view->render($response, 'profile.php');
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
        $_SESSION['userID'] = $user['userID'];
        $_SESSION['username'] = $user['username'];
        $_SESSION['admin'] = $user['admin'];

        return $response->withJson(['data' => [ $user['userID'], $user['username'], $user['admin'] ]]);
    }
    return $response->withJson(['error' => 'wrong password']);
});


$app->get('/logout', function ($request, $response, $args) {
    session_destroy();
    return $response->withRedirect("/");
});

// API
$app->group('/api', function () use ($app) {
    require_once 'partials/users_route.php';

    require_once 'partials/entries_route.php';

    require_once 'partials/comments_route.php';

    require_once 'partials/likes_route.php';
});

$app->run();
