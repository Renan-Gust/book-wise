<?php

namespace src\auth;

class Providers {
    public $acceptedProviders = ["google", "github"];

    public $config;
    private $googleId;
    private $googleSecret;

    public function __construct(){
        $this->googleId = $_ENV['GOOGLE_ID'];
        $this->googleSecret = $_ENV['GOOGLE_SECRET'];
    
        $this->config = [
            'callback' => 'http://localhost/projetos/book-wise/server/public/user/auth/google/callback',
            'providers' => [
                'Google' => [
                    'enabled' => true,
                    'keys' => [
                        'id' => $this->googleId,
                        'secret' => $this->googleSecret
                    ],
                    'scope' => 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email'
                ],
            ]
        ];

    }
}