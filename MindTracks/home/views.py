from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from .models import Profile

# Create your views here.
def index(request):
    # username = request.user.username
    # if not Profile.objects.filter(name__username=username).exists():
    #     Profile.objects.create()
    # print(Profile.objects.all())
    return render(request, 'home/index.html')

def play_view(request, pk):
    post = get_object_or_404(Profile, id=request.POST.get('play_button'))

    print(Profile.objects.all())
    return request(request, 'home/index.html')
