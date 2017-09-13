<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>HelpTI</title>
	<link rel="stylesheet" href="/arquivos/styles/helpti.css">
	<link rel="stylesheet" href="/arquivos/styles/home.css">
</head>
<body class="home">
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

			<div class="col-xs-12 col-sm-8 col-sm-offset-2">
				<div class="list-content-home">						
					<div class="form-group">
						<h3 class="title-list-called">Lista de Chamados</h3>
					</div>
					<div class="table-responsive">
						<table class="table table-bordered">
							<thead> 
								<tr> 
									<th>#</th> 
									<th>Titulo</th>
									<th>Departamento</th>
									<th>Usuário</th>
									<th>Data de Atualização</th>
									<th>Editar</th>
									<th>Excluir</th>
								</tr> 
							</thead> 
							<tbody> 
								<tr> 
									<th scope="row">1</th> 
									<td>Test</td> 
									<td>Marketing</td> 
									<td>Usuário 1</td>
									<td>13/09/2017</td>
									<td><a class="editar" href=""><span class="glyphicon glyphicon-edit"></span></a></td>
									<td><a class="remover" href=""><span class="glyphicon glyphicon-remove"></span></a></td>
								</tr> 
								<tr> 
									<th scope="row">2</th> 
									<td>Test1</td> 
									<td>Financeiro</td> 
									<td>Usuário 2</td>
									<td>13/09/2017</td>
									<td><a class="editar" href=""><span class="glyphicon glyphicon-edit"></span></a></td>
									<td><a class="remover" href=""><span class="glyphicon glyphicon-remove"></span></a></td>
								</tr> 
								<tr> 
									<th scope="row">3</th> 
									<td>Test2</td> 
									<td>Comercial</td> 
									<td>Usuário 3</td>
									<td>13/09/2017</td>
									<td><a class="editar" href=""><span class="glyphicon glyphicon-edit"></span></a></td>
									<td><a class="remover" href=""><span class="glyphicon glyphicon-remove"></span></a></td>
								</tr>
							</tbody> 
						</table>
					</div>
					<button type="submit" class="btn btn-primary btn-lg btn-block create-called">Solicitar</button>
				</div>
			</div>
		</div>
	</div>


  <footer class="footer">
  	<?php require_once("common/scripts-footer.php");  ?>
  </footer>
</body>
</html>