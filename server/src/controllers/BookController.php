<?php

namespace src\controllers;

use core\Controller;
use src\models\Book;
use src\models\BooksCategory;
use src\models\Rating;

class BookController extends Controller
{
    public function getBooks($args){
        var_dump($args["search"]);
        exit;
        $books = Book::select()->orderBy("created_at", "desc")->get();
        $data = [];

        foreach($books as $book){
            $rating = Rating::select()->where("book_id", $book["id"])->one();

            $bookCategories = BooksCategory::select("categories.name")
            ->where("book_id", $book["id"])
            ->join("categories", "books_categories.category_id", "=", "categories.id")
            ->get();

            $categories = [];

            foreach($bookCategories as $bookCategory){
                $categories[] = $bookCategory['name'];
            }

            $data[] = [
                "id" => $book["id"],
                "name" => $book["name"],
                "author" => $book["author"],
                "summary" => $book["summary"],
                "cover_url" => $this->getBaseUrl() . "/" . $book["cover_url"],
                "total_pages" => $book["total_pages"],
                "rate" => $rating ? $rating["rate"] : 0,
                "categories" => $categories
            ];
        }

        $this->response($data);
    }

    public function getPopularBooks(){
        $fields = [
            "books.name",
            "books.cover_url",
            "books.author",
            "books.summary",
            "books.total_pages",
            "ratings.book_id",
            "ratings.rate",
        ];

        $ratings = Rating::select($fields)
        ->orderBy("ratings.rate", "desc")
        ->join("books", "ratings.book_id", "=", "books.id")
        ->get();

        $result = [];
        $popularBooks = [];

        foreach($ratings as $rating){
            $id = $rating["book_id"];

            if (!isset($result[$id])) {
                $result[$id] = [
                    "id" => $id,
                    "name" => $rating["name"],
                    "author" => $rating["author"],
                    "cover_url" => $this->getBaseUrl() . "/" . $rating["cover_url"],
                    "summary" => $rating["summary"],
                    "total_pages" => $rating["total_pages"],
                    "rate" => $rating["rate"],
                    "totalRate" => 1
                ];
            } else {
                $result[$id]["rate"] += $rating["rate"];
                $result[$id]["totalRate"] += 1;
            }
        }

        foreach(array_values($result) as $key => $value){
            if($value["rate"] / $value["totalRate"] >= 4 && $value["totalRate"] >= 2){
                $value["rate"] = ceil($value["rate"] / $value["totalRate"]);

                $popularBooks[] = $value;
            }
        }

        $this->response($popularBooks);
    }

    public function getBookCategories($args){
        $categories = BooksCategory::select("categories.name")
        ->where("book_id", $args["id"])
        ->join("categories", "books_categories.category_id", "=", "categories.id")
        ->get();

        $data = [];

        foreach($categories as $category){
            $data[] = $category['name'];
        }

        $this->response($data);
    }
}
