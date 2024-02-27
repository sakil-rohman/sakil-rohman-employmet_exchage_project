from django.db import models

# Create your models here.
class Minister(models.Model):
    image= models.ImageField(upload_to='uploads/images', null=False, blank=False)
    name= models.CharField(max_length=150, null=False, blank=False)
    title= models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return self.title
    
# class SiteGuidelines(models.Model):
#     heading= models.CharField(max_length=150, null=False, blank=False)
#     description= models.CharField(max_length=500, null=True, blank=True)

#     def __str__(self):
#         return self.heading
    
class SliderImage(models.Model):
    heading= models.CharField(max_length=150, null=False, blank=False)
    image= models.ImageField(upload_to='uploads/images', null=False, blank=False)

    def __str__(self):
        return self.heading
    
class Guidelines(models.Model):
    title= models.CharField(max_length=50, null=True, blank=True)
    heading= models.CharField(max_length=150, null=False, blank=False)
    description= models.CharField(max_length=100000, null=True, blank=True)

    def __str__(self):
        return self.title
    
class FooterAddress(models.Model):
    phone= models.CharField(max_length=50, null=True, blank=True)
    email= models.CharField(max_length=150, null=False, blank=False)
    address= models.CharField(max_length=100000, null=True, blank=True)

    def __str__(self):
        return self.email
    
class ContactUs(models.Model):
    name= models.CharField(max_length=50, null=True, blank=True)
    designation= models.CharField(max_length=50, null=True, blank=True)
    phone= models.CharField(max_length=50, null=True, blank=True)
    email= models.CharField(max_length=150, null=False, blank=False)
    address= models.CharField(max_length=100000, null=True, blank=True)
    image= models.ImageField(upload_to='uploads/images', null=False, blank=False)

    def __str__(self):
        return self.name
class ContactTable(models.Model):
    exname= models.CharField(max_length=50, null=True, blank=True)
    address= models.CharField(max_length=100000, null=True, blank=True)
    name= models.CharField(max_length=50, null=True, blank=True)
    contact= models.CharField(max_length=50, null=True, blank=True)
    
    def __str__(self):
        return self.exname

class AboutUs(models.Model):
    title= models.CharField(max_length=50, null=True, blank=True)
    heading= models.CharField(max_length=150, null=False, blank=False)
    description= models.CharField(max_length=100000, null=True, blank=True)

    def __str__(self):
        return self.title
    
class Schemes(models.Model):
    title= models.CharField(max_length=50, null=True, blank=True)
    heading= models.CharField(max_length=150, null=False, blank=False)
    description= models.CharField(max_length=100000, null=True, blank=True)

    def __str__(self):
        return self.title
    
class Resources(models.Model):
    title= models.CharField(max_length=50, null=True, blank=True)
    heading= models.CharField(max_length=150, null=False, blank=False)
    description= models.CharField(max_length=100000, null=True, blank=True)

    def __str__(self):
        return self.title
class Notification(models.Model):
    title= models.CharField(max_length=50, null=True, blank=True)
    heading= models.CharField(max_length=150, null=False, blank=False)
    description= models.CharField(max_length=100000, null=True, blank=True)

    def __str__(self):
        return self.title
    
class EventCards(models.Model):
    title= models.CharField(max_length=50, null=True, blank=True)
    heading= models.CharField(max_length=150, null=False, blank=False)
    description= models.CharField(max_length=900000, null=True, blank=True)
    image= models.ImageField(upload_to='uploads/images', null=True, blank=True)


    def __str__(self):
        return self.title
class GalleryImage(models.Model):
    heading= models.CharField(max_length=150, null=False, blank=False)
    image= models.ImageField(upload_to='uploads/images', null=False, blank=False)

    def __str__(self):
        return self.heading