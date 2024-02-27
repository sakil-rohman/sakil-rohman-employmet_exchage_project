from django.contrib import admin
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

# Register your models here.
admin.site.register(Minister)
admin.site.register(Guidelines)
admin.site.register(SliderImage)
admin.site.register(FooterAddress)
admin.site.register(ContactUs)
admin.site.register(ContactTable)
admin.site.register(AboutUs)
admin.site.register(Schemes)
admin.site.register(Resources)
admin.site.register(Notification)
admin.site.register(EventCards)
admin.site.register(GalleryImage)