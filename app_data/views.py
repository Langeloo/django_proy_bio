from django.contrib import messages
from django.shortcuts import redirect, render
from .forms import RegisterOrganismForm
from .models import Organism

# Create your views here.


def enter_data(request):

    if "register_organism" in request.POST:
        organism = Organism()
        form = RegisterOrganismForm(request.POST, request.FILES)
        if form.is_valid():
            ident = form.cleaned_data["header"].split('|')[1]
            if Organism.objects.filter(identificator=ident).exists():
                messages.error(request, "Identificador ya existe")
                return redirect("app_data:enter-data")
            organism.identificator = ident
            organism.name = form.cleaned_data["name"]
            organism.header= form.cleaned_data["header"]
            organism.sequence = form.cleaned_data["sequence"].upper()
            organism.description = form.cleaned_data["description"]
            try:
                organism.image = request.FILES["image"]
                organism.image.name = "{}.jpg".format(organism.identificator)
            except:
                organism.image = None
            organism.save()
            messages.success(request, "Organismo registrado correctamente")

    return render(request, "app_data/enter_data.html", {"form": RegisterOrganismForm()})


def list_data(request):
    if "delete" in request.POST:
        organism = Organism.objects.get(pk=request.POST["delete"])
        organism.delete()
        messages.success(request, "Organismo eliminado correctamente")
    return render(
        request, "app_data/list_data.html", {"organisms": Organism.objects.all()}
    )

def update_organism(request, identificator, action):
    flag_exists = Organism.objects.filter(identificator=identificator).exists()
    if action == 'update' or flag_exists:
        organism = Organism.objects.get(identificator=identificator)
        if 'update_organism' in request.POST:
            ident = request.POST["header"].split('|')[1]
            organism.identificator = ident
            organism.header = request.POST["header"]
            organism.name = request.POST["name"]
            organism.description = request.POST["description"]
            organism.sequence = request.POST["sequence"].upper()
            try:
                organism.image = request.FILES["image"]
                organism.image.name = "{}.jpg".format(organism.identificator)
            except:
                organism.image = None
            organism.save()
            messages.success(request, "Organismo actualizado correctamente")
            return redirect("app_data:list-data")
    else:
        messages.error(request, "Accion no permitida")
        return redirect("app_data:list-data")
    
    return render(request, "app_data/update_data.html", {"organism": organism})