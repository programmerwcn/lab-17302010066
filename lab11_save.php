<?php
/**
 * Created by PhpStorm.
 * User: christine
 * Date: 2018/6/19
 * Time: 9:36
 */
if($_FILES['file_upload']['error']>0){
    echo 'problem';
    exit;
}
$uploaded_file='music/'.$_FILES['file']['name'];
if(is_uploaded_file($_FILES['file']['tmp_name'])) {
    if (!move_uploaded_file($_FILES['file']['tmp_name'], $uploaded_file)) {
        echo 'fail to move to directory';
        exit;
    }
}
else{
    echo 'problem:possible file upload attack. Filename:'.$_FILES['picture']['name'];
    exit;
}
echo 'successfully';

$text=$_POST["edit_lyric"];
$fileName=$uploaded_file.'.lrc';
$myfile = fopen($fileName, "w") or die("Unable to open file!");

fwrite($myfile, $text);

fclose($myfile);
