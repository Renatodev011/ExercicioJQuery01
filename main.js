$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#butCancel').click(function(){
        $('form').slideUp();
    })

    $('#Atv-list').submit(function(event){
        event.preventDefault();

        const valorinput = $("#Atv").val();
        $("ul").append(`<li><span class="pendente">📍</span> ${valorinput}</li>`);
        $("#Atv").val('');
    })
})