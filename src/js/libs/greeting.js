function greeting() {
  if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    var args = [
      '\n\n%c Made with ❤️ by janeRivas %c <solovyev.a@icloud.com> %c %c 🐳 \n\n',
      'border: 1px solid #82AAFF; background: #F6F6F4; color: #181C21; padding: 5px 0',
      'border: 1px solid #82AAFF; background: #82AAFF; color: #F6F6F4; padding: 5px 0',
      'padding: 5px 0',
      'padding: 5px 0',
    ]
    window.console.log.apply(console, args)
  } else if (window.console) {
    window.console.log('Made with love ❤️ janeRivas - <solovyev.a@icloud.com> 🐳')
  }
}

export default greeting
