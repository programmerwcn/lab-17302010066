<?php

function generateLink($url, $label, $class) {
   $link = '<a href="' . $url . '" class="' . $class . '">';
   $link .= $label;
   $link .= '</a>';
   return $link;
}


function outputPostRow($number)  {
    include("travel-data.inc.php");
    $srcOfImg='images/'.${"thumb".$number};
    $strOfPicture='<div class="row">'.
        '<div class="col-md-4">'.
        '<img src="'.$srcOfImg.'"'.'>'.
        '</div>'.
        '<div class="col-md-8">'.
        '<h2>'.
        ${"title".$number}.
        '</h2>'.
        '<p>'.
        'POSTED BY '.
        generateLink('',${"userName".$number},'').
        '</p>'.
        constructRating(${"reviewsRating".$number}).
        ${"reviewsNum".$number}.
        ' REVIEWS'.
        '<p>'.
        ${"excerpt".$number}.
        '</p>'.
        '<button type="button" class="btn btn-warning btn-sm">Read more</button>'.
        '</div>'.
        '</div>'.
        '<hr>';
    echo $strOfPicture;
}

/*
  Function constructs a string containing the <img> tags necessary to display
  star images that reflect a rating out of 5
*/
function constructRating($rating) {
    $imgTags = "";
    
    // first output the gold stars
    for ($i=0; $i < $rating; $i++) {
        $imgTags .= '<img src="images/star-gold.svg" width="16" />';
    }
    
    // then fill remainder with white stars
    for ($i=$rating; $i < 5; $i++) {
        $imgTags .= '<img src="images/star-white.svg" width="16" />';
    }    
    
    return $imgTags;    
}

?>