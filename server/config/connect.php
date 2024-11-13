<?php


function Connect()
{

    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "react_testing";


    $con = new mysqli($host,$user,$pass,$db);

    if($con->error){
        return "Error has occurred in data base connection";
    } else {
        return $con;
    };
};
