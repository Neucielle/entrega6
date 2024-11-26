document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o carrossel Swiper
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    // Adiciona evento de navegação com as teclas
    document.addEventListener('keydown', function (event) {
        if(event.key === 'ArrowLeft') {
            swiper.slidePrev();
        } else if(event.key === 'ArrowRight') {
            swiper.slideNext();
        }
    });

    // Código para busca de jogos
    const gameInput = document.getElementById('gameInput');
    gameInput.addEventListener('keypress', function (event){
        if(event.key === 'Enter'){
            let searchGame = gameInput.value.trim().toUpperCase();

            switch(searchGame){
                case 'MARIO':
                    swiper.slideTo(0);
                    break;
                case 'POKEMON':
                    swiper.slideTo(1);
                    break;
                default:
                    alert('Jogo não foi encontrado');
                    break;
            }
        }
    });

    // Obter o modal do Jogo 1
    var game1Modal = document.getElementById("game1Modal");

    // Obter o botão que abre o modal
    var game1Btn = document.getElementById("myBtn");

    // Obter o elemento <span> que fecha o modal
    var game1Close = game1Modal.getElementsByClassName("close")[0];

    // Quando o usuário clicar no botão de Jogo 1, abre o modal
    game1Btn.onclick = function() {
        game1Modal.style.display = "block";
    };

    // Quando o usuário clicar no <span> (x), fecha o modal
    game1Close.onclick = function() {
        game1Modal.style.display = "none";
    };

    // Quando o usuário clicar fora do modal, ele também fecha
    window.onclick = function(event) {
        if (event.target == game1Modal) {
            game1Modal.style.display = "none";
        }
    };
});
