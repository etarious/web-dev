<?php

// FOR ERROR DISPLAYS...
ini_set("display_errors", 1);
ini_set("display_startup_errors", 1);
error_reporting(E_ALL);




// OUTPU BUFFERING...
ob_start();


$host = "localhost";
$user = "etarious";
$password = "password";
$db = "web-dev";



$conn = mysqli_connect($host, $user, $password, $db) or die("Cannot connect to the database at the moment");

// if ($conn) {
//     echo "Conection successful";
// }



$create_sql = "CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(64) NOT NULL,
    lastname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

$query = mysqli_query($conn, $create_sql);

if (!$query) {
    echo "There was an error:" . mysqli_error($conn);
}