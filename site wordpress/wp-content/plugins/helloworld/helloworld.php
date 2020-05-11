<?php
/*
Plugin Name: Hello World
Description: Hello world
Author: Martine
Version: 1.0
*/

class HelloWorld_PLugin{
    
    public function __construct(){
        include_once plugin_dir_path(__FILE__).'/helloClass.php';
        new HelloClass();
    }
}
new HelloWorld_Plugin();