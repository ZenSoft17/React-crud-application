<?php 

// this basic example by database request with insert method.

require "../config/connect.php";
$con = Connect();

function post_insert($data){

    global $con;

    $sql = "INSERT INTO test(tes_data) VALUES ('$data')";
    if(mysqli_query($con, $sql)){
        return ["success" => "Information has upload"];
    } else {
        return ["Error" => "Error has occurred in the database request"];
    }
};