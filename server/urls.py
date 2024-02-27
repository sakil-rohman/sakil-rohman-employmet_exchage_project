"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from cms.views import MinisterView 
from cms.views import SliderImageView 
from cms.views import GuidelinesView 
from cms.views import FooterAddressView 
from cms.views import ContactUsView 
from cms.views import ContactTableView 
from cms.views import AboutUsView 
from cms.views import SchemesView 
from cms.views import ResourcesView 
from cms.views import NotificationView 
from cms.views import EventCardsView 
from cms.views import GalleryImageView 
from django.views.generic import TemplateView
from .views import MyAppIndexView, CMSIndexView
# from api import views
from rest_framework.routers import DefaultRouter

route= DefaultRouter()
route.register("ministry", MinisterView, basename='minister')
route.register("slider", SliderImageView, basename='slider')
route.register("guideline", GuidelinesView, basename='guideline')
route.register("footer-address", FooterAddressView, basename='footer-address')
route.register("contactus", ContactUsView, basename='contactus')
route.register("contacttable", ContactTableView, basename='contacttable')
route.register("aboutus", AboutUsView, basename='aboutus')
route.register("schemes", SchemesView, basename='schemes')
route.register("resources", ResourcesView, basename='resources')
route.register("notification", NotificationView, basename='notification')
route.register("eventcards", EventCardsView, basename='eventcards')
route.register("galleryimage", GalleryImageView, basename='galleryimage')

# route.register("", MinisteryView, basename='ministeryview')

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', TemplateView.as_view(template_name='index.html')),
    path('', MyAppIndexView.as_view(), name='myapp_index'),
    path('cms_part/', CMSIndexView.as_view(), name='cms_index'),
    
    # path('', include(route.urls)),
    path('api/', include(route.urls)),
]
# Serving static files
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# Serving media files
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)