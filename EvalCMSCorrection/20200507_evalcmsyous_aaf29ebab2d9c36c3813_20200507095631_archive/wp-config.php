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
define( 'DB_NAME', '' );


/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', '' );


/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );


/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', '' );


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
define( 'AUTH_KEY',         '5v[2gFE3?.A%GJ|Qiw<IzBDMjhWG: sNNc`gci.)5;U^D`r9xo{-!zY-LOkiSpug' );

define( 'SECURE_AUTH_KEY',  '#*`/x?Z=xqm]~}pWZ9xKZ<;4N=#wa8iyaqwf =<0%@rp=-CZccw)]S_ygTR* p8n' );

define( 'LOGGED_IN_KEY',    'j.78N[*9:]Y{fBU^)gi:*9c)b?L3VW}6 w4Y=IiRZqb:0D;9<D0i}cZKc]IDFDi0' );

define( 'NONCE_KEY',        'ydF<LWFVI^Yj+@Li5:fDZy_Y{.^s<e_d.[m>eWqvdvUMb@.c14Je`d<&L]<*sO9J' );

define( 'AUTH_SALT',        'T$ `nb8[RJ[w~.PiC>fQ$3r[(>i}E ~b*~wd|tASTLFx,Q.qYn{TroOk-X^:6N)P' );

define( 'SECURE_AUTH_SALT', '?CRr6_}sn#vVt(^+=G]FAfe_B)/[ 3<v<n:oX$I0PFr[DlC~GcS}O=q E6tl86*g' );

define( 'LOGGED_IN_SALT',   'XMo#2amR<7SA@,I9HM%cUj%p,h_LQg7Z)(0JmUQN!-KJ?_.@%?.b+&C1cW1GwlUs' );

define( 'NONCE_SALT',       'fRMyo3!SJkj<&Hi{G5%exLwOArs>V6D5*EX0:5K(ldtIeCA**d)2Xa0ZMjh4)L.W' );

/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';


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
