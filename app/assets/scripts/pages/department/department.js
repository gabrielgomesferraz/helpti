/*
 *  Register v1.0.0
 *  Register
 *  Made with ♥ by Gabriel Henrique Gomes Ferraz <gabrielgomes639@gmail.com>
 *  Under MIT License
 */

;(function($, window, document, undefined) {

  'use strict';

  $.fn.department = (function() {

    var form = $('#department-form');

    var validationForm = function() {
      $(form).validate({
        errorElement : 'p',
        errorClass : 'help-block',
        rules: {
          name: {
            required: true,
            minlength: 2
          },
        },
        messages : {
          name : {
            required: 'NOME DO DEPARTAMENTO OBRIGATÓRIO',
            minlength: 'NOME DO DEPARTAMENTO DEVE CONTER NO MÍNIMO 2 CARACTERES'
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
          sendForm(form);
        }
      });
    };

    var listDepartment = function() {
      var listDepartment = $('.list-content-departments tbody');

    };

    var sendForm = function(form) {
      var data = $(form).serialize();

      $.ajax({
        type: 'POST',
        url: '/build/pages/departments/create/src/CreateDepartmentController.php',
        data: data,
        async: true,
        beforeSend: function(xhr) {
          $('#send-department').text('Aguarde...').prop('disabled', true);
        }
      })
      .fail(function(data) {
        $('#department-msg-error').hide().removeClass('hidden').fadeIn('fast');
      })
      .always(function(){
        $('#send-department').text('Cadastrar').prop('disabled', false);
      })
      .done(function(data) {

        console.log(data);
        // $('html, body').animate({ scrollTop: 0 }, 'slow', function() {
        //   $('#department-msg-success').hide().removeClass('hidden').fadeIn('fast');
        //   $('#department-form')[0].reset();
        // });
      });

    };

    var init = function() {
      validationForm();
    };

    return {
      init : init
    };

  })();

  $.fn.department.init();


})(window.jQuery, window, document);
