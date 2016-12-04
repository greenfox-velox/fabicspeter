<?php
define("HOSTNAME","localhost");
define("USERNAME","root");
define("PASSWORD","red123");
define("DATABASE","coffes");

$dbhandle=new mysqli(HOSTNAME,USERNAME,PASSWORD,DATABASE) or die("Unable to Connect DB");
?>
