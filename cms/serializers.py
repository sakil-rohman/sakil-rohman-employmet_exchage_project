from rest_framework import serializers
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

class MinisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Minister
        fields= '__all__'
class SliderImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SliderImage
        fields= '__all__'
class GuidelinesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guidelines
        fields= '__all__'
class FooterAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = FooterAddress
        fields= '__all__'
class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields= '__all__'
class ContactTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactTable
        fields= '__all__'
class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUs
        fields= '__all__'
class SchemesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schemes
        fields= '__all__'
class ResourcesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resources
        fields= '__all__'
class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields= '__all__'
class EventCardsSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventCards
        fields= '__all__'

class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields= '__all__'

