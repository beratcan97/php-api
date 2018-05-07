<?php


use \App\Controllers\CommentsController as CommentsController;
use \App\Controllers\EntriesController as EntriesController;
use \App\Controllers\LikesController as LikesController;
use \App\Controllers\UsersController as UsersController;

require_once 'ConfigHandler.php';


$config = (new ConfigHandler())->getConfig();


$container = new \Slim\Container(['settings' => $config]);


$container['db'] = function ($c) {
    $db = $c['settings']['db'];
    $pdo = new PDO(
      'mysql:host=' . $db['host'] . ';dbname=' . $db['dbname'] . ';charset=utf8',
      $db['user'],
      $db['pass']
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    return $pdo;
};


$container['logger'] = function ($c) {
    $logger = new \Monolog\Logger('my_logger');
    $file_handler = new \Monolog\Handler\StreamHandler('../logs/app.log');
    $logger->pushHandler($file_handler);
    return $logger;
};


$container['view'] = function ($container) {
    return new \Slim\Views\PhpRenderer('../public/views/');
};


$container['comments'] = function ($c) {
    $commentsController = new CommentsController($c->get('db'));
    return $commentsController;
};

$container['entries'] = function ($c) {
    $entriesController = new EntriesController($c->get('db'));
    return $entriesController;
};

$container['likes'] = function ($c) {
    $likesController = new LikesController($c->get('db'));
    return $likesController;
};

$container['users'] = function ($c) {
    $usersController = new UsersController($c->get('db'));
    return $usersController;
};


return $container;
