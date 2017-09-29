/*
 *  Register v1.0.0
 *  Register
 *  Made with ♥ by Gabriel Henrique Gomes Ferraz <gabrielgomes639@gmail.com>
 *  Under MIT License
 */

;(function($, window, document, undefined) {

  'use strict';

  $.fn.register = (function() {

    var form = $('#register-form');

    var validationForm = function() {
      $(form).validate({
        errorElement : 'p',
        errorClass : 'help-block',
        rules: {
          firstName: {
            required: true,
            minlength: 2
          },
          lastName: {
            required: true,
            minlength: 2
          },
          email: {
            required: true,
            email: true
          },
          password: {
            required: true,
            minlength: 6
          }
        },
        messages : {
          firstName : {
            required: 'NOME OBRIGATÓRIO',
            minlength: 'NOME DEVE CONTER NO MÍNIMO 2 CARACTERES'
          },
          lastName : {
            required: 'SOBRENOME OBRIGATÓRIO',
            minlength: 'SOBRENOME DEVE CONTER NO MÍNIMO 2 CARACTERES'
          },
          email : {
            required: 'EMAIL OBRIGATÓRIO',
            email: 'EMAIL INVÁLIDO'
          },
          password : {
          	required: 'SENHA OBRIGATÓRIO',
            minlength: 'SENHA DEVE CONTER NO MÍNIMO 6 CARACTERES'
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
        url: '/build/pages/register/src/RegisterController.php',
        data: data,
        async: true,
        beforeSend: function(xhr) {
          $('#send-register').text('Aguarde...').prop('disabled', true);
        }
      })
      .fail(function(data) {
        $('#register-msg-error').hide().removeClass('hidden').fadeIn('fast');
      })
      .always(function(){
        $('#send-register').text('Cadastrar').prop('disabled', false);
      })
      .done(function(data) {
        $('html, body').animate({ scrollTop: 0 }, 'slow', function() {
          $('#register-msg-success').hide().removeClass('hidden').fadeIn('fast');
          $('#register-form')[0].reset();
        });
      });

    };

    var init = function() {
      validationForm();
    };

    return {
      init : init
    };

  })();

  $.fn.register.init();


})(window.jQuery, window, document);
