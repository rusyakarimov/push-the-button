@extends('layouts.guest')
@section('content')
<div class="sign section--bg" data-bg="img/section/section.jpg">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="sign__content">
					<!-- registration form -->
					<form action="#" class="sign__form">
						<a href="{{ url('/') }}" class="sign__logo">
							<img src="/img/cinemaLogo.png" alt="">
						</a>
						<div class="sign__group">
							<input type="text" class="sign__input" placeholder="Имя">
						</div>
						<div class="sign__group">
							<input type="text" class="sign__input" placeholder="Email">
						</div>
						<div class="sign__group">
							<input type="password" class="sign__input" placeholder="Пароль">
						</div>
						<!-- Privacy Policy -->
						<!-- <div class="sign__group sign__group--checkbox">
								<input id="remember" name="remember" type="checkbox" checked="checked">
								<label for="remember">I agree to the <a href="#">Privacy Policy</a></label>
							</div> -->
						<button class="sign__btn" type="button">Зарегистрироваться</button>
						<span class="sign__text">Уже есть аккаунт? <a href="{{ url('/login') }}">Войти!</a></span>
					</form>
					<!-- registration form -->
				</div>
			</div>
		</div>
	</div>
</div>
@endsection