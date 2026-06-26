AME PROJECT SPLIT (ACTUAL FROM UPLOADED FILES)

This package was generated from your uploaded files:
- style.css / style(1).css
- navbar.css
- theme.css
- responsive.css
- script(5).js

How to use
1) Put all CSS files into your project /css folder.
2) Put all JS files into your project /js folder.
3) In each HTML file, remove the old line:
   <link rel="stylesheet" href="css/style.css">
4) Add the CSS lines shown below for each page.
5) Remove old script.js from each page and use the JS lines shown below.

IMPORTANT
- Keep theme.css, navbar.css, common.css, responsive.css.
- common.css contains shared styles: page hero, contact bar, shared buttons, section titles.
- The separate page CSS files contain only page-specific styles split from your uploaded style.css.

CSS per page

index.html:
<link rel="stylesheet" href="css/theme.css">
<link rel="stylesheet" href="css/navbar.css">
<link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href="css/home.css">
<link rel="stylesheet" href="css/gallery.css">
<link rel="stylesheet" href="css/responsive.css">

about.html:
<link rel="stylesheet" href="css/theme.css">
<link rel="stylesheet" href="css/navbar.css">
<link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href="css/about.css">
<link rel="stylesheet" href="css/responsive.css">

about-program.html:
<link rel="stylesheet" href="css/theme.css">
<link rel="stylesheet" href="css/navbar.css">
<link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href="css/program.css">
<link rel="stylesheet" href="css/responsive.css">

curriculum.html:
<link rel="stylesheet" href="css/theme.css">
<link rel="stylesheet" href="css/navbar.css">
<link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href="css/curriculum.css">
<link rel="stylesheet" href="css/responsive.css">

personnel.html:
<link rel="stylesheet" href="css/theme.css">
<link rel="stylesheet" href="css/navbar.css">
<link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href="css/personnel.css">
<link rel="stylesheet" href="css/responsive.css">

projects.html:
<link rel="stylesheet" href="css/theme.css">
<link rel="stylesheet" href="css/navbar.css">
<link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href="css/projects.css">
<link rel="stylesheet" href="css/responsive.css">

services.html:
<link rel="stylesheet" href="css/theme.css">
<link rel="stylesheet" href="css/navbar.css">
<link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href="css/services.css">
<link rel="stylesheet" href="css/gallery.css">
<link rel="stylesheet" href="css/responsive.css">

alumni.html:
<link rel="stylesheet" href="css/theme.css">
<link rel="stylesheet" href="css/navbar.css">
<link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href="css/alumni.css">
<link rel="stylesheet" href="css/responsive.css">

contact.html:
<link rel="stylesheet" href="css/theme.css">
<link rel="stylesheet" href="css/navbar.css">
<link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href="css/discover.css">
<link rel="stylesheet" href="css/responsive.css">

JS per page

index.html:
<script src="js/main.js"></script>
<script src="js/navbar.js"></script>

about.html / about-program.html / curriculum.html / alumni.html:
<script src="js/navbar.js"></script>

personnel.html:
<script src="js/navbar.js"></script>
<script src="js/personnel.js"></script>

services.html:
<script src="js/navbar.js"></script>
<script src="js/gallery.js"></script>

projects.html:
<script src="js/navbar.js"></script>

contact.html:
<script src="js/navbar.js"></script>
<script src="js/discover.js"></script>

Notes
- If your hamburger button uses id="menuToggle", navbar.js supports it.
- If you later remove the id, change navbar.js to querySelector('.menu-toggle').
