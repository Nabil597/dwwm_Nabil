<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'wordpress' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'wordpress' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'wordpress' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'iO`~rGdXI;el|l_ :-34~zPh`vfI^I}|kh$&sdLQL?X ]^&!mY8F!-LaQQxQ4l6]' );
define( 'SECURE_AUTH_KEY',  'n&Z19q8{]{Ov6yQ{iK#ts]sXz+z?2xv.TQw?.$_uTUztM_y1i{,X=-r]GZ=NPlnM' );
define( 'LOGGED_IN_KEY',    '/u|Au><;PAMTIHb/X$1:C0PLSaYVTATr,~!c;NQjy= n1dI@y|t+c7T{`ABp*Pu&' );
define( 'NONCE_KEY',        'Qv9^|`L#H^52{S_&7>Dw-uH9a)t =Ri}^-%8mJ`Ow <vjk2zMZboXj%8f(,9>1?A' );
define( 'AUTH_SALT',        'K:+,Q*?0ar2fiYAW%Z C``Yb[0V?k!bFA;NgIn;qbwJpD09<U[NcMqu!&UOHSq_4' );
define( 'SECURE_AUTH_SALT', 'OQ![$l9<i&uIOg2BsWnFa10QBy%ZE!;]Y)K3SZ9:bgj|V>*jn=[1HeW3qL>{[8JH' );
define( 'LOGGED_IN_SALT',   '*EjDUzML%ohf~`U3Q@qJZt2EY3]ihRTk}p7n(Sx_Y6s8Tn1+ 0iJc3W<xy[^Ka6(' );
define( 'NONCE_SALT',       'V|>tgoZ$u=a9s2)qv^*BfJ{+(K0tCi3Ml:3it&zIN/j:|GJU3,)K&>yjjZ_[=.9!' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp2_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
