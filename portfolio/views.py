from rest_framework import viewsets
from .models import Project
from portfolio.serializers import ProjectSerializer
from portfolio.serializers import ProjectSerializer, JobSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer