# Django CMS Base Install
    Django CMS
    Webpack
    Browser Sync
    Babel
## Quick Setup for local development

1. create a virtual environment `virtualenv ~/envs/project-name.com`
2. open your local sql or postgress management tool and add a database
3. add database creds to environment in activate.py
    `
    # DATABASE SETTINGS
    # DATABASE_ENGINE='django.db.backends.postgresql_psycopg2'
    DATABASE_ENGINE='django.db.backends.mysql'
    export DATABASE_ENGINE
    DATABASE_NAME='django_cms_base' # name of your project here
    export DATABASE_NAME
    DATABASE_USER='root' # database user name
    export DATABASE_USER
    DATABASE_PASSWORD=''
    export DATABASE_PASSWORD
    DATABASE_HOST='localhost'
    export DATABASE_HOST
    # DATABASE_PORT='5432' #postgress port
    DATABASE_PORT='3306' #mysql port
    export DATABASE_PORT
    #
    # SETTINGS MODULE
    DJANGO_SETTINGS_MODULE="app_name.settings.environment" #change app_name to project name inner folder
    export DJANGO_SETTINGS_MODULE
    `
4. activate the environment `source ~/envs/project-name.com/bin/activate`
5. creates and fills requirements.txt `pip freeze > requirements.txt`
6. install postgress or mysql
    -- install postgress `brew install postgres`
    -- add to requirements.txt `psycopg2`
    -- install mysql `brew install mysql`
    -- add to requirements.txt `mysql-python`
7. install requirements `pip install -r ~/Sites/project-name.com/requirements.txt`
    Note: This requires postgres sql drivers be installed on your machine refer to set 5.
8. Change the settings files to point to your directory names.
    -- app_name/__init__.py
    -- app_name/default.py
    -- app_name/environment.py
    -- app_name/staging.py
    -- app_name/wsgi.py
    -- manage.py
    -- package.json
    -- webpack.config.js
    -- webpack-stats.json
9. migrate database `python manage.py migrate`
10. create super user `python manage.py createsuperuser`
11. run django `python manage.py runserver`
12. run `npm install` to install node dependencies
13. Build assets once `npm run build`
14. run `npm run watch` to rebuild assets as you develop

## Customizing the local development environment

The default settings file has connection information for a remote postgres database. Environment variables can be specified to utilize the `django-cms-base.settings.environment` settings file.


