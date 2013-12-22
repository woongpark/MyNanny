module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        options: {
          base: 'public',
          port: 8000,
          keepalive: true,
          open: 'http://localhost:8000',
          hostname: "*"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('startup', ['connect:server']);
};
