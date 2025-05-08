from rest_framework import generics
from .models import TourPackage, Destination
from .serializers import TourPackageSerializer, DestinationSerializer

class TourListView(generics.ListCreateAPIView):
    queryset = TourPackage.objects.all()
    serializer_class = TourPackageSerializer

class TourDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TourPackage.objects.all()
    serializer_class = TourPackageSerializer

class DestinationListView(generics.ListCreateAPIView):
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer

class DestinationDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer

class BookingView(generics.CreateAPIView):
    queryset = TourPackage.objects.all()
    serializer_class = TourPackageSerializer
