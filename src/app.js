import axios from 'axios';
import i18n from 'i18next';
import * as yup from 'yup';
import _ from 'lodash';
import onChange from 'on-change';
import resources from './locales/lang.js';
import getHandler, { renderText, getElements } from './view.js';
import parser from './parser.js';

const validate = (url, urls) => yup.string().trim().required().url('mustBeValid')
  .notOneOf(urls, 'rssExists')
  .validate(url);

const createPosts = (feedID, data) => (data.items.reverse().map((post) => {
  const { title, description, link } = post;
  return {
    id: _.uniqueId(), feedID, title, description, link,
  };
}));

const updatePosts = (id, data, state) => {
  const posts = createPosts(id, data);
  state.posts.push(...posts);
};

const createFeed = (url, feed) => ({ ...feed, id: _.uniqueId() });

const updateFeeds = (state) => {
  const promise = state.feeds.map((feed) => axios
    .get(`https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(feed.url)}`)
    .then((response) => {
      const { id } = feed;
      const newPosts = parser(response.data.contents).items;
      const oldPosts = state.posts.filter((post) => post.feedID === id);
      const diff = _.differenceWith(newPosts, oldPosts, (a, b) => a.link === b.link);
      if (diff.length > 0) {
        const data = {
          items: diff,
        };
        updatePosts(id, data, state);
      }
    })
    .catch(() => {}));
  Promise.all(promise).finally(() => setTimeout(() => updateFeeds(state), 5000));
};

const addFeed = (url, data, state) => {
  const dataFeed = createFeed(url, data);
  const { id } = dataFeed;
  const dataPosts = createPosts(id, data);
  state.urls.push(url);
  state.feeds.push(dataFeed);
  state.posts.push(...dataPosts);
};

const defaultLng = 'ru';

export default () => {
  const i18nextInstance = i18n.createInstance();
  i18nextInstance.init({
    lng: defaultLng,
    debug: false,
    resources,
  })
    .then(() => {
      const elements = getElements();
      renderText(i18nextInstance, elements);
      const state = {
        processing: 'ready for addition',
        message: null,
        urls: [],
        feeds: [],
        posts: [],
        ui: {
          viewPostsIds: [],
          modal: null,
          lng: defaultLng,
        },
      };

      const watchedState = onChange(state, getHandler(state, i18nextInstance));
      elements.form.addEventListener('submit', ((event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const url = formData.get('url');
        validate(url, state.urls)
          .then((link) => {
            watchedState.processing = 'addition';
            return axios.get(`https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(link)}`);
          })
          .then((response) => {
            const data = parser(response.data.contents);
            addFeed(url, data, watchedState);
            watchedState.processing = 'success';
            watchedState.message = 'success';
          })
          .catch((error) => {
            watchedState.processing = 'error';
            watchedState.message = error.message;
          });
      }));

      elements.posts.addEventListener('click', (event) => {
        const { id } = event.target.dataset;
        if (id) {
          watchedState.ui.modal = watchedState.posts.find((post) => post.id === id);
          watchedState.ui.viewPostsIds.push(id);
        }
      });

      elements.btnLng.addEventListener('click', (event) => {
        event.preventDefault();
        const { lng } = event.target.dataset;
        if (lng) watchedState.ui.lng = lng;
      });
      updateFeeds(watchedState);
    });
};









// import 'bootstrap'
// // import onChange from 'on-change'
// // import * as yup from 'yap'
// // import i18n from 'i18next'
// import resourses from './locales/lang.js'
// import render from './view.js'
// // import parser from './parse.js'

// // const schema = yup.string().trim().required().url()
//    // .notOneOf

// const validate = (fields) => {
//    return schema.validate('notOneOf').then(console.log).catch(console.log)
// }


// // Функцию парсинга выношу в отдельный модуль
// // Отделить renderForm и renderPost 


// // VIEW


// const loadRss = (url, watchedState) => {

// }

// const updateRss = (watchedState) => {

// }


// // app

// export default async () => {
//    const defaultLanguage = 'ru'
//    const i18Instance = i18n.createInstance()
//    await i18Instance.init({
//       lng: defaultLanguage,
//       debug: false,
//       resourses,
//    })
   



//    // <MODEL>
   
//    const initialState = {
//       form: {
//          state: [
//             'filling', // процесс заполнения формы
//             'invalid',
//             'initial',
//          ], 
//          error: null,
//       },
//          fields: {
//             url: '',
//       },
//       posts: [],
//    }

// // <MODEL />

//  const elements = {
//     formEl: document.querySelector('form'),
//     inputEl: document.querySelector('input[type=number]'),
//     resetEl: document.querySelector('button')

//  }  

// const watchedState = watch(initialState, elements, i18Instance)


// // CONTROLLER

// elements.formEl.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const data = new FormData(e.target);
// const url = data.get('url')
// const existedUrls = []
// validate(url, existedUrls)

// loadRss(url)
//   // меяняем состояние
  
// //   render(state, formEl, inputEl, resultEl);
// render(state, formEl)
// });

// // Урок - перехват и вспылытие
// elements.postsContainer.addEventListener('click', () => {
//   state = 0;
// // условие должно отметать лишние клики по пустому пространству
//   // меяняем состояние

// })
// updateRss()
// inputEl.focus();
// };

// // пришедшие данные надо распарсить на посты и фиды

// // const posts = [
// //    {
// //       id: 1,
// //       question,
// //       likesCount,
// //    },
// //    {
// //       id: 2,
// //       question,
// //       likesCount,
// //    },
// // ]

// // const feeds = [
// //    {
// //       id: 1,
// //       postId: 2,
// //       answer,
// //       likesCount,
// //    }
// // ]