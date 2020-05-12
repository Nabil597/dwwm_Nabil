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
                <label for="helloworld_pseudo">Entrez votre pseudo :</label>
                <input id="helloworld_pseudo" name="helloworld_pseudo" type="text">
                <label for="helloworld_comm">Entrez votre commentaire :</label>
                <input id="helloworld_comm" name="helloworld_comm" type="text">
            </p>
            <input type="submit">
        </form>        
            
        <?php
        echo $arguments['after_widget'];
    }

    public function form($instance) {

        $title = isset($instance['title']) ? $instance['title'] : '';
        ?>
        <p>
        <label for="<?php echo $this->get_field_name(  'title'  ); ?>"><?php _e(  'Title:'  );?></label>
        <input class="widefat" id="<?php echo $this->get_field_id(  'title'  ); ?>" name="<?php echo $this->get_field_name(  'title'  ); ?>" type="text" value="<?php echo $title; ?>" />
        </p>
        <?php
    }
}