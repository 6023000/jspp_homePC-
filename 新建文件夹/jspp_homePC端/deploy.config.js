module.exports = {
	app: [
    {
    	name: 'jspp-home',
    	script: 'app.js',
    	env: {
    		COMMON_VARIABLE: 'true'
    	},
    	env_production: {
    		NODE_ENV: 'production'
    	}
    }
	],

	deploy: {
		production: {
			user: 'root',
			host: '47.105.106.4',
			ref: 'origin/master',
			repo: 'https://gitee.com/jsjiajia_tishengban/jspp_home.git',
			path: '/www/jspp_home/production',
			'pre-deploy': 'git fetch --all',
			'post-deploy': 'npm install && npm run prd && pm2 startOrRestart deploy.config.js --env production'
		}
	}
}