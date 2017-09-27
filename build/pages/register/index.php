<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>HelpTI - Cadastro de Usuário</title>
	<link rel="stylesheet" href="/arquivos/styles/helpti.css">
	<link rel="stylesheet" href="/arquivos/styles/register.css">
</head>
<body class="register">
    <div class="container">
      	<div class="row">
      		<h1 class="title-helpti text-center">HelpTI</h1>
	      	<form id="register-form" class="form-register col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

	      	   <!-- messages -->
              <div id="register-msg-success" class="alert alert-success hidden" role="alert">
                Cadastro efetuado com sucesso, <a class="goto-login" href="/login">fazer login</a>
              </div>

              <div id="register-msg-error" class="alert alert-danger hidden" role="alert">
                Erro ao efetuar seu cadastro.
              </div>
              <!-- messages -->

	      	  <label for="" class="title-register">Crie sua conta</label>
	      	  <div class="form-group">
			    <input type="text" class="form-control input-lg" id="firstName" name="firstName" aria-describedby="firstNameHelp" placeholder="Nome">
			  </div>
			  <div class="form-group">
			    <input type="text" class="form-control input-lg" id="lastName" name="lastName" aria-describedby="lastNameHelp" placeholder="Sobrenome">
			  </div>
			  <div class="form-group">
			    <input type="email" class="form-control input-lg" id="email" name="email" aria-describedby="emailHelp" placeholder="Email">
			  </div>
			  <div class="form-group">
			    <input type="password" class="form-control input-lg" id="password" name="password" placeholder="Senha">
			  </div>
			  <button type="submit" id="send-register" class="btn btn-primary btn-lg btn-block">Cadastrar</button>
			</form>
		</div>
	</div>
  <footer class="footer">
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="/arquivos/scripts/vendor/bootstrap.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.17.0/dist/jquery.validate.js"></script>
	<script src="/arquivos/scripts/register.js"></script>
  </footer>
</body>
</html>