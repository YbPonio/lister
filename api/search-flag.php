<?php

$dsn ="mysql: host=localhost; dbname=lister; user=root; password=";

$conn = new PDO($dsn);

$search = $_GET['search'];

echo json_encode($conn->query("SELECT * FROM `flags` WHERE `common_name` LIKE '$search' ORDER BY `common_name` ASC")->fetch());

