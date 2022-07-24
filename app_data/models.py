from django.db import models

# Create your models here.
class Organism(models.Model):
    identificator = models.IntegerField(unique=True)
    name = models.CharField(max_length=100)
    header = models.CharField(max_length=250, blank=True, null=True)
    sequence = models.CharField(max_length=60)
    description = models.CharField(max_length=500)
    image = models.ImageField(upload_to='organism_images/', blank=True, null=True)
    
    def __str__(self):
        return '{}-{}'.format(
            self.identificator,
            self.name,
        )
    
    def length_secuence(self):
        return len(self.sequence)