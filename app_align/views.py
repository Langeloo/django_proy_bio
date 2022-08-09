from django.shortcuts import render

# Create your views here.
def align(request):
    return render(request, 'app_align/align.html')