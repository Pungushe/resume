from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib import messages
from django.core.mail import EmailMultiAlternatives
from django.template import loader
from agency.models import RegisteredEmail


# функция render домашней странице
def agency(request):
    return render(request, 'agency.html')


# функция render opportunities странице
def opportunities(request):
    return render(request, 'opportunities.html')


# ====== Резюме =======
# функция отправки frontend формы
def email_frontend(request):
    if request.method == 'POST':

        # Проверка существует ли в бд
        email = request.POST['email']
        if RegisteredEmail.objects.filter(email=email).exists():
            messages.error(request, "Мы уже получили ваше резюме")
            return HttpResponseRedirect('/opportunities')
        # ===================================================

        else:
            name = request.POST.get('name')
            age = request.POST.get('age')
            email = request.POST.get('email')
            phone = request.POST.get('phone')
            address = request.POST.get('address')
            experience = request.POST.get('experience')
            skills = request.POST.get('skills')

            # Регистрация внутри базы данных
            contact = RegisteredEmail()
            contact.email = email
            contact.save()
            # ==============================

            template = loader.get_template('resume_form.html')
            context = {
                "name": name,
                "age": age,
                "email": email,
                "phone": phone,
                "address": address,
                "experience": experience,
                "skills": skills,
            }
            message = template.render(context)
            email = EmailMultiAlternatives(
                "Frontend - Candidate", message,
                "Frontend - Opportunity",
                ['']
            )
            email.content_subtype = "html"
            file = request.FILES['file']
            email.attach(file.name, file.read(), file.content_type)
            email.send()
            messages.success(request, 'Frontend резюме успешно отправлено')
            return HttpResponseRedirect('/')


# функция отправки backend формы
def email_backend(request):
    if request.method == 'POST':

        # Проверка существует ли в бд
        email = request.POST['email']
        if RegisteredEmail.objects.filter(email=email).exists():
            messages.error(request, "Мы уже получили ваше резюме")
            return HttpResponseRedirect('/opportunities')
        # ===================================================

        else:
            name = request.POST.get('name')
            age = request.POST.get('age')
            email = request.POST.get('email')
            phone = request.POST.get('phone')
            address = request.POST.get('address')
            experience = request.POST.get('experience')
            skills = request.POST.get('skills')

            # Регистрация внутри базы данных
            contact = RegisteredEmail()
            contact.email = email
            contact.save()
            # ==============================

            template = loader.get_template('resume_form.html')
            context = {
                "name": name,
                "age": age,
                "email": email,
                "phone": phone,
                "address": address,
                "experience": experience,
                "skills": skills,
            }
            message = template.render(context)
            email = EmailMultiAlternatives(
                "Backend - Candidate", message,
                "Backend - Opportunity",
                ['']
            )
            email.content_subtype = "html"
            file = request.FILES['file']
            email.attach(file.name, file.read(), file.content_type)
            email.send()
            messages.success(request, 'Backend резюме успешно отправлено')
            return HttpResponseRedirect('/')


# функция отправки fullstack формы
def email_fullstack(request):
    if request.method == 'POST':

        # Проверка существует ли в бд
        email = request.POST['email']
        if RegisteredEmail.objects.filter(email=email).exists():
            messages.error(request, "Мы уже получили ваше резюме")
            return HttpResponseRedirect('/opportunities')
        # ===================================================

        else:
            name = request.POST.get('name')
            age = request.POST.get('age')
            email = request.POST.get('email')
            phone = request.POST.get('phone')
            address = request.POST.get('address')
            experience = request.POST.get('experience')
            skills = request.POST.get('skills')

            # Регистрация внутри базы данных
            contact = RegisteredEmail()
            contact.email = email
            contact.save()
            # ==============================

            template = loader.get_template('resume_form.html')
            context = {
                "name": name,
                "age": age,
                "email": email,
                "phone": phone,
                "address": address,
                "experience": experience,
                "skills": skills,
            }
            message = template.render(context)
            email = EmailMultiAlternatives(
                "Fullstack - Candidate", message,
                "Fullstack - Opportunity",
                ['']
            )
            email.content_subtype = "html"
            file = request.FILES['file']
            email.attach(file.name, file.read(), file.content_type)
            email.send()
            messages.success(request, 'Fullstack резюме успешно отправлено')
            return HttpResponseRedirect('/')
