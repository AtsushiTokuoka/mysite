<?php
  require '/var/www/html/vendor/autoload.php';
  use Vimeo\Vimeo;
  $client = new Vimeo(
    getenv('VIMEO_CLIENT_ID'), 
    getenv('VIMEO_CLIENT_SECRET'), 
    getenv('VIMEO_ACCESS_TOKEN')
  );
  $response = $client->request('/tutorial', array(), 'GET');
?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="<?php echo getenv('ASSETS_URL'); ?>/favicon.svg" type="image/svg+xml" sizes="any">
  <title>Document</title>
</head>
<body>
  <h1>master/index.php</h1>
  <pre><?php var_dump($client);?></pre>
  <pre><?php var_dump($response);?></pre>
</body>
</html>