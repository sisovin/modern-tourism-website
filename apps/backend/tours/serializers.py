from rest_framework import serializers
from .models import TourCategory, Destination, TourPackage

class TourCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TourCategory
        fields = ['id', 'name']

class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destination
        fields = ['id', 'name', 'description', 'image']

class TourPackageSerializer(serializers.ModelSerializer):
    class Meta:
        model = TourPackage
        fields = ['id', 'title', 'description', 'price', 'duration', 'image']
