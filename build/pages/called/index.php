<div class="hidden session"><?php include('../common/session.php'); ?></div>

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
			<?php include('../common/navbar.php'); ?>

			<div class="col-xs-12 col-sm-8 col-sm-offset-2">
				<div class="list-content-home">						
					<div class="form-group">
						<h3 class="title-list-called">Lista de Chamados</h3>
					</div>
					<div class="table-responsive">
						<table class="table table-bordered">
							<thead> 
								<tr> 
									<th>Número do chamado</th> 
									<th>Titulo</th>
									<th>Departamento</th>
									<th>Usuário</th>
									<th>Situação</th>
									<th>Data de Atualização</th>
								</tr> 
							</thead> 
							<tbody> 
							</tbody> 
						</table>
					</div>
					<a href="/criar-chamado" class="btn btn-primary btn-lg btn-block create-called">Solicitar</a>
				</div>
			</div>
		</div>
	</div>


  <footer class="footer">
  	<?php include('../common/scripts-footer.php'); ?>
	<script src="/arquivos/scripts/called.js"></script>
  </footer>
</body>
</html>