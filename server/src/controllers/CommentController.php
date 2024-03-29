<?php

namespace src\controllers;

use core\Controller;
use src\models\Rating;

class CommentController extends Controller
{
    public function getCommentsMostRecent(){
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

        if(empty($ratings)){
            $ratings = Rating::select($fields)
            ->orderBy("ratings.created_at", "desc")
            ->join("users", "ratings.user_id", "=", "users.id")
            ->join("books", "ratings.book_id", "=", "books.id")
            ->limit(5)
            ->get();
        }

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

        $this->response($data);
    }

    public function getBookComments($args){
        $fields = [
            "users.name",
            "users.avatar_url",
            "ratings.description",
            "ratings.rate",
            "ratings.created_at"
        ];

        $ratings = Rating::select($fields)
        ->where("book_id", $args["id"])
        ->orderBy("ratings.created_at", "desc")
        ->join("users", "ratings.user_id", "=", "users.id")
        ->get();

        $data = [];

        foreach($ratings as $rating){
            $data[] = [
                "name" => $rating["name"],
                "avatar_url" => $rating["avatar_url"],
                "rate" => (int)$rating["rate"],
                "description" => $rating["description"],
                "created_at" => $rating["created_at"]
            ];
        }

        $this->response($data);
    }
}
