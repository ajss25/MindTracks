from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import Profile

# Create your views here.
def index(request):
    # username = request.user.username
    # if not Profile.objects.filter(name__username=username).exists():
    #     Profile.objects.create()
    # print(Profile.objects.all())
    return render(request, 'home/index.html')

def add_user_data(request):
    print("test")
    return request(request, 'home/index.html')
