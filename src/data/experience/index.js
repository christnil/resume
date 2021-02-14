import * as sv from './sv.js';
import * as en from './en.js';

const mapAndSortList = (list) => {
  return list.map(project => ({
    ...project,
    keywords: project.keywords.map(keyword => ({ ...keyword, score: keyword.involvement * keyword.usage}))
      .sort((a, b) => {
        if (a.score > b.score) {
          return -1;
        }
        if (a.score < b.score) {
          return 1;
        }
        if (a.involvement > b.involvement) {
          return -1;
        }
        if (a.involvement < b.involvement) {
          return 1;
        }
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      })
  })).sort((a, b) => {
    if (a.to < b.to) {
      return 1;
    }
    if (a.to > b.to) {
      return -1;
    }
    if (a.from < b.from) {
      return 1;
    }
    if (a.from > b.from) {
      return -1;
    }
    return 0;
  });
}

export default {
  sv: {
    title: sv.title,
    list: mapAndSortList(sv.list),
  },
  en: {
    title: en.title,
    list: mapAndSortList(en.list),
  },
};
