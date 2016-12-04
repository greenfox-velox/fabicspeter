<?php
include "connectdb.php";
$data=json_decode(file_get_contents("php://input"));
$id=$dbhandle->real_escape_string($data->id);
$name=$dbhandle->real_escape_string($data->name);

$query="UPDATE student SET studname = '"$name"' WHERE studid=$id ";
$dbhandle->query($query);

// $query="select * from student";
// //$data = array();
// $rs=$dbhandle->query($query);
//
// while ($row = $rs->fetch_array()) {
//   $data[] = $row;
// }
//
//     print json_encode($data);
		// $id=$dbhandle->real_escape_string($data->id);
    //    $name=$dbhandle->real_escape_string($data->name);
    //    	$query="UPDATE student SET studname = '".$name."' WHERE studid=.$id. ";
    //    	$dbhandle->query($query);

?>
