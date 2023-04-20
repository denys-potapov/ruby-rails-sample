<?php

// this is probably ok
$result = `ls -l`;
var_dump($result);

// this is not ok
$result = `ls $dir`;
var_dump($result);

eval('something');