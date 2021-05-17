from django.contrib.auth.models import User
from django.db import models

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

class Patient(models.Model):
    f_name = models.CharField(max_length=20)
    m_name = models.CharField(max_length=20, blank=True)
    l_name = models.CharField(max_length=20)
    GenderType = models.TextChoices('GenderType', 'Male Female Trans Other')
    gender = models.CharField(choices=GenderType.choices, max_length=10)
    age = models.IntegerField
    address = models.TextField(blank=True)
    phone = models.CharField(max_length=10)

    def __str__(self):
        return self.f_name


class Report(models.Model):
    patient = models.ForeignKey("Patient", on_delete=models.CASCADE)
    title = models.CharField(max_length=20)
    desc = models.TextField(blank=True)
    result = models.CharField(max_length=20)

    def __str__(self):
        return self.title
    
    


