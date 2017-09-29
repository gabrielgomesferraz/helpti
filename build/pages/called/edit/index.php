<div class="hidden session"><?php include("../common/session.php"); ?></div>

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

			<?php include('../../common/navbar.php'); ?>

			<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3">
				<div class="list-content-create">
					<form class="form-register" id="create-form">
						<!-- messages -->
			            <div id="edit-msg-success" class="alert alert-success hidden" role="alert">
			              Chamado alterado com sucesso
			            </div>

			            <div id="edit-msg-error" class="alert alert-danger hidden" role="alert">
			              Erro ao alterar chamado
			            </div>
			            <!-- messages -->
						<div class="form-group">
							<h3 class="title-called">Editar chamado</h3>
						</div>
						<div class="form-group">
					    	<input type="title-called" name="titleCalled" disabled="disabled" class="form-control input-lg" id="title-clled" aria-describedby="titleCalledHelp" placeholder="Titulo">
						</div>
						<div class="form-group">
				    		<select class="form-control input-lg" id="department" name="department" disabled="disabled">
				    			<option value="">Selecione um departamento</option>
							</select>
					  	</div>
					  	<div class="form-group">
				    		<select class="form-control input-lg" id="status" name="status">
				    			
							</select>
					  	</div>
					  	<div class="form-group">
					  		<textarea class="form-control" rows="5" id="description" name="description" disabled="disabled" placeholder="Descreva o problema."></textarea>
					  	</div>

					  	<div class="form-group">
					  		<textarea class="form-control" rows="5" id="mensagem" name="mensagem" placeholder="Envie uma mensagem."></textarea>
					  	</div>
					  	<button type="submit" class="btn btn-primary btn-lg btn-send" id="send-create">Editar</button>
					</form>
				</div>
			</div>
		</div>
	</div>


  <footer class="footer">
  	<?php include('../../common/scripts-footer.php'); ?>
	<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.17.0/dist/jquery.validate.js"></script>
	<script src="/arquivos/scripts/called.js"></script>
  </footer>
</body>
</html>