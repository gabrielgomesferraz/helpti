<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>HelpTI - Esqueci minha senha</title>
	<link rel="stylesheet" href="/arquivos/styles/helpti.css">
	<link rel="stylesheet" href="/arquivos/styles/forgot-my-password.css">
</head>
<body class="forgot-my-password">
    <div class="container">
      	<div class="row">
      		<h1 class="title-helpti text-center">HelpTI</h1>
	      	<form class="form-login col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
	      	  <label for="" class="title-login">Esqueci minha senha</label>
			  <div class="form-group">
			    <input type="email" class="form-control input-lg" id="userEmail" aria-describedby="emailHelp" placeholder="Digite seu email" required>
			  </div>
			  <button type="submit" class="btn btn-primary btn-lg btn-block">Recuperar senha</button>
			</form>
		</div>
	</div>
  <footer class="footer">
  	<?php include('../common/scripts-footer.php'); ?>
  </footer>
</body>
</html>