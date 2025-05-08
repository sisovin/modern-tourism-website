from django.urls import path
from .views import BlogPostListView, BlogPostDetailView

urlpatterns = [
    path('blog/', BlogPostListView.as_view(), name='blogpost-list'),
    path('blog/<int:pk>/', BlogPostDetailView.as_view(), name='blogpost-detail'),
]
