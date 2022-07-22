from django.db import models

# Create your models here.
class organism(models.Model):
    identificator = models.CharField(max_length=100, primary_key=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    string = models.CharField(max_length=60)
    image = models.ImageField(upload_to='organism_images', blank=True)
    
    def __str__(self):
        return '{}-{}'.format(
            self.identificator,
            self.name,
        )