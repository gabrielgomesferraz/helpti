/*
 *  Create v1.0.0
 *  Create
 *  Made with ♥ by Gabriel Henrique Gomes Ferraz <gabrielgomes639@gmail.com>
 *  Under MIT License
 */

;(function($, window, document, undefined) {

  'use strict';

  $.fn.create = (function() {

    var form = $('#create-form');


    var listDepartment = function() {
      var department = $('#department'),
          departmentsArray = [];


        $.ajax({
          type: 'GET',
          url: '/build/pages/departments/src/DepartmentsController.php',
          data: {
            action: "getDepartments",
          },
          async: true,
          dataType: "json",
        })
        .fail(function(data) {
          $('#department-msg-error').hide().removeClass('hidden').fadeIn('fast');
        })
        .always(function(){
        })
        .done(function(data) {
          if(data.length) {
            for(var i = 0; i < data.length; i++) {
              departmentsArray.push(
                '<option value="'+data[i].id+'">'+data[i].name+'</option>'
              );
            }
            department.append(departmentsArray);
          }
        });
    };

    var validationForm = function() {
      $(form).validate({
        errorElement : 'p',
        errorClass : 'help-block',
        rules: {
          titleCalled: {
            required: true,
            minlength: 2
          },
          department: {
            required: true,
          },
          description: {
            required: true,
          }
        },
        messages : {
          titleCalled : {
            required: 'O TITULO DO CHAMADO É OBRIGATÓRIO',
            minlength: 'O TITULO DO CHAMADO DEVE CONTER NO MÍNIMO 2 CARACTERES',
          },
          department : {
            required: 'DEPARTAMENTO É OBRIGATÓRIO',
          },
          description : {
          	required: 'DESCRIÇÃO OBRIGATÓRIA',
          }
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
          sendForm(form);
        }
      });
    };

    var sendForm = function(form) {
      var data = $(form).serialize();

      $.ajax({
        type: 'POST',
        url: '/build/pages/called/create/src/CreateController.php',
        data: data,
        async: true,
        beforeSend: function(xhr) {
          $('#send-create').text('Aguarde...').prop('disabled', true);
        }
      })
      .fail(function(data) {
        $('#create-msg-error').hide().removeClass('hidden').fadeIn('fast');
      })
      .always(function(){
        $('#send-create').text('Enviar Chamado').prop('disabled', false);
      })
      .done(function(data) {
        $('html, body').animate({ scrollTop: 0 }, 'slow', function() {
          $('#create-msg-success').hide().removeClass('hidden').fadeIn('fast');
          $('#create-form')[0].reset();
        });
      });

    };

    var init = function() {
      validationForm();
      listDepartment();
    };

    return {
      init : init
    };

  })();

  $.fn.create.init();


})(window.jQuery, window, document);
