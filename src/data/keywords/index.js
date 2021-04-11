import experience from '../experience';

const text = {
  sv: {
    title: 'Nyckelord',
    description: 'Samma som finns med ovan, bara grupperade på ett annat sätt.',
  },
  en: {
    title: 'Keywords',
    description: 'These are mostly the same keywords as highlighted above, I have chosen to exclude som tools that I don\'t feel are relevant to the project. But those are visible here. I also tried to group the key words for an easier overview.',
  },
};

const exp = {};

Object.keys(experience).forEach(lang => {
  const categories = [];
  const keywordsPerCategory = {};

  const list = experience[lang].list;
  list.forEach(experience => {
    experience.keywords.forEach(({ category, name }) => {
      if (!keywordsPerCategory[category]) {
        keywordsPerCategory[category] = [];
        categories.push(category);
      }
      keywordsPerCategory[category].push(name);
    });
  });
  const mappedList = categories.sort().map(category => ({
    title: category,
    items: [...new Set(keywordsPerCategory[category])].sort(),
  }));
  exp[lang] = {
    ...text[lang],
    list: mappedList,
  };
});

export default exp;
