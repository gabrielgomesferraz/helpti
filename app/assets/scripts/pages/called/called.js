/*
 *  Called v1.0.0
 *  Called
 *  Made with ♥ by Gabriel Henrique Gomes Ferraz <gabrielgomes639@gmail.com>
 *  Under MIT License
 */

;(function($, window, document, undefined) {

  'use strict';

  $.fn.called = (function() {

    var formEdit = $('#called-edit-form'),
        url = document.location.href,
        urlEditar = url.substring(url.indexOf('=') + 1);

    // var form = $('#called-form'),
    //     formEdit = $('#called-edit-form'),
    //     url = document.location.href,
    //     urlEditar = url.substring(url.indexOf('=') + 1);

    var validationForm = function() {
      if(url.match(/editar/gi)) {
        $(formEdit).validate({
          errorElement : 'p',
          errorClass : 'help-block',
          rules: {
            status: {
              required: true,
            },
          },
          messages : {
            status : {
              required: 'SITUAÇÃO DO CHAMADO É OBRIGATÓRIO',
            },
          },
          highlight: function (element, errorClass, validClass) {
            $(element).closest('.form-group').addClass('has-error');
          },
          unhighlight: function (element, errorClass, validClass) {
            $(element).closest('.form-group').removeClass('has-error');
          },
          errorPlacement: function(error, element) {
            error.insertAfter(element);
          },
          submitHandler: function (form) {
            sendFormEdit(formEdit);
          }
        });
      }
    };

    var listCalled = function() {
      var listCalleds = $('.list-content-home tbody'),
          calledsArray = [];


        $.ajax({
          type: 'GET',
          url: '/build/pages/called/src/CalledController.php',
          data: {
            action: "getCalleds",
          },
          async: true,
          dataType: "json",
        })
        .fail(function(data) {
          $('#called-msg-error').hide().removeClass('hidden').fadeIn('fast');
        })
        .always(function(){
        })
        .done(function(data) {
          if(data.length) {
            var status = '',
                session = Number($('.session')[0].innerHTML),
                sessionText = '';

            for(var i = 0; i < data.length; i++) {
              if(Number(data[i].status) === 0) {
                status = 'Aberto';
              } else if(Number(data[i].status) === 1) {
                status = 'Em andamento';
              } else {
                status = 'Finalizado';
              }

              if(session > 0) {
                sessionText = '<td class="editar-td"><a class="editar" href="/editar?='+data[i].id+'"><span class="glyphicon glyphicon-edit"></span></a></td>';
              } else {
                sessionText = '';
              }

              calledsArray.push(
                '<tr><td>'+data[i].id+'</td><td>'+data[i].title+'</td><td>'+data[i].deparmentName+'</td><td>'+data[i].firstName+' '+data[i].lastName+'</td><td>'+status+'</td><td>'+data[i].updated+'</td>'+sessionText+'</tr>'
              );
            }

            listCalleds.find('tr').remove();
            listCalleds.find('th').remove();
            if(session > 0) {
              $('.list-content-home thead tr').append('<th class="editar">Editar</th>');
            }
            listCalleds.append(calledsArray);
          }
        });
    };

    var getCalledEdit = function() {
         var titleCalled = $('#title-clled'),
             department  = $('#department'),
             calledId = $('#calledId'),
             status = $('#status'),
             textStatus = '',
             description = $('#description'),
             mensagem = $('#mensagem');


        if(url.match(/editar/gi)) {
          $.ajax({
            type: 'GET',
            url: '/build/pages/called/edit/src/EditCalledController.php',
            data: {
              action: "getCalledEdit",
              calledId: urlEditar,
            },
            async: true,
            dataType: "json",
          })
          .fail(function(data) {
            $('#edit-msg-error').hide().removeClass('hidden').fadeIn('fast');
          })
          .always(function(){
          })
          .done(function(data) {
            console.log(data);

            if(Number(data[0].status) === 0) {
              textStatus = 'Aberto';
            } else if (Number(data[0].status) === 1) {
              textStatus = 'Em andamento';
            } else {
              textStatus = 'Finalizado';
            } 

            $('.help-for').text('Solicitado por: '+ data[0].user_email);
            calledId.val(data[0].id);
            titleCalled.val(data[0].title);
            description.val(data[0].description);
            mensagem.val(data[0].mensagem);
            department.append('<option value="'+Number(data[0].department_id)+'">'+data[0].department_name+'</option>');
            status.val(data[0].status);
          });
        }
    };


    var sendFormEdit = function(formEdit) {
      var data = $(formEdit).serialize();

      $.ajax({
        type: 'POST',
        url: '/build/pages/called/edit/src/EditCalledController.php',
        data: data,
        async: true,
        beforeSend: function(xhr) {
          $('#send-update-called').text('Aguarde...').prop('disabled', true);
        }
      })
      .fail(function(data) {
        $('#called-edit-msg-error').hide().removeClass('hidden').fadeIn('fast');
      })
      .always(function(){
        $('#send-update-called').text('Editar').prop('disabled', false);
      })
      .done(function(data) {
        $('html, body').animate({ scrollTop: 0 }, 'slow', function() {
          $('#called-edit-msg-success').hide().removeClass('hidden').fadeIn('fast');
        });
      });

    };

    var init = function() {
      validationForm();
      getCalledEdit();
      listCalled();
    };

    return {
      init : init
    };

  })();

  $.fn.called.init();


})(window.jQuery, window, document);
