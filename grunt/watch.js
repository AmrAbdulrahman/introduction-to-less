module.exports = {
  less: {
    files: 'less-way/less/*.less',
    tasks: ['less'],
    options: {
      livereload: true
    }
  },
  css: {
    files: 'css/*.css',
    options: {
      livereload: true
    }
  },
  html: {
    files: '**/*.html',
    options: {
      livereload: true
    }
  }
};