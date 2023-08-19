<?php

namespace src;

date_default_timezone_set('America/Sao_Paulo');

class Config
{
    const BASE_DIR = '/projetos/book-wise/server/public';

    const DB_DRIVER = 'mysql';
    const DB_HOST = 'localhost';
    const DB_DATABASE = 'book_wise';
    const DB_USER = 'root';
    const DB_PASS = '';

    const ERROR_CONTROLLER = 'ErrorController';
    const DEFAULT_ACTION = 'index';
}
