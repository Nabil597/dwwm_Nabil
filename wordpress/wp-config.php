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
define( 'DB_NAME', 'wp1' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'wp1' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'wp1' );

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
define( 'AUTH_KEY',         '`+bMp-@RL!#4i9TJc1CViH/(?/fFH]DMt*BM|@aNZ=8in=9/N6lL/U^tFviY]83^' );
define( 'SECURE_AUTH_KEY',  '&D.>?x%/mO6K[plmjP_Lk0V.D/`P`v76/t%-]YH;DJj?t(h@X#~_bVCq)!Nis2K,' );
define( 'LOGGED_IN_KEY',    '.#IPu{@>Ark>| id|%|%V!Hc7tPM*%f1<lRp1/-=KYvg3.7Bve+7)`0bxPxynnT)' );
define( 'NONCE_KEY',        'RxK3j~I)i*q]:?]lS9X-tlyjBgd%E2IAHHy6A/ExYdI1M{u@ua34Hk_<iM&>iRwY' );
define( 'AUTH_SALT',        ',<=0D5n@}XcNW 6g^=P9`@1]:H2-aD{<aZZN( aC2=7E=p.j(.[GLHQ7u>dh5#a*' );
define( 'SECURE_AUTH_SALT', '^<LWP,p&>GOMd8AlP~~87#h_p`Higusa-o&V.^_H@5_:HQf$q`s?27}K oYkvj?3' );
define( 'LOGGED_IN_SALT',   't!&$Mm$B_ep^Hy{.FHHWO4wY^X9{ti@Wrn!%Cu}~Z.$md4-yF1X/tFn Uje@4u^5' );
define( 'NONCE_SALT',       'S9Cavzd(XO/R!@oTARr>u%WWwiLyHNsTOMBu: 7G%1{FQ5de<OK1+_`z+t%)S*FC' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp1';

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
