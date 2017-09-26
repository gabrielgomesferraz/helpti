<?php
	include('../../common/session.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>HelpTI - Cadastro de Departamentos</title>
	<link rel="stylesheet" href="/arquivos/styles/helpti.css">
	<link rel="stylesheet" href="/arquivos/styles/departments.css">
</head>
<body class="departments">
    <div class="container-fluid">
      	<div class="row">
      		<nav class="navbar navbar-default">
			  <div class="container-fluid">
			    <!-- Brand and toggle get grouped for better mobile display -->
			    <div class="navbar-header">
			      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span class="sr-only">Toggle navigation</span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			      </button>
			      <a class="navbar-brand" href="#">HelpTI</a>
			    </div>

			    <!-- Collect the nav links, forms, and other content for toggling -->
			    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul class="nav navbar-nav">
			        <li><a href="/">Chamados <span class="sr-only">(current)</span></a></li>
			      </ul>
			      <ul class="nav navbar-nav navbar-right">
			        <li class="dropdown">
			          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-bell"></span> Notificações <span class="caret"></span></a>
			          <ul class="dropdown-menu">
			            <li><a href="#">Test</a></li>
			          </ul>
			        </li>
			        <li class="dropdown">
			          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-user"></span> Minha conta <span class="caret"></span></a>
			          <ul class="dropdown-menu">
			            <li><a href="#">Alterar dados</a></li>
			            <li><a href="#">Sair</a></li>
			          </ul>
			        </li>
			      </ul>
			    </div><!-- /.navbar-collapse -->
			  </div><!-- /.container-fluid -->
			</nav>
	      	<form class="form-department col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4" id="department-form">
	      	  <!-- messages -->
              <div id="register-msg-success" class="alert alert-success hidden" role="alert">
                Cadastro de departamento realizado com sucesso
              </div>

              <div id="register-msg-error" class="alert alert-danger hidden" role="alert">
                Erro realizar cadastro de departamento
              </div>
              <!-- messages -->

	      	  <label for="" class="title-login">Cadastrar Departamento</label>
			  <div class="form-group">
			    <input type="text" class="form-control input-lg" id="name" name="name" aria-describedby="departamentHelp" placeholder="Digite o nome do departamento" required>
			  </div>
			  <button type="submit" class="btn btn-primary btn-lg btn-block" id="send-department">Cadastrar</button>
			</form>
		</div>
	</div>
  <footer class="footer">
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="/arquivos/scripts/vendor/bootstrap.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.17.0/dist/jquery.validate.js"></script>
	<script src="/arquivos/scripts/department.js"></script>
  </footer>
</body>
</html>