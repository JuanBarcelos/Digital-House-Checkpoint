
/*-----------modal-----------*/
function activeModal(modalID) {
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add('active');
        modal.addEventListener('click', (e) => {
            if (e.target.id == modalID || e.target.id == 'btnCancelar') {
                modal.classList.remove('active');
            }
        })
    }

}
const btnAdd = document.getElementById('add-devs');
btnAdd.addEventListener('click', () => {
    activeModal('modal');
});

/*-----------cards-----------*/
const perfilDev = [
    {
        nome: 'Nome do Dev',
        avatar: "../img/perfil-dev.jpg",
        cargo: 'Desenvolvedores Frontend',
        github: "https://github.com/JuanBarcelos",
        linkedin: "https://www.linkedin.com/feed/"
    },
    {
        nome: 'Nome do Dev',
        avatar: "../img/perfil-dev.jpg",
        cargo: 'Desenvolvedores Frontend',
        github: "https://github.com/JuanBarcelos",
        linkedin: "https://www.linkedin.com/feed/"
    },
    {
        nome: 'Nome do Dev',
        avatar: "../img/perfil-dev.jpg",
        cargo: 'Desenvolvedores Frontend',
        github: "https://github.com/JuanBarcelos",
        linkedin: "https://www.linkedin.com/feed/"
    },
    {
        nome: 'Nome do Dev',
        avatar: "../img/perfil-dev.jpg",
        cargo: 'Desenvolvedores Frontend',
        github: "https://github.com/JuanBarcelos",
        linkedin: "https://www.linkedin.com/feed/"
    },
    {
        nome: 'Nome do Dev',
        avatar: "../img/perfil-dev.jpg",
        cargo: 'Desenvolvedores Frontend',
        github: "https://github.com/JuanBarcelos",
        linkedin: "https://www.linkedin.com/feed/"
    }
]



const nome = document.getElementById('name');
const avatar = document.getElementById('avatar');
const cargo = document.getElementById('cargo');
const github = document.getElementById('github');
const linkedin = document.getElementById('linkedin');
const cadastrar = document.getElementById('cadastrar');
const modal = document.getElementById('modal');
const card = document.querySelector('.cards');


cadastrar.addEventListener('click', (e) => {
    e.preventDefault();
    if (nome.value !== '' && cargo.value !== '' && github.value !== '' && avatar.value !== '' && linkedin.value !== '') {
        perfilDev.push(
            {
                nome: nome.value,
                avatar: avatar.value,
                cargo: cargo.value,
                github: github.value,
                linkedin: linkedin.value
            }
        )     
        
        for (const dev of perfilDev) {
           const perfil = `<div class="card-dev">
            <div class="info-dev">
                <div class="perfil">
                    <img src=${dev.avatar} alt="">
                        <div class="line"></div>
                        <h1>${dev.nome}</h1>
                        <p>${dev.cargo}</p>
                </div>
                <div class="rede-social">
                    <a href=${dev.github}>
                        <img src="../img/icone github.svg" alt="">
                    </a>
                    <a href=${dev.linkedin}>
                        <img src="../img/icone linkedin.svg" alt="">
                    </a>
                    <div class="btn-social">
                        <a href="#">ver mais</a>
                    </div>
                </div>
            </div>
        
            <div class="btn-dev">
                <div class="editar">
                    <a href="#">Editar</a>
                </div>
                <div class="deletar">
                    <a href="#">Deletar</a>
                </div>
            </div>
        </div>`

            card.innerHTML += perfil;
        } 
    }
    else{
        alert('Preencha os campos')
    }
    
    
})

