$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#butCancel').click(function(){
        $('form').slideUp();
    })

    $('#Atv-list').submit(function(event){
        event.preventDefault();
    })

    $(formulario).submit(function(event){
        event.preventDefault();

        const valorInput = $("#Atv").val();
        $("ul").append(`<li><span class="pendente"></span> ${valorInput}</li>`);
        $("#Atv").val('');
    })
})