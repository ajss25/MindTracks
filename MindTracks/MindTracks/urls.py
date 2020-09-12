from django.contrib import admin
from django.urls import path, include

from home.views import index
from accounts import views as v

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', v.register, name='register'),
    path('', index),
    path('home/', index),
    path('', include('django.contrib.auth.urls')),
]