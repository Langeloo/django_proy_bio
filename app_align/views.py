from django.shortcuts import render
from app_data.models import Organism
from proy_bio import views
from django.views import View
from django.http import JsonResponse
import json

# Create your views here.
def align(request):
    return render(request, 'app_align/align.html', {"organisms": Organism.objects.all()})

class get_all_organisms(View):
    name = 'get_all_organisms'
    def get(self, request):
        organism_list = []
        for organism in Organism.objects.all():
            organism_dict = {}
            organism_dict['identificator'] = organism.identificator
            organism_dict['name'] = organism.name
            organism_dict['sequence'] = organism.sequence
            organism_list.append(organism_dict)
        data = json.dumps(organism_list)
        return JsonResponse(data, safe=False)