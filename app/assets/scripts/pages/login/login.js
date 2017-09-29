/*
 *  Login v1.0.0
 *  Login
 *  Made with ♥ by Gabriel Henrique Gomes Ferraz <gabrielgomes639@gmail.com>
 *  Under MIT License
 */

;(function($, window, document, undefined) {

  'use strict';

  $.fn.login = (function() {

    var form = $('#login-form');

    var validationForm = function() {
      $(form).validate({
        errorElement : 'p',
        errorClass : 'help-block',
        rules: {
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
        url: '/build/pages/login/src/LoginController.php',
        data: data,
        async: true,
        beforeSend: function(xhr) {
          $('#send-login').text('Aguarde...').prop('disabled', true);
        }
      })
      .fail(function(data) {
        $('#login-msg-error').hide().removeClass('hidden').fadeIn('fast');
      })
      .always(function(){
        $('#send-login').text('Login').prop('disabled', false);
      })
      .done(function(data) {
        if(data == 0) {
          $('#login-msg-error-empty').hide().removeClass('hidden').fadeIn('fast');
        } else {
          $('#login-msg-error-empty').hide().addClass('hidden');
          window.location="/";
        }
        // $('html, body').animate({ scrollTop: 0 }, 'slow', function() {
          
        //   $('#login-msg-success').hide().removeClass('hidden').fadeIn('fast');
        //   $('#register-form')[0].reset();
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

  $.fn.login.init();


})(window.jQuery, window, document);
