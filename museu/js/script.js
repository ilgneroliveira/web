$( document ).ready(function() {
    // if($( "body" ).hasClass( "home")){
    //     alert("Login efetuado com sucesso")
    // }
});

function limpar() {
    $("input[name='nome']").val("");
    $('select').val("selecionar")
    $("input[name='data']").val("");
    $("input[name='autor']").val("");
    $("textarea[name='descricao']").val("");
    $("input[name='cpf']").val("");
    $("input[name='usuario']").val("");
    $("input[name='senha']").val("");
    $('input[type="radio"]').prop('checked', false);
}