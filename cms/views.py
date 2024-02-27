from django.shortcuts import render
from .models import Minister 
from .models import SliderImage 
from .models import Guidelines 
from .models import FooterAddress 
from .models import ContactUs 
from .models import ContactTable 
from .models import AboutUs 
from .models import Schemes 
from .models import Resources 
from .models import Notification 
from .models import EventCards 
from .models import GalleryImage 
from .serializers import MinisterSerializer 
from .serializers import SliderImageSerializer 
from .serializers import GuidelinesSerializer 
from .serializers import FooterAddressSerializer 
from .serializers import ContactUsSerializer 
from .serializers import ContactTableSerializer 
from .serializers import AboutUsSerializer 
from .serializers import SchemesSerializer 
from .serializers import ResourcesSerializer 
from .serializers import NotificationSerializer 
from .serializers import EventCardsSerializer
from .serializers import GalleryImageSerializer  
from rest_framework import viewsets
# Create your views here.
class MinisterView(viewsets.ModelViewSet):
    queryset = Minister.objects .all()
    serializer_class = MinisterSerializer 

class SliderImageView(viewsets.ModelViewSet):
    queryset = SliderImage.objects .all()
    serializer_class = SliderImageSerializer 
class GuidelinesView(viewsets.ModelViewSet):
    queryset = Guidelines.objects .all()
    serializer_class = GuidelinesSerializer 

class FooterAddressView(viewsets.ModelViewSet):
    queryset = FooterAddress.objects .all()
    serializer_class = FooterAddressSerializer 
class ContactUsView(viewsets.ModelViewSet):
    queryset = ContactUs.objects .all()
    serializer_class = ContactUsSerializer 
class ContactTableView(viewsets.ModelViewSet):
    queryset = ContactTable.objects .all()
    serializer_class = ContactTableSerializer 
class AboutUsView(viewsets.ModelViewSet):
    queryset = AboutUs.objects .all()
    serializer_class = AboutUsSerializer 
class SchemesView(viewsets.ModelViewSet):
    queryset = Schemes.objects .all()
    serializer_class = SchemesSerializer 
class ResourcesView(viewsets.ModelViewSet):
    queryset = Resources.objects .all()
    serializer_class = ResourcesSerializer 
class NotificationView(viewsets.ModelViewSet):
    queryset = Notification.objects .all()
    serializer_class = NotificationSerializer 
class EventCardsView(viewsets.ModelViewSet):
    queryset = EventCards.objects .all()
    serializer_class = EventCardsSerializer 
    
class GalleryImageView(viewsets.ModelViewSet):
    queryset = GalleryImage.objects .all()
    serializer_class = GalleryImageSerializer 

