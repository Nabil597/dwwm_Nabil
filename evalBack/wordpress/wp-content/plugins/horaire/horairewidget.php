<?php
class horairewidget extends WP_Widget {

    public function __construct() {

        parent::__construct('horaire', 'Horaire', array('description' => 'Un plug-in qui affiche les horaires du magasin'));
    }

    public function widget($arguments, $instance) {

        echo $arguments['before_widget'];
        echo $arguments['before_title'];
        echo apply_filters('widget_title', $instance['title']);
        echo $arguments['after_title'];
        
        // il aurait fallu ici faire une liste des jours avec un foreach afin d'afficher les jours de la semaine et les horaires correspondantes
        
        ?>
            <div id="journee"> <?php echo $jour;?> </div>
               
            
           
        <?php echo $arguments['after_widget'];

       
    }
}