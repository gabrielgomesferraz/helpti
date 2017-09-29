<div class="hidden session"><?php include('../common/session.php'); ?></div>

<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>HelpTI - Alterar dados</title>
	<link rel="stylesheet" href="/arquivos/styles/helpti.css">
	<link rel="stylesheet" href="/arquivos/styles/departments.css">
</head>
<body class="departments">
    <div class="container-fluid">
      	<div class="row">
      		<?php include('../common/navbar.php'); ?>
	      	<form class="form-department col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4" id="change-data-form">

	      	   <!-- messages -->
              <div id="change-data-msg-success" class="alert alert-success hidden" role="alert">
                Dados alterados com sucesso
              </div>

              <div id="change-data-msg-error" class="alert alert-danger hidden" role="alert">
                Erro ao alterar os dados.
              </div>
              <!-- messages -->

	      	  <label for="" class="title-register">Alterar dados</label>
	      	  <input type="hidden" id="userId" name="userId">
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
	  		  <div class="form-group">
		    		<select class="form-control input-lg hidden" id="rule" name="rule">
		    			<option value="0">Normal</option>
		    			<option value="1">Suporte</option>
		    			<option value="2">Admin</option>
					</select>
			  	</div>
			  <button type="submit" id="send-change-data" class="btn btn-primary btn-lg btn-block">Alterar dados</button>
			</form>
		</div>
	</div>
  <footer class="footer">
  	<?php include('../common/scripts-footer.php'); ?>
	<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.17.0/dist/jquery.validate.js"></script>
	<script src="/arquivos/scripts/change-data.js"></script>
  </footer>
</body>
</html>