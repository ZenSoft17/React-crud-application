<?php

// this basic example by database request with delete method.

require "../config/connect.php";
$con = Connect();

function Delete($id)
{
    global $con;


    $sql = "DELETE FROM test WHERE tes_id = '$id'";
    if (mysqli_query($con, $sql)) {
        return ["success" => "Information has delete"];
    } else {
        return ["Error" => "Error has occurred in the database request"];
    };
};
