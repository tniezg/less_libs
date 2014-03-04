module.exports = function(grunt) {
	var sourcePath = '../app',
		destinationCssPath = sourcePath + '/css/layout.css';

	grunt.initConfig({
		less: {
			development: {
				src: [
					cssPath + '/layout.less'
				],
				dest: destinationCssPath,
				options: {
					compress: true
				}
			}
		},
		bump: {
			development: {
				files: ["bower.json"],
				commitFiles: ["-a"],
				push: false,
				commit: false
			}
		},
		watch: {
			development: {
				files: [
					sourcePath + '/**',
					'!**/*.css'
				],
				tasks: [
					'less:development'
				],
				options: {
					nospawn: true,
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-bump');

	grunt.registerTask('bump', [
		'bump:development'
	]);

	grunt.registerTask('dev', [
		'watch:development'
	]);
};