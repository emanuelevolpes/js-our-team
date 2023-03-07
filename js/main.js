'use strict';

const myTeam = [
    {
        nome : 'Wayne Barnett',
        ruolo : 'Founder & CEO',
        foto : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome : 'Angela Caroll',
        ruolo : 'Chief Editor',
        foto : 'angela-caroll-chief-editor.jpg'
    },
    {
        nome : 'Walter Gordon',
        ruolo : 'Office Manager',
        foto : 'walter-gordon-office-manager.jpg'
    },
    {
        nome : 'Angela Lopez',
        ruolo : 'Social Media Manager',
        foto : 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome : 'Scott Estrada',
        ruolo : 'Developer',
        foto : 'scott-estrada-developer.jpg'
    },
    {
        nome : 'Barbara Ramos',
        ruolo : 'Graphic Designer',
        foto : 'barbara-ramos-graphic-designer.jpg'
    },
];

const containerTeam = document.getElementById('team-container');

for (let i = 0; i < myTeam.length; i++) {
    const myUlTeam = document.createElement('ul');
    containerTeam.append(myUlTeam);
    console.log(myUlTeam);
    for (let count = 0; count < 1; count++) {
        for (let key in myTeam[i]) {
            const myLiTeam = document.createElement('li');
            myUlTeam.append(myLiTeam);
            myLiTeam.append(myTeam[i][key]);
        };
    };
};