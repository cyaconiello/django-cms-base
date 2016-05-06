# -*- coding: utf-8 -*-
from __future__ import absolute_import, print_function, unicode_literals

from cms.sitemaps import CMSSitemap
from django.conf import settings
from django.conf.urls import *  # NOQA
from django.conf.urls.i18n import i18n_patterns
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib.sitemaps.views import sitemap
admin.autodiscover()

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),  # NOQA
    url(r'^filer/', include('filer.urls')),
    url(r'^sitemap\.xml$', sitemap,
        {'sitemaps': {'cmspages': CMSSitemap}}),
    url(r'^', include('djangocms_forms.urls')),
    url(r'^', include('cms.urls')),
]

if settings.DEBUG:
    from django.views.static import serve
    urlpatterns.append(url(r'^media/(?P<path>.*)$', serve,
        {'document_root': settings.MEDIA_ROOT, 'show_indexes': True}))
    urlpatterns += staticfiles_urlpatterns()
