from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=250)
    skills = models.JSONField(default=list)
    imageUrl = models.URLField()

    def __str__(self):
        return self.title