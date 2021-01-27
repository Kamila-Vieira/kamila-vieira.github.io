
let repoNames = [];
let repositories = [];

const fetchGithubRepos = async () =>{
  const response = await fetch('https://api.github.com/users/Kamila-Vieira/repos');
  return await response.json()
    .then(data => data.map(repo => repoNames.push(repo.name)))
    .catch(err => console.log(err));
}

const fetchRepo = async () => {
  let repoURL = 'https://api.github.com/repos/Kamila-Vieira';
  return repoNames.map(async repoName => {
    const res = await fetch(`${repoURL}${repoName}`);
    const repoJson = await res.json()
      .then(data => createRepoCard(data))
      .catch(err => console.log(err));
    return repoJson;
  });
}
fetchGithubRepos();
fetchRepo();

const createRepoCard = (repo) => {
  let listReposContainer = document.querySelector('.repositories-list');
  const {name, description} = repo;
  let repoCardInit = "<li class='repo-card'>";
  let repoCard = 
    `<div id="${name}" class="repo">
      <p class="repo-name">${name}</p>
      <p class="repo-description">${description}</p>
    </div>
    </li>`
  repoCardInit += repoCard;
  listReposContainer.innerHTML += repoCardInit;
}