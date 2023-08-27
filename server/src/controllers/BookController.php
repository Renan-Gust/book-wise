<?php

namespace src\controllers;

use core\Controller;
use src\models\Rating;

class BookController extends Controller
{
    public function popularBooks(){
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
                    "total" => 1
                ];
            } else {
                $result[$id]["rate"] += $rating["rate"];
                $result[$id]["total"] += 1;
            }
        }

        foreach(array_values($result) as $key => $value){
            if($value["rate"] / $value["total"] >= 4 && $value["total"] >= 2){
                $value["rate"] = ceil($value["rate"] / $value["total"]);

                $popularBooks[] = $value;
            }
        }

        $response = [
            "success" => true,
            "data" => $popularBooks
        ];

        $this->response($response);
    }
}
