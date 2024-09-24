//função para alterar a cor e a menssagem do botão "Follow"

const botao = document.getElementById('meuBotao'); //puxando o botão pelo id
        
        //adicionando um evento de clique ao botão através de um evento de escuta
        botao.addEventListener('click', function() {
            //obtém a cor de fundo atual
            const corAtual = botao.style.backgroundColor;
            const textoAtual = botao.textContent; //obtendo o texto atual
            
            //alterna a cor do botão
            if (corAtual === 'blue' || corAtual === '') {
                botao.style.backgroundColor = 'green'; //cor ao clicar
                botao.textContent = 'Following'
            } else {
                botao.style.backgroundColor = 'blue'; //voltar para a cor inicial
                botao.textContent = 'Follow'; //voltar para o texto icnicial
            }
        });

//função para alterar o ícone de "Like"

function alternarIcone() { //função para alternar a cor do ícone de like
        const icone = document.getElementById("heart"); 
         
            if (icone.classList.contains('fa-heart-o')){ //condição para os ícones serem alterados
             icone.classList.remove('fa-heart-o');
             icone.classList.add('fa-heart');
         } else {
             icone.classList.remove('fa-heart');
             icone.classList.add('fa-heart-o');
         }
             }

//função para adicoinar animação de pulsação ao ícone "Like"

function alternarIcone() {
        const icone = document.getElementById("heart");
                
                //adiciona a classe de animação de pulsação
            icone.classList.add('pulse'); //adicionando função de pulsar
                
            //adiciona a classe de animação de corações flutuantes
            // icone.classList.add('heart-flutter');
                
            //remove a animação após alguns segundos para que possa ser reutilizada
            setTimeout(() => {
                icone.classList.remove('pulse'); //removendo função de pulsar
                // icone.classList.remove('heart-flutter');
            }, 600); //tempo igual ao da animação de pulsação
               
            if (icone.classList.contains('fa-heart-o')) {
                icone.classList.remove('fa-heart-o');
                icone.classList.add('fa-heart');
            } else {
                icone.classList.remove('fa-heart');
                icone.classList.add('fa-heart-o');
                }
            }

//função para alterar o ícone de "Compartilhar Post"            

function sharePost() { //função para alternar o ícone de compartilhar publicação
        const icone = document.getElementById('share');
            
            if(icone.classList.contains('fa-paper-plane-o')){ //condição para alternar os ícones de compartilhar
                icone.classList.remove('fa-paper-plane-o');
                icone.classList.add('fa-paper-plane');
            } else {
                 icone.classList.remove('fa-paper-plane');
                 icone.classList.add('fa-paper-plane-o');
            }
             }   
             
//função para alterar o ícone de "Salvar Post" 
             
 function savePost() { //funçãp para alternar o ícone de salvar publicação
        const icone = document.getElementById('save');
        
            if (icone.classList.contains('fa-bookmark-o')){ //condição para alternar os ícones de salvar 
                icone.classList.remove('fa-bookmark-o');
                icone.classList.add('fa-bookmark');
            } else {
                icone.classList.remove('fa-bookmark');
                icone.classList.add('fa-bookmark-o');
            }
             }             

//função para fazer comentário após clicar no ícone 

document.addEventListener('DOMContentLoaded', function() { //evento de escuta, evento para disparar quando o html for carregado e função
        const commentIcon = document.querySelector('.fa-comment-o'); //procura o elemento, no caso, o ícone
        const commentBox = document.getElementById('comment-box');//retorna o box
            
            commentIcon.addEventListener('click', function() { //evento de escuta para a função click
                    // alterna a visibilidade da caixa de comentário
                if (commentBox.style.display === 'none') { //a caixa de comentário está oculta
                    commentBox.style.display = 'block';  // a caixa de comentário está visível
                } else {
                    commentBox.style.display = 'none';
                }
            });
            
                //fechar a caixa de comentário quando o botão de enviar é clicado
        const submitButton = document.getElementById('submit-comment');
            submitButton.addEventListener('click', function() {
                alert('Comentário enviado!');//avisa que o cometário foi enviado
                commentBox.style.display = 'none';
             });
        });




    //      // Função para criar um novo post
    // function criarPost(usuario, imagemUrl) {
    //     return `
    //         <div class="post-container">
    //             <div class="post-header">
    //                 <div class="left">
    //                     <div class="circle">
    //                         <i class="fa fa-user-circle-o"></i>
    //                     </div>
    //                     <span>${usuario}</span>
    //                 </div>
    //                 <div class="right">
    //                     <button id="meuBotao">Follow</button>
    //                 </div>
    //             </div>
    //             <div class="container2"></div>
    //             <div class="post-image">
    //                 <img src="${imagemUrl}" />
    //             </div>
    //             <div class="post-icons">
    //                 <div id="post-icons-utils">
    //                     <i id="heart" class="fa fa-heart-o" onclick="alternarIcone()"></i>
    //                     <i class="fa fa-comment-o"></i>
    //                     <i id="share" class="fa fa-paper-plane-o" onclick="sharePost()"></i>
    //                 </div>
    //                 <div>
    //                     <i id="save" class="fa fa-bookmark-o" onclick="savePost()"></i>
    //                 </div>
    //             </div>
    //             <div id="comment-box" class="comment-box" style="display: none;">
    //                 <textarea id="comment-text" placeholder="Escreva um comentário..."></textarea>
    //                 <button id="submit-comment">Enviar</button>
    //             </div>
    //         </div>
    //     `;
    // }

    // // Função para adicionar posts ao container
    // function adicionarPosts() {
    //     const postsContainer = document.getElementById('posts-container');
        
    //     const posts = [
    //         { usuario: 'user1', imagemUrl: 'https://i.pinimg.com/564x/35/77/e2/3577e2b8989355706f35e67863ac584d.jpg' },
    //         { usuario: 'user2', imagemUrl: 'https://i.pinimg.com/564x/35/77/e2/3577e2b8989355706f35e67863ac584d.jpg' }
    //         // Adicione mais posts aqui
    //     ];

    //     posts.forEach(post => {
    //         postsContainer.innerHTML += criarPost(post.usuario, post.imagemUrl);
    //     });
    // }

    // // Chama a função para adicionar posts quando a página carregar
    // window.onload = adicionarPosts;

   
