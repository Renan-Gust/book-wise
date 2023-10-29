<?php

namespace src\controllers;

use core\Controller;
use src\auth\Providers;
use src\auth\Auth;
use src\models\User;

class UserController extends Controller
{
    public $providers;
    public $auth;

    public function __construct(){
        $this->providers = new Providers();
        $this->auth = new Auth();
    }

    public function auth($args){
        $provider = $args["provider"];

        if(!in_array($provider, $this->providers->acceptedProviders)){
            $this->response([
                "message" => "Provider não aceito"
            ], 403);
        }

        $this->auth->auth(ucfirst($provider));
    }
    
    public function callback($args){
        $provider = $args["provider"];
        $user = $this->auth->auth(ucfirst($provider));

        $currentDay = date('Y-m-d H:i:s');

        $userExists = User::select()->where("email", $user["email"])->one();
        if($userExists){
            User::update([
                "name" => $user["name"],
                "avatar_url" => $user["photoURL"],
                "updated_at" => $currentDay
            ]);
        } else {
            User::insert([
                "name" => $user["name"],
                "email" => $user["email"],
                "avatar_url" => $user["photoURL"],
                "created_at" => $currentDay,
                "updated_at" => $currentDay
            ]);
        }

        $data = [
            "name" => $user["name"],
            "avatar_url" => $user["photoURL"],
            "token" => $user["token"],
        ];

        $this->response($data);
    }

    public function checkLogin($args){
        $provider = $args["provider"];

        $isAuthenticated = $this->auth->isAuthenticated($provider);

        $data = [
            "success" => $isAuthenticated
        ];

        $this->response($data);
    }
}
