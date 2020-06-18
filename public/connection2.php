<?php
$connection = mysqli_connect('localhost','root','','leave_system');
if(isset($_POST['user_id'])){
    $user_id = $_POST['user_id'];
    $startDate = $_POST['startDate'];
    $endDate = $_POST['endDate'];
    $result = mysqli_query($connection, "INSERT INTO leaves (user_id,startDate,endDate)  VALUES ('$user_id','$startDate','$endDate')");
    if($result){
        return 'data updated';
    }
}