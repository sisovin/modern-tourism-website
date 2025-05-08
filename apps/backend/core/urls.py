from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TouristDestinationViewSet, EventViewSet, TestimonialViewSet

router = DefaultRouter()
router.register(r'tourist-destinations', TouristDestinationViewSet, basename='tourist-destination')
router.register(r'events', EventViewSet, basename='event')
router.register(r'testimonials', TestimonialViewSet, basename='testimonial')

urlpatterns = router.urls

urlpatterns += [
    path('api/', include('tours.urls')),
    path('api/', include('blog.urls')),
    path('api/', include('users.urls')),
]
