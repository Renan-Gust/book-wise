<?php

use core\Router;

$router = new Router();

$router->get('/comments-most-recent', 'CommentsController@commentsMostRecent');
