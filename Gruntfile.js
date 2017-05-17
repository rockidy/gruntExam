module.exports = function(grunt) {
  // 프로젝트 환경설정.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      foo: {
        src: ['src/app.js']
      }
    },
    concat: {
      bar: {
        src: ['src/a.js', 'src/b.js'],
        dest: 'dest/c.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> \nauthor: <%=pkg.author%> \n<%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/app.js',
        dest: 'build/app.min.js'
      },
      build2: {
        /*
        options: {
          beautify: {
            width: 80,
            beautify: true  // 명시적으로 코드 정리.
          }
        },*/
        //src: 'dest/c.js',
        //dest: 'build/c.min.js'
        files: {
          'build/concat.min.js': ['src/a.js', 'src/b.js']
        }
      }
    }
  });

  // "jshint" 작업을 위한 플러그인 등록.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // "concat" 작업을 위한 플러그인 등록.
  grunt.loadNpmTasks('grunt-contrib-concat');
  // "uglify" 작업을 위한 플러그인 등록.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 기본 작업에 'uglify' 등록
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};
