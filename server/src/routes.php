<?php

use core\Router;

$router = new Router();

$router->get('/comments-most-recent', 'CommentController@getCommentsMostRecent');
$router->get('/books?{search}', 'BookController@getBooks');
$router->get('/popular-books', 'BookController@getPopularBooks');
$router->get('/book/{id}/categories', 'BookController@getBookCategories');
$router->get('/book/{id}/comments', 'CommentController@getBookComments');
$router->get('/categories', 'CategoryController@getCategories');
$router->get('/user/auth/{provider}', 'UserController@auth');
$router->get('/user/auth/{provider}/callback', 'UserController@callback');
$router->get('/user/auth/{provider}/check-login', 'UserController@checkLogin');