from django.urls import path
from . import views

app_name = "app_align"

urlpatterns = [
    path('', views.align, name='align'),
]