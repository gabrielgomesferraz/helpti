<div class="hidden session"><?php include('../common/session.php'); ?></div>

<!DOCTYPE html>
<html lang="en">
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
					<div id="remove-department-msg-success" class="alert alert-success hidden" role="alert">
		               	Departamento excluido com sucesso
		              </div>					
					<div class="form-group">
						<h3 class="title-list-called">Lista de Departamentos</h3>
					</div>
					<div class="table-responsive">
						<table class="table table-bordered">
							<thead> 
								<tr>  
									<th>Departamento</th>
									<th>Editar</th>
									<th>Excluir</th>
								</tr> 
							</thead> 
							<tbody> 
							</tbody> 
						</table>
					</div>
					<a href="/departamentos/cadastrar" class="btn btn-primary btn-lg btn-block create-called">Cadastrar departmento</a>
				</div>
			</div>
		</div>
	</div>


  <footer class="footer">
  	<?php include('../common/scripts-footer.php'); ?>
	<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.17.0/dist/jquery.validate.js"></script>
	<script src="/arquivos/scripts/department.js"></script>
  </footer>
</body>
</html>