module.exports = {
  apps : [{
    script: 'npm start'
  }],

  deploy : {
    production : {
      key : 'SSABANG.pem',
      user : 'ubuntu',
      host : '3.34.3.158',
      ref  : 'origin/master',
      repo : 'git@github.com:livinoid98/ssabang-nuxt.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && npm run build && npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
