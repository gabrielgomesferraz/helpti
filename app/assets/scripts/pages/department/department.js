/*
 *  Department v1.0.0
 *  Department
 *  Made with ♥ by Gabriel Henrique Gomes Ferraz <gabrielgomes639@gmail.com>
 *  Under MIT License
 */

;(function($, window, document, undefined) {

  'use strict';

  $.fn.department = (function() {

    var form = $('#department-form'),
        formEdit = $('#department-edit-form'),
        url = document.location.href,
        urlEditar = url.substring(url.indexOf('=') + 1);

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

      $(formEdit).validate({
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
          sendFormEdit(formEdit);
        }
      });
    };

    var listDepartment = function() {
      var listDepartment = $('.list-content-departments tbody'),
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
          console.log(data);

          if(data.length) {
            for(var i = 0; i < data.length; i++) {
              departmentsArray.push(
                '<tr><td>'+data[i].name+'</td><td><a class="editar" href="/departamentos/editar?='+data[i].id+'"><span class="glyphicon glyphicon-edit"></span></a></td><td><a class="remover" data-value="'+data[i].id+'" href="#"><span class="glyphicon glyphicon-remove"></span></a></td></tr>'
              );
            }

            listDepartment.find('tr').remove();
            listDepartment.append(departmentsArray);
            removeDepartment();
          }
        });
    };

    var getDepartamentEdit = function() {
      var editName = $('#department-edit-form').find('#name');


        if(url.match(/editar/gi)) {
          $.ajax({
            type: 'GET',
            url: '/build/pages/departments/edit/src/EditDepartmentController.php',
            data: {
              action: "getDepartmentEdit",
              departmentId: urlEditar,
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
            editName.val(data[0].name);
            $('#departmentId').val(data[0].id);
          });
        }
    };



    var removeDepartment = function() {
        var remover = $('.remover');

        remover.click(function() {
          
          $.ajax({
            type: 'POST',
            url: '/build/pages/departments/src/DepartmentsController.php',
            data: {
              action: "removeDepartment",
              departmentId: $(this).attr('data-value'),
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
            listDepartment();
            $('html, body').animate({ scrollTop: 0 }, 'slow', function() {
              $('#remove-department-msg-success').hide().removeClass('hidden').fadeIn('fast');
            });
          });
        });
    };

    var sendFormEdit = function(formEdit) {
      var data = $(formEdit).serialize();

      $.ajax({
        type: 'POST',
        url: '/build/pages/departments/edit/src/EditDepartmentController.php',
        data: data,
        async: true,
        beforeSend: function(xhr) {
          $('#edit-department').text('Aguarde...').prop('disabled', true);
        }
      })
      .fail(function(data) {
        $('#department-edit-msg-error').hide().removeClass('hidden').fadeIn('fast');
      })
      .always(function(){
        $('#edit-department').text('Editar').prop('disabled', false);
      })
      .done(function(data) {
        console.log(data);
        $('html, body').animate({ scrollTop: 0 }, 'slow', function() {
          $('#department-edit-msg-success').hide().removeClass('hidden').fadeIn('fast');
          $('#department-edit-form')[0].reset();
        });
      });

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
        $('html, body').animate({ scrollTop: 0 }, 'slow', function() {
          $('#department-msg-success').hide().removeClass('hidden').fadeIn('fast');
          $('#department-form')[0].reset();
        });
      });

    };

    var init = function() {
      validationForm();
      listDepartment();
      getDepartamentEdit();
    };

    return {
      init : init
    };

  })();

  $.fn.department.init();


})(window.jQuery, window, document);
