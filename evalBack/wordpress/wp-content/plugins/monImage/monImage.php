<?php
/*
Plugin Name: monImage
Plugin URI: http://wordpress.org/plugins/hello-dolly/
Description: Ce plugin affichera une image dans un premier temps, puis une autre au passage de la souris
Author: Amichi Nabil
Version: 1.7.2
Author URI: http://ma.tt/
*/

function reverseImage() {

    echo '<div class="img"> </div>';
}

add_action( 'admin_notices', 'reverseImage' );

function image_css() {
    
    echo '
    <style type="text/css">
        .img {
            background: url("../wp-content/uploads/luffy.jpeg");
            height: 70vh;
            width: 70vw;
        }
        .img:hover {
            background: url("../wp-content/uploads/luffy2.jpg");
        }
    </style>';
}

add_action( 'admin_head', 'image_css');

// l'image s'affiche seulement du côté du menu admin à cause des add_action qui s'opère sur le côté admin, je ne sais pas comment l'afficher dnas le site directement