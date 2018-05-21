<?php
if (session_status() == PHP_SESSION_NONE) {
    session_unset();
    // session_set_cookie_params(30); TEST TIMER
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
    if (!$request->isXhr()) {
        return $this->view->render($response, 'components/register.php');
    }
});

$app->get('/login', function ($request, $response, $args) {
    return $this->view->render($response, 'components/login.php');
});

$app->get('/profile/{username}', function ($request, $response, $args) {
    return $this->view->render($response, 'profile.php');
});

$app->get('/admin', function ($request, $response, $args) {
    return $this->view->render($response, 'admin.php');
});

$app->get('/entries/{id}', function ($request, $response, $args) {
    if (!$request->isXhr()) {
        return $this->view->render($response, 'entries.php');
    }
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
    };
    return $response->withJson(['error' => 'wrong password']);
});

$app->post('/register', function ($request, $response, $args) {
    $body = $request->getParsedBody();
    $registerUser = $this->db->prepare(
    'INSERT INTO users (username, password, createdAt, admin) VALUES (:username, :password, :createdAt, :admin)'
  );
    $hashed = password_hash($body["password"], PASSWORD_BCRYPT);
    $date = date('Y-m-d, H:i:s');

    $registerUser->execute(
    [
      ':username'  => $body['username'],
      ':password'  => $hashed,
      ':createdAt'  => $date,
      ':admin' => false
    ]
  );

  return $response->withJson(['data' => $body['username']]);
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
