from django.shortcuts import render, redirect
from .forms import RegisterForm
from home.models import Profile


# Create your views here.
def register(response):
    if response.method == 'POST':
        form = RegisterForm(response.POST)
        if form.is_valid():
            form.save()
            print('success')
        return redirect('/home')
    # print(response.user.username)
    else:
        form = RegisterForm()
        
    
    return render(response, 'accounts/register.html', {"form":form})