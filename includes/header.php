<?php $baseUrl = 'http://localhost/CorporateIndia/';  ?>

<!DOCTYPE html>

<html>
<head>
  <title>Corporate India</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="<?php echo $baseUrl; ?>css/bootstrap.min.css" />
  <link rel="stylesheet" href="<?php echo $baseUrl; ?>css/bootstrap-grid.min.css" />
  <link rel="stylesheet" href="<?php echo $baseUrl; ?>css/bootstrap-reboot.min.css" />
  <link rel="stylesheet" href="<?php echo $baseUrl; ?>css/all.min.css" />
  <link rel="stylesheet" href="<?php echo $baseUrl; ?>css/button.css" />
  <link rel="stylesheet" href="<?php echo $baseUrl; ?>css/site.css" />
</head>

<body>

  <!-- <div class="width10">
asdasd
  </div> -->

  <!-- <div class="width80"> -->

  <section class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <p id="currentdate">

          </p>
          <p class="headlinks posabsolute">
            <a href="#">Home</a>
            <a href="#">Editor's Desk</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </p>
        </div>
        <div class="col-md-4">
          <img src="<?php echo $baseUrl; ?>images/main-logo.png" class="img-responsive mainlogo" />
        </div>
        <div class="col-md-4 text-right">
          <p class="headlinks">
            <a href="#" class="border-bot">English</a>
            <a href="#">Subscribe</a>
            <a href="#">Login</a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </p>
          <p class="headlinks posabsolute posright">
            <a href="#"><img src="<?php echo $baseUrl; ?>images/csi.png" /></a>
            <a href="#"><img src="<?php echo $baseUrl; ?>images/portfolio.png" /></a>
            <a href="#" class="m-r-0"><img src="<?php echo $baseUrl; ?>images/fortune-script.png" /></a>
          </p>
        </div>
      </div>
    </div>
  </section>
  <div class="navigation bg-dark">
    <div class="container">
      <nav class="navbar navbar-dark bg-dark navbar-expand-sm navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-2" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-list-2">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Business</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Finance</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Budget</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Economy</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Reviews</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Welfare</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Market</a>
            </li>
            <li class="nav-item dropdown dmenu">
              <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                Other
              </a>
              <div class="dropdown-menu sm-menu">
                <a class="dropdown-item" href="#">Link 1</a>
                <a class="dropdown-item" href="#">Link 2</a>
                <a class="dropdown-item" href="#">Link 3</a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <!-- <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> -->
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
              </div>
            </div>
          </form>
          <!-- <form class="form-inline navbar-form navbar-right" action="/action_page.php">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
              </div>
            </div>
          </form> -->
        </div>
      </nav>
    </div>
  </div>

  <section class="newsflash p-t-0 p-b-0">
      <div class="container">
        <div class="row">
          <div class="col-md-1">

          </div>
          <div class="col-md-8">
            <div class="newsticker">
              <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</li>
                  <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</li>
                  <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore nulla.</li>
                  <li> Excepteur sint occaecat cupidatat non proident, sunt in mollit anim id est laborum.</li>
              </ul>
            </div>
          </div>
          <div class="col-md-2 text-right">
            <p class="newstickerbtn">
              <a href="#" class="btnDown"><i class="fas fa-caret-left"></i></a>
              <a href="#" class="btnToggle"><i class="smallbtn fas fa-pause" onclick="toggleIcon(this)"></i></a>
              <a href="#" class="btnUp"><i class="fas fa-caret-right"></i></a>
            </p>
          </div>
          <div class="col-md-1">

          </div>
        </div>
      </div>
    </section>

    <section class="adspace bordertop">
      <div class="container">
        <div class="row">
          <div class="col-md-2">

          </div>
          <div class="col-md-8 text-center">
            <img src="<?php echo $baseUrl; ?>images/adv-1.png" class="img-responsive" />
          </div>
        </div>
      </div>
    </section>