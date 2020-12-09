const navlinks = require('./modules/_navlinks.data')
const hero = require('./modules/_hero.data')
const about = require('./modules/_about.data')
const mission = require('./modules/_mission.data')
const contacts = require('./modules/_contacts.data')
const projects = require('./modules/_projects.data')
const gallery = require('./modules/_gallery.data')

module.exports = {
  title: 'Сфера ПО',
  description: 'Центр разработки программного обеспечения',
  url: 'https://sferasw.com',
  author: 'janeRivas <solovyev.a@icloud.com>',
  keywords: 'company, software',

  // Modules
  navlinks,
  hero,
  about,
  mission,
  contacts,
  projects,
  gallery
}
