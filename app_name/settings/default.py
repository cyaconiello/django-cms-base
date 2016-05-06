import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*', ]

# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql_psycopg2',
#         'NAME': 'staging',
#         'USER': 'root',
#         'PASSWORD': 'xxxx',
#         'HOST': 'xxxxx.us-east-1.rds.amazonaws.com',
#         'PORT': '5432',
#     }
# }

# Email
# EMAIL_USE_TLS = True
# EMAIL_HOST = "smtp.sendgrid.net"
# EMAIL_HOST_USER = "xxxx"
# EMAIL_HOST_PASSWORD = "xxxx"
# SERVER_EMAIL = "info@xxx.com"
# EMAIL_PORT = 587

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.8/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = ''

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.normpath(os.path.join(BASE_DIR, '../', 'media'))

# CACHING

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
        'LOCATION': ''
    }
}



from app_name.settings import *  # change this to the project name 
