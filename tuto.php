<?php
// phpinfo();

// FOR ERROR DISPLAYS...
ini_set("display_errors", 1);
ini_set("display_startup_errors", 1);
error_reporting(E_ALL);




// OUTPU BUFFERING...
ob_start();

// require_once("nvsijdnvs");



// VARIABLES
$name = "Peter";
$age = 31;

echo "My name is " . $name . ", I am " . $age . " years old.";
echo "<br>";


// ARRAYS
// Indexed array...
$fruits = array("Mango", "Apple");
$newFruits = ["Pawpaw", "Grape"];


echo $fruits[0] . "<br>";

print_r($fruits);
echo "<br>";
print_r($newFruits);

// Associative Arrays...
$user = [
    "firstname" => "Ayomide",
    "lastname" => "Rokibat",
    "state" => "Kanu"
];

echo "<br>";

print_r($user);

echo "<br>";

echo $user['lastname'];

// Multidimensional Arrays...
$nature = [
    "living" => [
        "plants" => [
            "green" => ["pumpkin", "Bitterleave", "waterleave"],
            "nonGreen" => ["flowers"]
        ],
        "animals" => ["lion", "Goat", "Cow"]
    ],
    "nonLiving" => ['paper', 'water', 'sand']
];

echo "<br>";
print_r($nature);

echo "<br>";

print_r($nature["living"]["plants"]["green"][0]);


// If statement...

echo "<br>";

if (is_array($fruits)) {
    // echo "Fruits is an array!";

    for ($i=0; $i < count($fruits); $i++) { 
        echo "<li>" . $fruits[$i] . "</li>";
    }
}else{
    echo "Fruits is not an array!";
}


// FUNCTIONS

function numCount($num) {
    // $start = 0;

    for ($i=0; $i <= $num; $i++) { 
        echo $i . "<br>";
    }
}


numCount(20);