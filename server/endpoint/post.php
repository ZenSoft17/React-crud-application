<?php

// basic endpoint for post method

require "./header/index.php";


if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // extraction data
    $json_data = file_get_contents("php://input");
    $data = json_decode($json_data, true);

    // key's testing and include models function or database calls.
    if ($data["key"] === "insert") {
        include("../data/post_insert.php");
        $data_response = post_insert($data["data"]);

        // api response
        header('Content-Type: application/json');
        echo json_encode($data_response);
        $con->close();
    } else if ($data["key"] === "update") {
        include("../data/update.php");
        $data_response = Update([
            "id" => $data["id"],
            "data" => $data["data"]
        ]);

        // api response
        header('Content-Type: application/json');
        echo json_encode($data_response);
        $con->close();
    } else if ($data["key"] === "delete") {
        include("../data/delete.php");
        $data_response = Delete($data["id"]);

        // api response
        header('Content-Type: application/json');
        echo json_encode($data_response);
        $con->close();
    } else {
        header('HTTP/1.1 400 Bad Request');
        echo json_encode(["Error this key don't valid"]);
    }
} else {
    header('HTTP/1.1 405 Method Not Allowed');
    header('Content-Type: application/json');
    echo json_encode(["Error" => "The http method don't valid"]);
}
