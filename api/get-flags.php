<?php

$dsn = "mysql: host=localhost; dbname=lister; user=root; password=";

$conn = new PDO($dsn);

echo json_encode($conn->query("SELECT * FROM `flags` ORDER BY `flags`.`common_name` ASC")->fetchAll(PDO::FETCH_ASSOC));