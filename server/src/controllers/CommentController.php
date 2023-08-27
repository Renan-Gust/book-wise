<?php

namespace src\controllers;

use core\Controller;
use src\models\Rating;

class CommentController extends Controller
{
    public function commentsMostRecent(){
        $date = Date("Y-m-d", strtotime('-7 days'));

        $fields = [
            "users.name",
            "users.avatar_url",
            "books.name" => "book_name",
            "books.summary",
            "books.cover_url",
            "books.author",
            "ratings.rate",
            "ratings.created_at"
        ];

        $ratings = Rating::select($fields)
        ->where("ratings.created_at", ">=", $date)
        ->orderBy("ratings.created_at", "desc")
        ->join("users", "ratings.user_id", "=", "users.id")
        ->join("books", "ratings.book_id", "=", "books.id")
        ->get();

        $data = [];

        foreach($ratings as $rating){
            $data[] = [
                "name" => $rating["name"],
                "avatar_url" => $rating["avatar_url"],
                "book_name" => $rating["book_name"],
                "summary" => $rating["summary"],
                "cover_url" => $this->getBaseUrl() . "/" . $rating["cover_url"],
                "author" => $rating["author"],
                "rate" => $rating["rate"],
                "created_at" => $rating["created_at"]
            ];
        }

        $response = [
            "success" => true,
            "data" => $data
        ];

        $this->response($response);
    }
}
