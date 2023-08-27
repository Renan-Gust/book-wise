<?php

use core\Router;

$router = new Router();

$router->get('/comments-most-recent', 'CommentController@commentsMostRecent');
$router->get('/popular-books', 'BookController@popularBooks');
