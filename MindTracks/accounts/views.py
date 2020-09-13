from django.shortcuts import render, redirect
from .forms import RegisterForm
from home.models import Profile


# Create your views here.
def register(response):
    if response.method == 'POST':
        form = RegisterForm(response.POST)
        if form.is_valid():
            form.save()
            Profile.objects.create(username=response.POST['username'], number_of_plays = 0, sum_of_moods = 0)
        return redirect('/home')
    else:
        form = RegisterForm()
        
    
    return render(response, 'accounts/register.html', {"form":form})