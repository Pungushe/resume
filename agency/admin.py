from django.contrib import admin
from agency.models import RegisteredEmail


class RegisteredEmailAdmin(admin.ModelAdmin):
    list_display = ['email']
    search_fields = ['email']
    list_per_page = 10


admin.site.register(RegisteredEmail, RegisteredEmailAdmin)
