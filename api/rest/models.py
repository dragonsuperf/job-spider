from django.db import models


class Article(models.Model):
    company_name = models.CharField(max_length=32, default='ERROR')
    career = models.CharField(max_length=16, default='0')
    duty = models.CharField(max_length=32, default='ERROR')
    location = models.CharField(max_length=64, default='ERROR')
    required_skill = models.CharField(max_length=128, default='ERROR')
    logo = models.CharField(max_length=64, default='ERROR')
    content = models.TextField(default='ERROR')
