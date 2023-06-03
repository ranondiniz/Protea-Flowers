var tamanho = 10;

function aumentarFonte(){
    tamanho++;
    document.body.style.fontSize=tamanho+"px";
}

function diminuirFonte(){
    tamanho--;
    document.body.style.fontSize=tamanho+"px";
}


function test2(){
    var linktest = document.getElementById('link2');
    linktest.onclick = function () {
        window.location = "../perfil_comprador/perfil_comprador.html";
    };
}

function test(){
    var linktest = document.getElementById('link');
    linktest.onclick = function () {
        window.location = "../perfil_vendedor/perfil_vendedor.html";
    };
}


document.addEventListener('DOMContentLoaded', function() {




    //Ativa o modal

    $(".entrar").click(function(){
            
        $(".cliente-modal").fadeIn();
        $(".cliente").fadeIn();
        
        $('body').css("overflow", "hidden");
        
    });

    $(".Central-vendedor").click(function(){
        
        $(".vendedor-modal").fadeIn();
        $(".vendedor").fadeIn();
       
        $('body').css("overflow", "hidden");
       
    });

     $("#finalizarCompra").click(function(){
            
        $(".aprovado").fadeIn();
        // $('body').css("overflow", "hidden");
    });

    //Fecha o modal

    $(".img-fechar").click(function(){
        $(".fundo-modal").fadeOut();
        $(".modal").fadeOut();
        $('body').css("overflow", "visible");   
       
    });

    //Abrir menu mobile

    $(".menu-img").click(function(){
        $(".box-menu-mobile").toggle();
    });


    //Ativar modo noturno

    $("#icon_lua").click(function(){

        $('#icon_lua').css("display", "none");
        $('body, footer, header').css("background-color", "black"); 
        $('a, li, span, h1, h2, h3, p').css("color", "white");
        $('#icon_sol').css("display", "block");    
       
    });


    //Desativa modo noturno

    $("#icon_sol").click(function(){

        $('#icon_sol').css("display", "none");
        $('body').css("background-color", "#efefee"); 
        $('header').css("background-color", "#859479"); 
        $('footer').css("background-color", "#0F270F"); 
        $('.text-capslock ').css("color", "#0F270F");
        $('.informacoes-left li, .informacoes-right li').css("color", "#0F270F");
        $('#icon_lua').css("display", "block");    
       
    });

});