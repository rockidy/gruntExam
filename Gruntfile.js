module.exports = function(grunt) {

  // 프로젝트 환경설정.
  grunt.initConfig({
    uglify: {
      build: {
        src: 'src/app.js',
        dest: 'build/app.min.js'
      }
    }
  });

  // "uglify" 작업을 위한 플러그인 등록
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 기본 작업에 'uglify' 등록
  grunt.registerTask('default', ['uglify']);
};
