from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=250)
    skills = models.JSONField(default=list)
    imageUrl = models.URLField()

    def __str__(self):
        return self.titleclass Job(models.Model):
class Job(models.Model):
    compagny = models.CharField(max_length=30)
    job = models.CharField(max_length=30)
    duration = models.CharField(max_length=30)
    description = models.CharField(max_length=1000)
    skills = models.JSONField(default=list)
    url = models.URLField()

    def __str__(self):
        return self.compagny
