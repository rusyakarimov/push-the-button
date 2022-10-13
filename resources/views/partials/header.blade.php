<!-- header -->
<header class="header">
    <div class="header__wrap">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="header__content">
                        <!-- header logo -->
                        <a href="{{ url('/') }}" class="header__logo">
                            <img src="/img/cinemaLogo.png" alt="">
                        </a>
                        <!-- end header logo -->
                        <!-- header navigation -->
                        <ul class="header__nav">
                            <!-- dropdown -->
                            <li class="header__nav-item">
                                <a class="header__nav-link" href="#">Главная</a>
                            </li>
                            <!-- end dropdown -->
                            <!-- dropdown -->
                            <li class="header__nav-item">
                                <a class="dropdown-toggle header__nav-link" href="#" role="button" id="dropdownMenuCatalog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Каталог</a>
                                <ul class="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuCatalog">
                                    <li><a href="catalog1.html">Фильмы</a></li>
                                    <li><a href="catalog2.html">Сериалы</a></li>
                                    <li><a href="details1.html">Мультики</a></li>
                                </ul>
                            </li>
                            <!-- end dropdown -->
                            <li class="header__nav-item">
                                <a href="{{ url('/help') }}" class="header__nav-link">Помощь</a>
                            </li>
                        </ul>
                        <!-- end header nav -->
                        <!-- header auth -->
                        <div class="header__auth">
                            <button class="header__search-btn" type="button">
                                <i class="icon ion-ios-search"></i>
                            </button>

                            <a href="{{ url('/login') }}" class="header__sign-in">
                                <i class="icon ion-ios-log-in"></i>
                                <span>Войти</span>
                            </a>
                        </div>
                        <!-- end header auth -->
                        <!-- header menu btn -->
                        <button class="header__btn" type="button">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <!-- end header menu btn -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- header search -->
    <form action="#" class="header__search">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="header__search-content">
                        <input type="text" placeholder="Найти что-то по душе...">

                        <button type="button">Поиск</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <!-- end header search -->
</header>
<!-- end header -->