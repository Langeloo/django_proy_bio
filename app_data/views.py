from django.shortcuts import render

# Create your views here.

def enter_data(request):
    return render(request, 'app_data/enter_data.html')

def list_data(request):
    return render(request, 'app_data/list_data.html')