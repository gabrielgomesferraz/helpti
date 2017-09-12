<?php define('__ROOT__', dirname(__FILE__)); ?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Cadastro</title>
	<link rel="stylesheet" href="/arquivos/styles/helpti.css">
	<link rel="stylesheet" href="/arquivos/styles/register.css">
</head>
<body class="register">
    <div class="container">
      	<div class="row">
	      	<form class="form-register col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
	      	  <label for="" class="title-register">Crie sua conta</label>
	      	  <div class="form-group">
			    <input type="text" class="form-control input-lg" id="firstName" aria-describedby="firstNameHelp" placeholder="Nome">
			  </div>
			  <div class="form-group">
			    <input type="text" class="form-control input-lg" id="lastName" aria-describedby="lastNameHelp" placeholder="Sobrenome">
			  </div>
			  <div class="form-group">
			    <input type="email" class="form-control input-lg" id="email" aria-describedby="emailHelp" placeholder="Email">
			  </div>
			  <div class="form-group">
			    <input type="password" class="form-control input-lg" id="email" placeholder="Senha">
			  </div>
			  <button type="submit" class="btn btn-primary btn-lg btn-block">Cadastrar</button>
			</form>
			
			<a class="goto-login hidden" href="/login">Ir para o login</a>
		</div>
	</div>
  <footer class="footer">
  	<?php require_once("../common/scripts-footer.php");  ?>
  </footer>
</body>
</html>