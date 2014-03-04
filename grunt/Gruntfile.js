module.exports = function(grunt) {
	var sourcePath = '../app',
		buildPath = '../build',
		cssPath = sourcePath,
		destinationCssPath = buildPath + '/mixins.css';

	grunt.initConfig({
		less: {
			development: {
				src: [
					cssPath + '/mixins.less'
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
					sourcePath + '/**'
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