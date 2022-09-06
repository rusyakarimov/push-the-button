@extends('layouts.main')
@section('content')
<div class="sign section--bg" data-bg="img/section/section.jpg">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="sign__content">
                    <!-- authorization form -->
                    <form action="#" class="sign__form">
                        <a href="index.html" class="sign__logo">
                        
                            <img src="/img/cinemaLogo.png" alt="">
                        </a>

                        <div class="sign__group">
                            <input type="text" class="sign__input" placeholder="Email">
                        </div>

                        <div class="sign__group">
                            <input type="password" class="sign__input" placeholder="Password">
                        </div>

                        <div class="sign__group sign__group--checkbox">
                            <input id="remember" name="remember" type="checkbox" checked="checked">
                            <label for="remember">Remember Me</label>
                        </div>

                        <button class="sign__btn" type="button">Sign in</button>

                        <span class="sign__text">Don't have an account? <a href="signup.html">Sign up!</a></span>

                        <span class="sign__text"><a href="#">Forgot password?</a></span>
                    </form>
                    <!-- end authorization form -->
                </div>
            </div>
        </div>
    </div>
</div>
@endsection