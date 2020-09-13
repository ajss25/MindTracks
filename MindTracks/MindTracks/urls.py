from django.contrib import admin
from django.urls import path, include

from home.views import index, play_view
from accounts import views as v
from user_profile import views 
from about import views as av


from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', v.register, name='register'),
    path('', index),
    path('home/', index),
    path('', include('django.contrib.auth.urls')),
    path('user_profile/', views.user_profile),
    path('about/', av.about),
    path('play/<int:pk>', play_view, name='play'),

]