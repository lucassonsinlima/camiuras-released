module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

      clean: {
          main: ['build/*']
      },
      compass: {
          dist: {
              options: {
                  sassDir: 'src/scss/',
                  cssDir: 'build/css/',
                  sourcemap: false
              }
          }
      },
      uglify: {
          options: {
              mangle: false
          },
          main: {
              files: [{
                  expand: true,
                  cwd: 'assets/js/',
                  src: ['**/*.js', ],
                  dest: 'build/assets/js/',
                  ext: '.js'
              }]
          }
      },
    babel: {
    		options: {
    			sourceMap: true,
    			presets: ['env']
    		},
    		dist: {
    			files: {
    				'build/js/main.bundle.js': 'src/js/main.js'
    			}
    		}
    	},
      watch: {
          options: {
              // livereload: 1337
          },
          compass: {
              files: ['src/scss/**/*.scss'],
              tasks: ['compass']
          },
          css: {
              files: ['build/css/*.css']
          },
          js: {
              files: ["src/js/*.js"],
              tasks: ["babel"]
          }
      }

    })

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['clean', 'babel', 'compass', 'watch']);
};
