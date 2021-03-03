<?php
include_once("database.php");
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	if (trim($request['name']) == '' || (float)$request['price'] < 0) {
		return http_response_code(400);
	}
	$id = mysqli_real_escape_string($mysqli, (int)$request['id']);
	$name = mysqli_real_escape_string($mysqli, trim($request['name']));
	$price = mysqli_real_escape_string($mysqli, (float)$request['price']);
	$sql = "UPDATE products SET name='$name',price=$price WHERE id = $id";

	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}
