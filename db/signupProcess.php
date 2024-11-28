<?php


require "./db/config.php";



if (isset($_POST['signup']) && $_SERVER['REQUEST_METHOD'] == "POST") {
    
    $firstname;
    $lastname;
    $username;
    $email;
    $password;

    $error = 0;

    if (isset($_POST['firstname']) && $_POST['firstname'] != "") {
        $firstname = $_POST["firstname"];

        if (isset($_POST["lastname"]) && $_POST['lastname'] != "") {
            $lastname = $_POST["lastname"];
        }else{
            echo "Enter your lastname";
            $error = 1;
        }
    }else{
        echo "Enter your firstname";
        $error = 1;
    }



}