<div class="hidden session"><?php include('../common/session.php'); ?></div>

<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>HelpTI - Lista de Departamentos</title>
	<link rel="stylesheet" href="/arquivos/styles/helpti.css">
	<link rel="stylesheet" href="/arquivos/styles/departments.css">
</head>
<body class="departments">
    <div class="container-fluid">
		<div class="row">

			<?php include('../common/navbar.php'); ?>
			<div class="col-xs-12 col-sm-8 col-sm-offset-2">

				<div class="list-content-departments">				
					<div class="form-group">
						<h3 class="title-list-called">Lista de Departamentos</h3>
					</div>
					<div class="table-responsive">
						<table class="table table-bordered">
							<thead> 
								<tr>  
									<th>Nome</th>
									<th>Sobrenome</th>
									<th>Email</th>
									<th>Acesso</th>
									<th class="editar-th hidden">Editar</th>
								</tr> 
							</thead> 
							<tbody> 
							</tbody> 
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>


  <footer class="footer">
  	<?php include('../common/scripts-footer.php'); ?>
	<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.17.0/dist/jquery.validate.js"></script>
	<script src="/arquivos/scripts/change-data.js"></script>
  </footer>
</body>
</html>