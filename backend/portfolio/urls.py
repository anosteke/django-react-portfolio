from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, JobViewSet, ReactAppView

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'jobs', JobViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('', ReactAppView.as_view(), name='react-app'),
]
