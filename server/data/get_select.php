<?php 

// this basic example by database request with select method.

require "../config/connect.php";
$con = Connect();

function get_select(){

    global $con;

    $sql = "SELECT * FROM test";
    $query = mysqli_query($con, $sql);
    if($query){
        $data = [];
        while($row = mysqli_fetch_assoc($query)){
            $data[] = ["id" => $row["tes_id"], "data" => $row["tes_data"]];
        };
        return ["data" => $data];
    } else {
        return ["Error has occurred in the database request"];
    };
};