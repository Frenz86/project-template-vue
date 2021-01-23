### Frontend

```
cd project-oculistica
# install globally vue-cli 4.5.9
sudo npm install -g @vue/cli
vue create client
# Select Choose Vue Version (2.x), Babel, PWA, Router, Linter
# Use history mode for router? Yes
# Eslit + Airbnb config
# Lint on Save
# Save config for babel in package.json
# Save as preset for future project? No

# Test installation
cd client
npm run serve

# Known Issue
# Error: ENOSPC : https://github.com/vuejs/vue-cli/issues/3727
# Solution https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

# Vscode setup VueJs 
Install vetur plugin as vscode extension

#Api request 
npm install axios -- # axios@0.21.0

# Css library UI
npm install bootstrap-vue #bootstrap-vue@2.19.0

# html to print 
npm install vue-html-to-paper --save #@1.3.1
```

### Server (Backend)

```
virtualenv --python=python3 env
source env/bin/activate
pip install Flask==1.1.2 Flask-Cors==3.0.9 pandas==1.1.47 python-dotenv==0.15.0 scikit-learn==0.22.2.post1 gunicorn==20.0.4
```

### Deploy

```
cd client 
npm run build
# this generates the static files served by the server
cd server
# gunicorn app_deploy:app -b 0.0.0.0:8000 
gunicorn app_deploy:app -b 0.0.0.0:80 -b 0.0.0.0:443 --log-level=info  --log-file=- --workers=4 
#gunicorn app_deploy:app --log-level=info --log-file=- --certfile=/etc/letsencrypt/live/pilloledecorative.shop/cert.pem --keyfile=/etc/letsencrypt/live/pilloledecorative.shop/privkey.pem --workers=2 --bind=:443
gunicorn app_deploy:app --log-level=info --log-file=- --certfile=/etc/letsencrypt/live/hofferqst.com/cert.pem --keyfile=/etc/letsencrypt/live/hofferqst.com/privkey.pem --workers=4 --bind=0.0.0.0:443
```


## Steps

FRONTEND
```
# install globally vue-cli 4.5.9 --- sudo npm install -g @vue/cli
vue create client

# Manually create client
# Select Choose Vue Version (2.x), Babel,Router
# Use history mode for router? Yes
# Save config for babel in package.json
# Save as preset for future project? No

cd client
npm install --save axios
npm install --save bootstrap-vue 
```

FLASK
```
virtualenv --python=python3 env
source env/bin/activate
pip install Flask==1.1.2 Flask-Cors==3.0.9 pandas python-dotenv==0.15.0 gunicorn==20.0.4
```