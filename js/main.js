'use strict';

const myTeam = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'img/walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'img/scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'img/barbara-ramos-graphic-designer.jpg'
    },
];

const containerTeam = document.getElementById('team-container');

for (let i = 0; i < myTeam.length; i++) {

    const myDivTeam = document.createElement('div');
    myDivTeam.style.setProperty('width', 'calc(100% / 4');
    myDivTeam.classList.add('card');
    myDivTeam.classList.add('m-4');
    containerTeam.append(myDivTeam);
    console.log(myDivTeam);

    const myImgTeam = document.createElement('img');
    myImgTeam.style.width = '100%';
    myImgTeam.classList.add('rounded');
    myDivTeam.append(myImgTeam);
    myImgTeam.src = (myTeam[i].foto);

    const myNameTeam = document.createElement('h2');
    myNameTeam.classList.add('text-center')
    myDivTeam.append(myNameTeam);
    myNameTeam.append(myTeam[i].nome);

    const myRoleTeam = document.createElement('h5');
    myRoleTeam.classList.add('text-center')
    myDivTeam.append(myRoleTeam);
    myRoleTeam.append(myTeam[i].ruolo);
};