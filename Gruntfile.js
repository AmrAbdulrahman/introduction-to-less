module.exports = function(grunt) {
  // Plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Configurations
  grunt.initConfig({
    less: require('./grunt/less'),
    watch: require('./grunt/watch'),
    connect: require('./grunt/connect')
  });

  grunt.registerTask('default', [
    'less',
    'connect',
    'watch'
  ]);
};