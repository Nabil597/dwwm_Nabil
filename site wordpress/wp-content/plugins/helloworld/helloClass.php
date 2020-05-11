<?php

include_once plugin_dir_path(__FILE__).'/helloWidget.php';

class HelloClass {

    public function __construct(){
        add_action('widgets_init', function(){register_widget('HelloWidget');});
        add_action('wp_enqueue_scripts',array($this, 'persoCSS'),9);
        add_action('wp_loaded', array($this, 'save_comm'));
    }

    public function persoCSS() {
        wp_enqueue_style('Hellocss', plugins_url('helloworld/style.css'));
    }

    public static function install() {

        global $wpdb;
        $wpdb->query("CREATE TABLE IF NOT EXISTS {$wpdb->prefix}helloworld_commentaire (id INT AUTO_INCREMENT PRIMARY KEY, comm VARCHAR(255) NOT NULL);");
    }

    public static function uninstall() {

        global $wpdb;
        $wpdb->query("DROP TABLE IF EXISTS {$wpdb->prefix}helloworld_commentaire;");
    }

    public function save_comm() {

        if (isset($_POST['helloworld_comm']) && !empty($_POST['helloworld_comm']))
        {
            global $wpdb;
            $comm = $_POST['helloworld_comm'];
            $row = $wpdb->get_row("SELECT * FROM {$wpdb->prefix}helloworld_commentaire WHERE comm = '$comm'");

            if (is_null($row)) {
                $wpdb->insert("{$wpdb->prefix}helloworld_commentaire", array('comm' => $comm));
            }
        }
    }
}