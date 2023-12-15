<?php

namespace src\auth;

use core\Controller;
use src\auth\Providers;
use Hybridauth\Hybridauth;

use League\OAuth2\Client\Provider\Google;

class Auth extends Providers {
    public function auth($provider){
        try{
            // $hybridauth  = new Hybridauth($this->config);
            // $adapter = $hybridauth->authenticate($provider); 

            // $accessToken = $adapter->getAccessToken();
            // $userProfile = $adapter->getUserProfile();

            // $user = [
            //     "name" => $userProfile->displayName,
            //     "email" => $userProfile->email,
            //     "photoURL" => $userProfile->photoURL,
            //     "token" => $accessToken
            // ];

            // return $user;

            $provider = new Google([
                'clientId'     => '276492252180-0747sh7rhjvtgt35kht9skknt9kr383q.apps.googleusercontent.com',
                'clientSecret' => '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',
                'redirectUri'  => 'http://localhost/projetos/book-wise/server/public/user/auth/google/callback',
            ]);
            
            if (!empty($_GET['error'])) {
            
                // Got an error, probably user denied access
                exit('Got error: ' . htmlspecialchars($_GET['error'], ENT_QUOTES, 'UTF-8'));
            
            } elseif (empty($_GET['code'])) {
            
                // If we don't have an authorization code then get one
                $authUrl = $provider->getAuthorizationUrl();
                $_SESSION['oauth2state'] = $provider->getState();
                header('Location: ' . $authUrl);
                exit;
            
            } elseif (empty($_GET['state']) || ($_GET['state'] !== $_SESSION['oauth2state'])) {
            
                // State is invalid, possible CSRF attack in progress
                unset($_SESSION['oauth2state']);
                exit('Invalid state');
            
            } else {
            
                // Try to get an access token (using the authorization code grant)
                $token = $provider->getAccessToken('authorization_code', [
                    'code' => $_GET['code']
                ]);
            
                // Optional: Now you have a token you can look up a users profile data
                try {
            
                    // We got an access token, let's now get the owner details
                    $ownerDetails = $provider->getResourceOwner($token);
            
                    // Use these details to create a new profile
                    printf('Hello %s!', $ownerDetails->getFirstName());
            
                } catch (Exception $e) {
            
                    // Failed to get user details
                    exit('Something went wrong: ' . $e->getMessage());
            
                }

                Controller::response(["Url" => $authUrl = $provider->getAuthorizationUrl()]);
            
                // Use this to interact with an API on the users behalf
                echo $token->getToken();
            
                // Use this to get a new access token if the old one expires
                echo $token->getRefreshToken();
            
                // Unix timestamp at which the access token expires
                echo $token->getExpires();

                echo "<br>";

                echo "<pre>";
                print_r($token);
                echo "<pre>";

                exit;
            }
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