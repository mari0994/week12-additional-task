"use strict";
const avatar = document.getElementById('avatar');
const comment = document.getElementById('comment');
const button = document.querySelector('.add-comment');
const commentsBox = document.querySelector('.chat');
const yesOption = document.getElementById('yes');
const noOption = document.getElementById('no');
const name = document.getElementById('name');
const nameDescription = document.getElementById('name-description');
const userPhoto = document.createElement('img');

const addName = (userName) => {
    userName = document.createElement('h3');
    userName.innerText = (name.value[0].toUpperCase() + name.value.substr(1).toLowerCase()).replace(/[\s0-9@#$%^&*(){}+=]/g,'');
    commentsBox.append(userName);
}

const addPhoto = () => {
    userPhoto.setAttribute('src', avatar.value);
    commentsBox.append(userPhoto);
}

const chooseRandomAvatar = () => {
    if (avatar.value === ''){

        const images = [
            './images/1.jpeg',
            './images/2.jpg',
            './images/3.jpg',
            './images/4.jpeg',
            './images/5.jpeg',
        ];
        const randomImage = Math.floor((Math.random()+1) * images.length);
        userPhoto.setAttribute('src', images[randomImage]);
        commentsBox.append(userPhoto);
    }
}

const addComment = (userComment) => {
    userComment = document.createElement('p');
    userComment.innerText = (comment.value[0].toUpperCase() + comment.value.substr(1)).replace(/\bviagra\b|\bxxx\b/gi, '***');
    commentsBox.append(userComment);
    }

const addDate = (date) => {
    date = document.createElement('p');
    date.innerText = new Date();
    date.classList.add('date');
    commentsBox.append(date);
}

const hideUsernameInput = () => {
    name.classList.add('hidden');
    nameDescription.classList.add('hidden');
}

const showUsernameInput = () => {
    name.classList.remove('hidden');
    nameDescription.classList.remove('hidden');
}

button.addEventListener('click', addName);
button.addEventListener('click', addPhoto);
button.addEventListener('click', addComment);
button.addEventListener('click', addDate);
button.addEventListener('click', chooseRandomAvatar);
noOption.addEventListener('click', hideUsernameInput);
yesOption.addEventListener('click', showUsernameInput);