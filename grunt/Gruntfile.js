module.exports = function(grunt) {
	grunt.initConfig({
		bump: {
			options: {
				files: ["../bower.json"],
				commitFiles: ["-a"],
				push: false
				// commit: false
			}
		}
	});

	grunt.loadNpmTasks('grunt-bump');
};