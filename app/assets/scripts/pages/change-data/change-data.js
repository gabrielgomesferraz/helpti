/*
 *  Change Data v1.0.0
 *  Change Data
 *  Made with ♥ by Gabriel Henrique Gomes Ferraz <gabrielgomes639@gmail.com>
 *  Under MIT License
 */

;(function($, window, document, undefined) {

  'use strict';

  $.fn.changeData = (function() {

    var form = $('#change-data-form');

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

      console.log(data);
      
      $.ajax({
        type: 'POST',
        url: '/build/pages/change-data/src/ChangeDataController.php',
        data: data,
        async: true,
        beforeSend: function(xhr) {
          $('#send-change-data').text('Aguarde...').prop('disabled', true);
        }
      })
      .fail(function(data) {
        $('#change-data-msg-error').hide().removeClass('hidden').fadeIn('fast');
      })
      .always(function(){
        $('#send-change-data').text('Cadastrar').prop('disabled', false);
      })
      .done(function(data) {
        $('html, body').animate({ scrollTop: 0 }, 'slow', function() {
          $('#change-data-msg-success').hide().removeClass('hidden').fadeIn('fast');
        });
      });

    };

    var getUser = function() {
       var firstName = $('#firstName'),
           lastName  = $('#lastName'),
           email = $('#email'),
           rule = $('#rule'),
           userId = $('#userId');

        $.ajax({
          type: 'GET',
          url: '/build/pages/change-data/src/ChangeDataController.php',
          data: {
            action: "getUser",
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

          userId.val(data[0].id);
          firstName.val(data[0].firstName);
          lastName.val(data[0].lastName);
          email.val(data[0].email);
          rule.val(data[0].rule);

           if(Number($('.session')[0].innerHTML) > 1) {
              rule.removeClass('hidden');
           }
        });
    };

    var init = function() {
      getUser();
      validationForm();
    };

    return {
      init : init
    };


  })();

  $.fn.changeData.init();


})(window.jQuery, window, document);
