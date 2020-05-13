<?php

include_once plugin_dir_path(__FILE__).'/horaireWidget.php';

class HoraireClass {

    public function __construct(){
        add_action('widgets_init', function(){register_widget('HoraireWidget');});
        add_action('wp_enqueue_scripts',array($this, 'persoCSS'),9);
        add_action('admin_menu', array($this, 'add_admin_menu'), 20);
        add_action('admin_init', array($this, 'register_settings'));
    }

    public static function install() {

        global $wpdb;
        $wpdb->query("CREATE TABLE IF NOT EXISTS {$wpdb->prefix}horaire (id INT AUTO_INCREMENT PRIMARY KEY, jours VARCHAR(55) NOT NULL, matin VARCHAR(55) NOT NULL, aprem VARCHAR(55) NOT NULL);");
    }

    public static function uninstall() {

        global $wpdb;
        $wpdb->query("DROP TABLE IF EXISTS {$wpdb->prefix}horaire;");
    }

    public function add_admin_menu() {

        add_menu_page('Horaire', 'Horaire plugin', 'manage_options', 'horaire', array($this, 'menu_html'));
    }


    public function menu_html() {

        echo '<h1>'.get_admin_page_title().'</h1>';
        ?>
        <form method="post" action="options.php">
        <label>Premier jour de la semaine</label>
        <input type="text" name="horaire_jour" value="<?php echo
        get_option("jour")?>"/>
        <label>Afficher tous les jours</label>
        <input type="text" name="horaire_all" value="<?php echo
        get_option("jour")?>"/>
        <?php submit_button();
        settings_fields('horaire_settings'); ?>
        </form>
        <?php
    }

    public function register_settings() {

        register_setting('horaire_settings', 'horaire_jour');
        register_setting('horaire_settings', 'horaire_all');
    }
}