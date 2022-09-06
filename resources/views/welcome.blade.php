@extends('layouts.main')
@section('content')
<section class="content">
    <!-- Не удалять блок -->
    <div class="content__head">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- content title -->
                    <h2 class="content__title">WTS</h2>
                    <!-- end content title -->
                </div>
            </div>
        </div>
    </div>
    <!-- Не удалять блок -->

    <div class="container">
        <!-- content tabs -->
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
                <div class="row">
                    <!-- card -->
                    <div class="col-6 col-sm-12 col-lg-6">
                        <div class="card card--list">
                            <div class="row">
                                <div class="col-12 col-sm-4">
                                    <div class="card__cover">
                                        <img src="/img/covers/cover.jpg" alt="erter">
                                        <a href="#" class="card__play">
                                            <i class="icon ion-ios-play"></i>
                                        </a>
                                    </div>
                                </div>

                                <div class="col-12 col-sm-8">
                                    <div class="card__content">
                                        <h3 class="card__title"><a href="#">I Dream this</a></h3>
                                        <span class="card__category">
                                            <a href="#">Action</a>
                                            <a href="#">Triler</a>
                                        </span>

                                        <div class="card__wrap">
                                            <span class="card__rate"><i class="icon ion-ios-star"></i>8.4</span>

                                            <ul class="card__list">
                                                <li>HD</li>
                                                <li>16+</li>
                                            </ul>
                                        </div>

                                        <div class="card__description">
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. The point of
                                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                letters, as opposed to using 'Content here, content here', making it
                                                look like readable English.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end card -->

                    <!-- card -->
                    <div class="col-6 col-sm-12 col-lg-6">
                        <div class="card card--list">
                            <div class="row">
                                <div class="col-12 col-sm-4">
                                    <div class="card__cover">
                                        <img src="/img/covers/cover2.jpg" alt="">
                                        <a href="#" class="card__play">
                                            <i class="icon ion-ios-play"></i>
                                        </a>
                                    </div>
                                </div>

                                <div class="col-12 col-sm-8">
                                    <div class="card__content">
                                        <h3 class="card__title"><a href="#">Benched</a></h3>
                                        <span class="card__category">
                                            <a href="#">Comedy</a>
                                        </span>

                                        <div class="card__wrap">
                                            <span class="card__rate"><i class="icon ion-ios-star"></i>7.1</span>

                                            <ul class="card__list">
                                                <li>HD</li>
                                                <li>16+</li>
                                            </ul>
                                        </div>

                                        <div class="card__description">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end card -->

                </div>
            </div>
        </div>
        <!-- end content tabs -->
    </div>
</section>
<!-- end content -->
@endsection
<!-- content -->