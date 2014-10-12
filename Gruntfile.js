module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    css_src_path: "src/css",
    css_build_path: "dist/css",

    cssmin: {
      css: {
        src: '<%= css_src_path %>/*',
        dest:'<%= css_build_path %>/winterclocks.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task.
  grunt.registerTask('default', ['cssmin']);

};