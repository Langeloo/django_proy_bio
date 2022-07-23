from email.mime import image
from django import forms


class RegisterOrganismForm(forms.Form):
    identificator = forms.IntegerField(
        max_value=999999999999999,
        required=True,
        widget=forms.NumberInput(attrs={"class": "form-control", "placeholder": "Ingrese el identificador"}),
    )
    name = forms.CharField(
        max_length=100,
        required=True,
        widget=forms.TextInput(attrs={"class": "form-control", "placeholder": "Ingrese el nombre"}),
    )
    description = forms.CharField(
        max_length=500,
        required=True,
        widget=forms.Textarea(attrs={"class": "form-control", "placeholder": "Ingrese una descripcion"}),
    )
    sequence = forms.CharField(
        max_length=60,
        required=True,
        widget=forms.TextInput(attrs={"class": "form-control", "placeholder": "Ingrese la secuencia"}),
    )
    image = forms.ImageField(
        required=False,
        widget=forms.FileInput(attrs={"class": "form-control", "accept": ".jpg", "placeholder": "Cargue aqui su imagen"}),
    )
