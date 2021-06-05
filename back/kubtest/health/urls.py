from django.urls import path

from . import views

urlpatterns = [
    path('health/', views.index, name='index'),
    path('name/', views.name, name='name'),
    path('lastName/', views.lastName, name='lastName'),
    path('age/', views.age, name='age'),
]
