<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$name = trim($request->name);
$pwd = mysqli_real_escape_string($mysqli, trim($request->pwd));
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$sql = "INSERT INTO user(name,password,email) VALUES ('$name','$pwd','$email')";

$ris_u = "SELECT * FROM user WHERE name = '$name'";
//$ris_e = "SELECT * FROM user WHERE email = '$email'";

if(mysqli_num_rows($ris_u) == 0) {
  if ($mysqli->query($sql) === TRUE) {
    $authdata = [
    'name' => $name,
    'pwd' => '',
    'email' => $email,
    'Id' => mysqli_insert_id($mysqli)
    ];
    echo json_encode($authdata);
    }
    }
} else {
  echo "alert('something went wrong')";
}
?>
