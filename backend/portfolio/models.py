import datetime
from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=250)
    skills = models.JSONField(default=list)
    imageUrl = models.URLField()
    url = models.URLField()

    def __str__(self):
        return self.title
    
class Job(models.Model):
    company = models.CharField(max_length=60)
    location = models.CharField(max_length=30, default="")
    job = models.CharField(max_length=30)
    startDate = models.DateField(default=datetime.date.today)
    endDate = models.DateField(null=True, blank=True)
    description = models.CharField(max_length=1000)
    skills = models.JSONField(default=list)
    url = models.URLField()

    def __str__(self):
        return self.company