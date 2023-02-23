// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Python',
    competency: 4,
    category: ['Programming Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Programming Languages'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Programming Languages'],
  },
  {
    title: 'R',
    competency: 5,
    category: ['Programming Languages'],
  },
  {
    title: 'HTML + CSS',
    competency: 3,
    category: ['Programming Languages'],
  },
  {
    title: 'Firebase database',
    competency: 4,
    category: ['Database'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['Database'],
  },
  {
    title: 'iMonet',
    competency: 5,
    category: ['Data Visualization tools'],
  },
  {
    title: 'Tableau',
    competency: 4,
    category: ['Data Visualization tools'],
  },
  {
    title: 'Power BI',
    competency: 3,
    category: ['Data Visualization tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#e47272',
  // red
  '#6968b3',
  // purple
  '#37b1f5',
  // blue
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
