from django.contrib import admin
from django.urls import path
from agency import views

urlpatterns = [
    # доступ к django admin
    path('admin/', admin.site.urls),
    # доступ к render домашней странице
    path('', views.agency, name="agency"),
    # доступ к opportunities странице
    path('opportunities', views.opportunities, name="opportunities"),

    # ============================ Отправка Email ======================
    # доступ к frontend форме
    path('email_frontend', views.email_frontend, name="email_frontend"),
    # доступ к backend форме
    path('email_backend', views.email_backend, name="email_backend"),
    # доступ к fullstack форме
    path('email_fullstack', views.email_fullstack, name="email_fullstack"),
]
