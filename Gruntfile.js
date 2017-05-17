module.exports = function(grunt) {
  // 프로젝트 환경설정.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      /*
      options: {
        // 합친 결과 파일에서 각 파일을 구분할 문자열을 정의한다.
        separator: ';'
      },*/
      dist: {
        //src: ['src/a.js', 'src/b.js'],
        src: ['src/*.js'],
        dest: 'dest/concat.js'
      }
    },
    uglify: {
      options: {
        // template 사용. <%= my_property %>
        banner: '/*! <%= my_property %> \n<%= pkg.name %> \nauthor: <%=pkg.author%> \n<%= grunt.template.today("yyyy-mm-dd") %> */\n'
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
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/*.js'],
      options: {
        // 바꾸고 싶은 JSHint 기본값을 여기 지정한다.
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    },
    my_property: 'whatever'
  });

  // "jshint" 작업을 위한 플러그인 등록.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // "concat" 작업을 위한 플러그인 등록.
  grunt.loadNpmTasks('grunt-contrib-concat');
  // "uglify" 작업을 위한 플러그인 등록.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 커멘드 라인에 "grunt test"를 입력하면 실행된다.
  grunt.registerTask('test', ['jshint', 'qunit']);

  // 기본 작업 등록
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
};
