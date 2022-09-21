@extends('layouts.guest')
@section('content')
<div class="sign section--bg" data-bg="img/section/section.jpg">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="sign__content">
                    <!-- authorization form -->
                    <form action="#" class="sign__form">
                        <a href="{{ url('/') }}" class="sign__logo">
                            <img src="/img/cinemaLogo.png" alt="">
                        </a>
                        <div class="sign__group">
                            <input type="email" class="sign__input" placeholder="Введите ваш Email">
                        </div>
                        <button class="sign__btn" type="button">Восстановить пароль</button>
                    </form>
                    <!-- end authorization form -->
                </div>
            </div>
        </div>
    </div>
</div>
@endsection