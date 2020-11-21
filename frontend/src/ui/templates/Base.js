<!DOCTYPE html>
<html lang="en-ca">
  <head>
    <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{ page.title }}</title>
        <link rel="stylesheet" href="{{ site.url }}/static/css/app.css" />
        <link href="https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i" rel="stylesheet">
        <link rel="stylesheet" href="https://use.typekit.net/aok4qsj.css">
        <!-- Editor CSS -->
        <link rel="stylesheet" href="{{ site.url }}/static/css/editor.css">
        <!-- Menu CSS -->
        <link rel="stylesheet" href="{{ site.url }}/static/css/menu.css">
        <!-- Pushy CSS -->
        <link rel="stylesheet" href="{{ site.url }}/static/css/pushy.css">
    <link rel="alternate" type="application/rss+xml" title="Taylor McKnight RSS" href="http://rtaylormcknight.com/feed.xml" />
    <meta property="og:url" content="{{ site.url }}{{ page.url }}" />
    <meta property="og:title" content="{{ page.og_title }}" />
    <meta property="og:description" content="{{ page.og_description }}" />
    <meta property="og:image" content="{{ site.url }}{{ page.og_image }}" />
    <meta property="og:type"  content="{{ page.og_type }}" />
    <meta property="og:locale"  content="en_US" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-114315585-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-114315585-1');
    </script>
    <!-- jQuery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    </head>
  
  <body>
  <!-- Site Overlay -->
    <div class="site-overlay"></div>
  {{content}}
  <div class="pushy pushy-right user-info" data-focus="#first-link">
    <ul class="sub-menu">
      <li><a href="{{ site.url }}/sites.html"><img src="{{ site.url }}/static/media/icons/dive-flag-black.svg">Switch group</a></li>
      <!--<li><a href="{{ site.url }}/trip-planning.html"><img src="{{ site.url }}/static/media/icons/free-dive.svg">Trips</a></li>
      
      <li><a href="{{ site.url }}/goals.html"><img src="{{ site.url }}/static/media/icons/mask.svg">Goals</a></li>
      
      <li><a href="{{ site.url }}/trip-reports.html"><img src="{{ site.url }}/static/media/icons/write-black.svg">Trip Reports</a></li>
      <li><a href="{{ site.url }}/logbook.html"><img src="{{ site.url }}/static/media/icons/logbook-black.svg">Logbook</a></li>
      <li><a href="{{ site.url }}/dive-careers.html"><img src="{{ site.url }}/static/media/icons/dna.svg">Training videos</a></li>
      <li><a href="{{ site.url }}/dive-careers.html"><img src="{{ site.url }}/static/media/icons/pro.svg">Dive Careers</a></li>
      <li><a href="{{ site.url }}/dive-careers.html"><img src="{{ site.url }}/static/media/icons/dna.svg">Marine Citizen Science</a></li>
      <li><a href="{{ site.url }}/shop.html"><img src="{{ site.url }}/static/media/icons/shop.svg">Shop</a></li>-->
      <li><a href="{{ site.url }}/index.html"><img src="{{ site.url }}/static/media/icons/log-out.svg">Log out</a></li>
    </ul>
    <a href="#" class="logo"><img src="{{ site.url }}/static/media/outblay-logo.svg" height="20"></a>
  </div>
  <!-- Pushy JS -->
  <script src="{{ site.url }}/static/js/pushy.js"></script>
  <script src="/static/js/dropdown.js"></script>
  <script src="/static/js/modal.js"></script>
  </body>
</html>