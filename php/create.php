<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	// Validate.
	if(trim($request['name']) === '' || (float)$request['price'] < 0)
	{
		return http_response_code(400);
	}
	$name = mysqli_real_escape_string($mysqli, trim($request['name']));
	$price = mysqli_real_escape_string($mysqli, (int)$request['price']);
	$sql = "INSERT INTO products (id,name,price) VALUES (null,'$name',$price)";
	if($mysqli->query($sql))
	{
		http_response_code(201);
		$product = [
		'id' => mysqli_insert_id($mysqli),'name' => $name,
		'price' => $price];
		echo json_encode($product);
	}
	else
	{
		http_response_code(422);
	}
}
