// Setup header
const header = document.createElement('header');

// Setup header content
const headerContent = document.createElement('div');
headerContent.classList.add('header-content');
header.appendChild(headerContent);

// Setup logo box
const logoBox = document.createElement('div');
logoBox.classList.add('logo-box');
headerContent.appendChild(logoBox);

// Setup logo box link
const logoBoxLink = document.createElement('a');
logoBox.href = '../home/index.html';
logoBox.appendChild(logoBoxLink)

// Setup logo
const logo = document.createElement('img');
logo.classList.add('logo');
logo.src = '../../assets/logo.png';
logo.alt = 'Neptune logo';
logoBoxLink.appendChild(logo);

// Setup header nav
const headerNav = document.createElement('nav');

// Home link
const linkHome = document.createElement('a');
linkHome.href = '../home/index.html';
linkHome.innerHTML = 'Home';

// Docs link
const linkDocs = document.createElement('a');
linkDocs.href = '../documentation/index.html';
linkDocs.innerHTML = 'Docs';

// Ressources link
const linkRessources = document.createElement('a');
linkRessources.href = '../ressources/index.html';
linkRessources.innerHTML = 'Ressources';

// Github link
const githubLink = document.createElement('a');
githubLink.target = '_blank';
githubLink.href = 'https://github.com/neptune-css/neptune-css';
githubLink.innerHTML = '<i class="bi bi-github"></i>';

headerNav.appendChild(linkHome);
headerNav.appendChild(linkDocs);
headerNav.appendChild(linkRessources);
headerNav.appendChild(githubLink);
headerContent.appendChild(headerNav);

// Setup download link
const downloadButton = document.createElement('button');
downloadButton.classList.add('button-m');
downloadButton.classList.add('button-primary');
downloadButton.classList.add('download-button');
downloadButton.innerHTML = '<span class="button-icon-left" ><i class="bi bi-download"></i> Download</span>';
headerNav.appendChild(downloadButton);

// Setup menu button
const menuButton = document.createElement('button');
menuButton.classList.add('menu-button');
menuButton.id = 'menu-button';
menuButton.innerHTML = '<i class="bi bi-list"></i>';
menuButton.setAttribute('onclick','openMenu()')
headerContent.appendChild(menuButton);

// Setup mobile menu
const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');
mobileMenu.id = 'mobile-menu';

const mobileMenuHeader = document.createElement('div');
mobileMenuHeader.classList.add('menu-header');
mobileMenuHeader.innerHTML = '<h1 class="menu-headline">Menu</h1><button class="close-button" id="close-button" onclick="closeMenu()"><i class="bi bi-x-lg"></i></button>';
mobileMenu.appendChild(mobileMenuHeader);

const mobileMenuNav = document.createElement('nav');
mobileMenuNav.innerHTML = '<a href="../home/index.html">Home</a><a href="../documentation/index.html">Docs</a><a href="../ressources/index.html">Ressources</a>';
mobileMenu.appendChild(mobileMenuNav);

document.body.appendChild(header);
document.body.appendChild(mobileMenu);

function openMenu() {
    document.getElementById('mobile-menu').style.display = 'block';

}

function closeMenu() {
    document.getElementById('mobile-menu').style.display = 'none';
}