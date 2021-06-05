from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

def index(request):
    return JsonResponse({'status' : 'OK'})

def name(request):
    return JsonResponse({'name' : 'Sultan'})

def lastName(request):
    return JsonResponse({'lastName' : 'Aitakyn'})

def age(request):
    return JsonResponse({'age' : '22'})
