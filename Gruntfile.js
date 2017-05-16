module.exports = function(grunt) {
  // 프로젝트 환경설정.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      foo: {
        src: ['src/app.js']
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> \nauthor: <%=pkg.author%> \n<%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/app.js',
        dest: 'build/app.min.js'
      }
    }
  });

  // "jshint" 작업을 위한 플로그인 등록.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // "uglify" 작업을 위한 플러그인 등록.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 기본 작업에 'uglify' 등록
  grunt.registerTask('default', ['jshint', 'uglify']);
};
