<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="icon" href="{{ env('ASSETS_URL') }}/favicon.svg" type="image/svg+xml" sizes="any">
  <!-- style -->
  <link rel="stylesheet" href="{{ env('ASSETS_URL') }}/master/style.css">
  <!-- script -->
  <script src="{{ env('ASSETS_URL') }}/vendors/vue@3.2.26.js" defer></script>
  <script src="{{ env('ASSETS_URL') }}/vendors/vue-router@4.3.3.js" defer></script>
  <script src="{{ env('ASSETS_URL') }}/vendors/vuex@4.1.0.js" defer></script>
  <script src="{{ env('ASSETS_URL') }}/master/main.js" defer></script>
</head>
<body class="bg-dark text-light">
  <div id="app"></div>
  <div id="modal"></div>
</body>
</html>