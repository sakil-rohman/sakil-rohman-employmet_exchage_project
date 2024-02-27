from django.shortcuts import render, HttpResponse
import os
from django.views.generic import View
from django.conf import settings
from django.http import HttpResponseNotFound

class MyAppIndexView(View):
    def get(self, request, *args, **kwargs):
        try:
            with open(os.path.join(settings.BASE_DIR, "myapp/build/index.html"), 'r') as file:
                return HttpResponse(file.read())
        except FileNotFoundError:
            return HttpResponseNotFound()

class CMSIndexView(View):
    def get(self, request, *args, **kwargs):
        try:
            with open(os.path.join(settings.BASE_DIR, "cms2/build/index.html"), 'r') as file:
                return HttpResponse(file.read())
        except FileNotFoundError:
            return HttpResponseNotFound()
