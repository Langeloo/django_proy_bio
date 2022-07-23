from django.urls import path
from . import views

app_name = "app_data"

urlpatterns = [
    path("enter-data/", views.enter_data, name="enter-data"),
    path("list-data/", views.list_data, name="list-data"),
    path("update-organism/<int:identificator>/<str:action>/",
        views.update_organism,
        name="update-organism",
    ),
]
