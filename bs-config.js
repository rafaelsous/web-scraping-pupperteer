module.exports = {
  injectChanges: false,
  files: [ './**/*.{html,htm,css,js,json}' ],
  watchOptions: {
    ignored: 'node_modules',
  },
  server: { baseDir: ['./', 'src'] }
}