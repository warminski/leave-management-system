<?php
$connection = mysqli_connect('localhost','root','','leave_system');
if(isset($_POST['email'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $leave_days = $_POST['leave_days'];
    $id = $_POST['id'];
    $result = mysqli_query($connection, "UPDATE user SET name='$name',email='$email',leave_days='$leave_days' WHERE id='$id' ");
    if($result){
        return 'data updated';
    }
}