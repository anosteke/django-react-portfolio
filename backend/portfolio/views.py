from rest_framework import viewsets
from .models import Project, Job
from portfolio.serializers import ProjectSerializer, JobSerializer
from django.views.generic import TemplateView

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class ReactAppView(TemplateView):
    template_name = 'index.html'