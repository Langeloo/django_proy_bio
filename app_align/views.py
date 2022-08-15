from django.shortcuts import render
from app_data.models import Organism

# Create your views here.
def align(request):
    
    return render(request, 'app_align/align.html', {"organisms": Organism.objects.all()})