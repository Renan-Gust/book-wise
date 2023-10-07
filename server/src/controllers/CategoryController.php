<?php

namespace src\controllers;

use core\Controller;
use src\models\Category;

class CategoryController extends Controller
{
    public function getCategories(){
        $categories = Category::select()->get();
        $data = [];

        foreach($categories as $category){
            $data[] = $category["name"];
        }

        $this->response($data);
    }
}
