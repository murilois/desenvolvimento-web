// Função para atualizar as informações do Profile
function updateProfileInfo(profileData){
    const picture = document.getElementById('profile-photo');
    picture.src = profileData.photo;
    picture.alt = profileData.name;
    const name = document.getElementById('profile-name');
    name.innerText = profileData.name;
    const linkedin = document.getElementById('profile-linkedin');
    linkedin.innerText = profileData.linkedin;
    const github = document.getElementById('profile-github');
    github.innerText = profileData.github;
    const email = document.getElementById('profile-email');
    email.innerText = profileData.email;
}
// Função para atualizar o central
function updateCentralInfo(profileData){
    const portfolio = document.getElementById('profile-portfolio');
    portfolio.innerHTML = profileData.portfolio.map(project =>
        `<h2>${project.name}</h2>
            <button class="trigger" type="button">
                Clique para ver o projeto
            </button>
            <div class="content">
                    <figure>
                        <img src="assets/imgs/projetofinal1.png" alt="Loading">
                        <figcaption><a href="">Clique para ver o repositório do projeto</a></figcaption>
                    </figure>
            </div>`)
.join('');
}
(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
})()