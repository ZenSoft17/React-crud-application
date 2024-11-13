<?php 

// this basic example by database request with update method.

require "../config/connect.php";
$con = Connect();

function Update($data){

    global $con;

    $id = $data["id"];
    $data_con = $data["data"];

    $sql = "UPDATE test SET tes_data = '$data_con' WHERE tes_id = '$id'";
    if(mysqli_query($con, $sql)){
        return ["success" => "Information has update"];
    } else {
        return ["Error" => "Error has occurred in the database request"];
    }
};