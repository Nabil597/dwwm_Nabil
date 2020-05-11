<?php

include_once plugin_dir_path(__FILE__).'/helloWidget.php';

class HelloClass {

    public function __construct(){
        add_action('widgets_init', function(){register_widget('HelloWidget');});
        add_action('wp_enqueue_scripts',array($this, 'persoCSS'),15);
    }

    public function persoCSS() {
        wp_enqueue_style('Hellocss', plugins_url('helloworld/style.css'));
    }
}