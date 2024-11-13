<?php

// basic endpoint for get method

require "./header/index.php";


if ($_SERVER["REQUEST_METHOD"] === "GET") {

    // include models and response.
    include("../data/get_select.php");
    $data = get_select();
    header('Content-Type: application/json');
    echo json_encode($data);
    $con->close();
    
} else {
    header('HTTP/1.1 405 Method Not Allowed');
    header('Content-Type: application/json');
    echo json_encode(["Error" => "The http method don't valid"]);
}