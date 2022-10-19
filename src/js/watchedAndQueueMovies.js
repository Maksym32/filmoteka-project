import { refs } from './refs.js';
import { createMovieCard } from './libraryMovieCard';
import { renderLibrary } from './renderLibrary';
import imgLibrary from '../images/img-library.jpg';

renderLibrary();

refs.watchedBtnLib.addEventListener('click', onWatchedBtnClick);
refs.queueBtnLib.addEventListener('click', onQueueBtnClick);


export function onWatchedBtnClick() {
  refs.gallery.innerHTML = '';
  let getWatched = localStorage.getItem('Watch');
  const parsedGetWatched = JSON.parse(getWatched);
  if (getWatched !== null && parsedGetWatched.length !== 0) {
      refs.gallery.insertAdjacentHTML(
        'afterbegin',
        createMovieCard(parsedGetWatched)
      );
      refs.fillerContainer.innerHTML = '';
    } else {
      refs.fillerContainer.innerHTML = `<p class="fill-text">Your list is empty. Choose a movie.</p>
    <img class="img__library"src="${imgLibrary}" alt="popcorn"/>`;
    }
  }



  function onQueueBtnClick() {
    refs.watchedBtnLib.classList.remove('button-active');
    refs.gallery.innerHTML = '';
    let getQueue = localStorage.getItem('Queue');
    const parsedGetQueue = JSON.parse(getQueue);
    if (getQueue !== null && parsedGetQueue.length !== 0) {
      refs.gallery.insertAdjacentHTML(
        'afterbegin',
        createMovieCard(parsedGetQueue)
      );
      refs.fillerContainer.innerHTML = '';
    } else {
      refs.fillerContainer.innerHTML = `<p class="fill-text">Your list is empty. Choose a movie.</p>
    <img class="img__library"src="${imgLibrary}" alt="popcorn"/>`;
    }
  }



