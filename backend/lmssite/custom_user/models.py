from __future__ import unicode_literals

from django.core.mail import send_mail
from django.db import models
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser

from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    USER_TYPES = [
        ("1", "Super Admin"),
        ("2", "Admin"),
        ("3", "Teacher"),
        ("4", "Student"),
    ]
    type = models.CharField(choices=USER_TYPES, default="4", max_length=1)
    login = models.CharField('email address', max_length=100, unique=True)
    email = models.EmailField('email address', unique=True)
    date_joined = models.DateTimeField('date joined', auto_now_add=True)
    is_active = models.BooleanField(default=False, blank=True)
    is_staff = models.BooleanField(default=False, blank=True)
    is_superuser = models.BooleanField(default=False,  blank=True)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)
    phone = models.CharField(max_length=30, null=True, blank=True, unique=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['login',  'type']

    class Meta:
        verbose_name = 'user'
        verbose_name_plural = 'users'

    # def email_user(self, subject, message, from_email=None, **kwargs):
    #     '''
    #     Sends an email to this User.
    #     '''
    #     send_mail(subject, message, from_email, [self.email], **kwargs)
