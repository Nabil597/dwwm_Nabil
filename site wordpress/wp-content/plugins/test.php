<?php
/**
 * @package Hello_Dolly
 * @version 1.7.2
 */
/*
Plugin Name: test
Plugin URI: http://wordpress.org/plugins/hello-dolly/
Description: This is not just a plugin, it symbolizes the hope and enthusiasm of an entire generation summed up in two words sung most famously by Louis Armstrong: Hello, Dolly. When activated you will randomly see a lyric from <cite>Hello, Dolly</cite> in the upper right of your admin screen on every page.
Author: Me
Version: 1.7.2
Author URI: http://ma.tt/
*/

function test() {
    echo "<div class='test'>test pluggin </div>";
}

add_action( 'admin_notices', 'test' );

// function test_css() {
//     echo "
//     <style type='text/css'>
//     .test{
//         color:red;
//     }";
// }

// add_action( 'admin_head', 'test_css' );