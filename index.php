<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Final - <?php if(is_home()) bloginfo('name'); else wp_title(''); ?></title>
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/dist/static/css/app.css"">
    <?php wp_head(); ?>
    <meta name="viewport" content="width=device-width">
</head>
<body <?php body_class(); ?> >

  <div id="app"></div>
  <!-- built files will be auto injected by header and footer-->

  	<?php wp_footer(); ?>
  		<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/dist/static/js/manifest.js"></script>
  		<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/dist/static/js/vendor.js"></script>
  		<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/dist/static/js/app.js"></script>

  </body>
  </html>
