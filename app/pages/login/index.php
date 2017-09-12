<?php define('__ROOT__', dirname(__FILE__)); ?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Login</title>
	<link rel="stylesheet" href="/arquivos/styles/helpti.css">
	<link rel="stylesheet" href="/arquivos/styles/login.css">
</head>
<body class="login">
    <div class="container">
      	<div class="row">
	      	<form class="form-login col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
	      	  <label for="" class="title-login">Faça login na sua conta</label>
			  <div class="form-group">
			    <input type="email" class="form-control input-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu email">
			  </div>
			  <div class="form-group">
			    <input type="password" class="form-control input-lg" id="exampleInputPassword1" placeholder="Digite sua senha">
			  </div>
			  <button type="submit" class="btn btn-primary btn-lg btn-block">Login</button>
			  <p class="not-register">Não é cadastrado?<a href="/cadastro">Crie sua conta</a></p>
			  <a class="btn btn-info btn-lg btn-block" href="/esqueci-minha-senha">Esqueci minha senha</a>
			</form>
		</div>
	</div>
  <footer class="footer">
  	<?php require_once("../common/scripts-footer.php");  ?>
  </footer>
</body>
</html>