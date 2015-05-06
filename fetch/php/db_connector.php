<?php
define('db_server', 'webcrunch.se.mysql');
define('db_username', 'webcrunch_se');
define('db_password', 'Lb435S6S');
define('db_database', 'webcrunch_se');
$connection = mysql_connect(db_server, db_username, db_password) or die(mysql_error());
$database = mysql_select_db(db_database) or die(mysql_error());
?>