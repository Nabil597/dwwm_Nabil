<?php
/*
Plugin Name: Horaire
Description: il affichera les horaires du magasin
Author: Nabil
Version: 1.0
*/

class Horaire_PLugin{
    
    public function __construct(){
        include_once plugin_dir_path(__FILE__).'/horaireClass.php';
        new HoraireClass();
        register_activation_hook(__FILE__, array('horaireClass', 'installCom'));
        register_deactivation_hook(__FILE__, array('horaireClass', 'uninstall'));
    }
}
new Horaire_Plugin();