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

    const myUlTeam = document.createElement('ul');
    containerTeam.append(myUlTeam);
    console.log(myUlTeam);

    const myLiTeam = document.createElement('li');
    myUlTeam.append(myLiTeam);
    myLiTeam.append(myTeam[i].nome);

    const myLiTeam2 = document.createElement('li');
    myUlTeam.append(myLiTeam2);
    myLiTeam2.append(myTeam[i].ruolo);

    const myLiTeam3 = document.createElement('li');
    const myLiTeam3img = document.createElement('img');
    myUlTeam.append(myLiTeam3);
    myLiTeam3.append(myLiTeam3img);
    myLiTeam3img.src = (myTeam[i].foto);

};