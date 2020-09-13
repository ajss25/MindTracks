from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    number_of_plays = models.IntegerField(default=0)
    sum_of_moods = models.IntegerField(default=0)
    username = models.CharField(max_length=200, default='john')

    # def __str__(self):
    #     return self.name.username


