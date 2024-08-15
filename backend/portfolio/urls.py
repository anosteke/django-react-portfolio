from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, JobViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'jobs', JobViewSet)


urlpatterns = [
    path('', include(router.urls)),
]