from django.shortcuts import render

from .models import Cemetery
from .serializers import CemeterySerializer
from rest_framework import generics

class CemeteryListCreate(generics.ListCreateAPIView):
    queryset = Cemetery.objects.all()
    serializer_class = CemeterySerializer
