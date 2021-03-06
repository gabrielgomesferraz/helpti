<div class="hidden session"><?php include('../../common/session.php'); ?></div>

<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>HelpTI - Cadastro de Departamentos</title>
	<link rel="stylesheet" href="/arquivos/styles/helpti.css">
	<link rel="stylesheet" href="/arquivos/styles/departments.css">
</head>
<body class="departments">
    <div class="container-fluid">
      	<div class="row">
      		<?php include('../../common/navbar.php'); ?>
	      	<form class="form-department col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4" id="department-form">
	      	  <!-- messages -->
              <div id="department-msg-success" class="alert alert-success hidden" role="alert">
                Cadastro de departamento realizado com sucesso
              </div>

              <div id="department-msg-error" class="alert alert-danger hidden" role="alert">
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
  	<?php include('../../common/scripts-footer.php'); ?>
	<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.17.0/dist/jquery.validate.js"></script>
	<script src="/arquivos/scripts/department.js"></script>
  </footer>
</body>
</html>