/*
 *  Called v1.0.0
 *  Called
 *  Made with ♥ by Gabriel Henrique Gomes Ferraz <gabrielgomes639@gmail.com>
 *  Under MIT License
 */

;(function($, window, document, undefined) {

  'use strict';

  $.fn.called = (function() {

    var url = document.location.href,
        urlEditar = url.substring(url.indexOf('=') + 1);

    // var form = $('#called-form'),
    //     formEdit = $('#called-edit-form'),
    //     url = document.location.href,
    //     urlEditar = url.substring(url.indexOf('=') + 1);

    // var validationForm = function() {

    //   $(formEdit).validate({
    //     errorElement : 'p',
    //     errorClass : 'help-block',
    //     rules: {
    //       name: {
    //         required: true,
    //         minlength: 2
    //       },
    //     },
    //     messages : {
    //       name : {
    //         required: 'NOME DO DEPARTAMENTO OBRIGATÓRIO',
    //         minlength: 'NOME DO DEPARTAMENTO DEVE CONTER NO MÍNIMO 2 CARACTERES'
    //       },
    //     },
    //     highlight: function (element, errorClass, validClass) {
    //       $(element).closest('.form-group').addClass('has-error');
    //     },
    //     unhighlight: function (element, errorClass, validClass) {
    //       $(element).closest('.form-group').removeClass('has-error');
    //     },
    //     errorPlacement: function(error, element) {
    //       error.insertAfter(element);
    //     },
    //     submitHandler: function (form) {
    //       sendFormEdit(formEdit);
    //     }
    //   });
    // };

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
      // var editName = $('#called-edit-form').find('#name');


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
            // editName.val(data[0].name);
            // $('#departmentId').val(data[0].id);
          });
        }
    };


    // var sendFormEdit = function(formEdit) {
    //   var data = $(formEdit).serialize();

    //   $.ajax({
    //     type: 'POST',
    //     url: '/build/pages/departments/edit/src/EditDepartmentController.php',
    //     data: data,
    //     async: true,
    //     beforeSend: function(xhr) {
    //       $('#edit-department').text('Aguarde...').prop('disabled', true);
    //     }
    //   })
    //   .fail(function(data) {
    //     $('#department-edit-msg-error').hide().removeClass('hidden').fadeIn('fast');
    //   })
    //   .always(function(){
    //     $('#edit-department').text('Editar').prop('disabled', false);
    //   })
    //   .done(function(data) {
    //     console.log(data);
    //     $('html, body').animate({ scrollTop: 0 }, 'slow', function() {
    //       $('#department-edit-msg-success').hide().removeClass('hidden').fadeIn('fast');
    //       $('#department-edit-form')[0].reset();
    //     });
    //   });

    // };

    var init = function() {
      // validationForm();
      getCalledEdit();
      listCalled();
      // getDepartamentEdit();
    };

    return {
      init : init
    };

  })();

  $.fn.called.init();


})(window.jQuery, window, document);
