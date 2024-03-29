import experience from './experience';
import personal from './personal';
import education from './education';
import keywords from './keywords';

export default {
  sv: {
    experience: experience.sv,
    personal: personal.en,
    skills: {
      title: 'Nyckelord',
      description: 'Samma som finns med ovan, bara grupperade på ett annat sätt.',
    },
    education: education.sv,
    keywords: keywords.sv,
  },
  en: {
    experience: experience.en,
    personal: personal.en,
    skills: {
      title: 'Keywords',
      description: 'These are the same keywords as highlighted above. Just grouped for an easier overview.',
    },
    education: education.en,
    keywords: keywords.en,
  },
  spotify: {
    personal: personal.spotify,
  },
};
