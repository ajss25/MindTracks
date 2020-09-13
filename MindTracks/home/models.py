from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    name = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    number_of_plays = models.IntegerField(default=0)
    sum_of_moods = models.IntegerField(default=0)

    # def __str__(self):
    #     return self.name.username


