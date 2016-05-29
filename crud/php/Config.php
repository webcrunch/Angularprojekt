<?php

/******** Database Details **************/

$host = "webcrunch.se.mysql";
$user = "webcrunch_se";
$pass = "Lb435S6S"; 
$database = "webcrunch_se";
$con = mysql_connect($host,$user,$pass);

if (!$con){
	die ('Could not connect: ' . mysql_error());
}

//echo 'Connected successfully';

mysql_select_db($database,$con);
 
/*******************************/
 
?>