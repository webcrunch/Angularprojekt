<?php 
require_once 'db_connector.php'; // The mysql database connection script
$status = '%';
if(isset($_GET['status'])){
$status = $_GET['status'];
}
$query=mysql_query("select * from employeed") or die(mysql_error());

# Collect the results
while($obj = mysql_fetch_object($query)) {
   $arr[] = $obj;
}

# JSON-encode the response
echo $json_response = json_encode($arr);
#?>