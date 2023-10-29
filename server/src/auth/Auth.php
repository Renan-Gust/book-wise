<?php

namespace src\auth;

use src\auth\Providers;
use Hybridauth\Hybridauth;

class Auth extends Providers {
    public function auth($provider){
        try{
            $hybridauth  = new Hybridauth($this->config);
            $adapter = $hybridauth->authenticate($provider); 

            $accessToken = $adapter->getAccessToken();
            $userProfile = $adapter->getUserProfile();

            $user = [
                "name" => $userProfile->displayName,
                "email" => $userProfile->email,
                "photoURL" => $userProfile->photoURL,
                "token" => $accessToken
            ];

           return $user;
        }
        catch(\Exception $e){
            echo 'Oops, we ran into an issue! ' . $e->getMessage();
            exit;
        }
    }

    public function isAuthenticated($provider){
        $hybridauth = new Hybridauth($this->config);
        $adapter = $hybridauth->getAdapter($provider);

        if ($adapter->isConnected()){
            return true;
        } else{
            return false;
        }
    }
}