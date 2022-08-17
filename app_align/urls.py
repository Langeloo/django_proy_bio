from django.urls import path
from .views import get_all_organisms, align

app_name = "app_align"

urlpatterns = [
    path('', align, name='align'),
    path('get_all_organisms/', get_all_organisms.as_view(), name=get_all_organisms.name),
]