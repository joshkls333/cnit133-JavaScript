<?php
// Prevent caching
header("Expires: Mon, 28 Nov 2016 05:00:00 GMT");
header("Cache-Control: no-cache");
header("Pragma: no-cache");

// Set the array of image names
$images = array('curry.png',
    'green.png',
    'thompson.png',
    'iguodala.png',
    'durant.png',
    'livingston.png',
    'pachulia.png');

// Get new index based on the passed index and the direction.
// By using modulus on the size of the $images array, we can cycle from the first image to the last
// and vice versa.
$index = ($_GET['index'] + count($images) + $_GET['dir']) % count($images);

// Return: imageName^index
echo($images[$index] . "^" . $index);
?>