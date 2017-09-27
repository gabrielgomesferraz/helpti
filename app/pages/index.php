<?php
	include('../pages/common/session.php');
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>HelpTI</title>
	<link rel="stylesheet" href="/arquivos/styles/helpti.css">
	<link rel="stylesheet" href="/arquivos/styles/home.css">
</head>
<body class="home">
    <div class="container-fluid">
		<div class="row">
			<?php include('../../common/navbar.php'); ?>

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
					<a href="/criar-chamado" class="btn btn-primary btn-lg btn-block create-called">Solicitar</a>
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