<?php
class hellowidget extends WP_Widget {

    public function __construct() {

        parent::__construct('helloworld', 'Hello World', array('description' => 'Un plug-in spécial'));
    }

    public function widget($arguments, $instance) {

        echo $arguments['before_widget'];
        echo $arguments['before_title'];
        echo apply_filters('widget_title', $instance['title']);
        echo $arguments['after_title'];
        ?>

        <form action="" method="post">
            <p>
                <label for="helloworld_comm">Votre commentaire :</label>
                <input id="helloworld_comm" name="helloworld_comm" type="texte">
            </P>
            <input type="submit">
        </form>        
            
        <?php
        echo $arguments['after_widget'];
    }
}