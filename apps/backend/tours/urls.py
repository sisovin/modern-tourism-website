from django.urls import path
from .views import TourListView, TourDetailView, DestinationListView, DestinationDetailView, BookingView

urlpatterns = [
    path('tours/', TourListView.as_view(), name='tour-list'),
    path('tours/<int:pk>/', TourDetailView.as_view(), name='tour-detail'),
    path('destinations/', DestinationListView.as_view(), name='destination-list'),
    path('destinations/<int:pk>/', DestinationDetailView.as_view(), name='destination-detail'),
    path('booking/', BookingView.as_view(), name='booking'),
]
