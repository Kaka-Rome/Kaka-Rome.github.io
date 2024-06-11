<?php
$path = './assets/img/gallery';
$scan = scandir($path);
$categories = [];
foreach ($scan as $value) {
  if($value == '.' or $value == '..') continue;
  if(is_dir($path.'/'.$value)){
    array_push($categories, $value);
  }
}

foreach ($categories as $cat) {
  print($cat.'<br>');
}