module.exports = function (grunt) {
    "use strict";

    var pkg = grunt.file.readJSON("package.json");

    grunt.initConfig({
        cssmin: {
            target: {
                files: {
                    'public/css/style.min.css': ['public/css/source/bootstrap.css', 'public/css/source/style.css']
                }
            }
        },
        watch: {
            css: {
                files: ['public/css/source/*.css'],
                tasks: ['cssmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', [ 'cssmin' ]);
};
