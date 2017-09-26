<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>HelpTI - Cadastro de Chamados</title>
	<link rel="stylesheet" href="/arquivos/styles/helpti.css">
	<link rel="stylesheet" href="/arquivos/styles/create.css">
</head>
<body class="create">
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

			<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3">
				<div class="list-content-create">
					<form class="form-register">
						<div class="form-group">
							<h3 class="title-called">Solicitar</h3>
						</div>
						<div class="form-group">
					    	<input type="title-called" class="form-control input-lg" id="title-clled" aria-describedby="titleCalledHelp" placeholder="Titulo">
						</div>
						<div class="form-group">
				    		<select class="form-control input-lg" id="department" name="department">
				    			<option value="-1">Selecione um departamento</option>
						    	<option>Marketing</option>
						    	<option>Comercial</option>
						    	<option>Financeiro</option>
							</select>
					  	</div>
					  	<div class="form-group">
					  		<textarea class="form-control" rows="5" id="description" placeholder="Descreva o problema."></textarea>
					  	</div>
					  	<button type="submit" class="btn btn-primary btn-lg btn-send">Enviar chamado</button>
					</form>
				</div>
			</div>
		</div>
	</div>


  <footer class="footer">
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="/arquivos/scripts/vendor/bootstrap.js"></script>
  </footer>
</body>
</html>