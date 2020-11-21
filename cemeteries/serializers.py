from rest_framework import serializers
from .models import Cemetery

class CemeterySerializer(serializers.ModelSerializer):
    class Meta:
        model = Cemetery
        fields = ('name', 'address', 'city', 'state', 'cemetery_type')