from django.db import models


class RegisteredEmail(models.Model):
    email = models.CharField(max_length=40)

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = 'Зарегистрированый сайт'
        verbose_name_plural = 'Зарегистрированые сайты'
