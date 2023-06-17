from django.db import models

from custom_user.models import User
from support_chat.models import AdminTickets, UnauthorizedTickets, TeacherTickets, StudentTickets


class StudentTicketsSerializers(models.Model):
    class Meta:
        model = StudentTickets
        fields = '__all__'


class TeacherTicketsSerializers(models.Model):
    class Meta:
        model = TeacherTickets
        fields = '__all__'


class AdminTicketsSerializers(models.Model):
    class Meta:
        model = AdminTickets
        fields = '__all__'


class UnauthorizedTicketsSerializers(models.Model):
    class Meta:
        model = UnauthorizedTickets
        fields = '__all__'


#################################################################################################

class AboutStudentTicketsSerializers(models.Model):
    class Meta:
        model = StudentTickets
        fields = '__all__'


class AboutTeacherTicketsSerializers(models.Model):
    class Meta:
        model = TeacherTickets
        fields = '__all__'


class AboutAdminTicketsSerializers(models.Model):
    class Meta:
        model = AdminTickets
        fields = '__all__'


class AboutUnauthorizedTicketsSerializers(models.Model):
    class Meta:
        model = UnauthorizedTickets
        fields = '__all__'


#################################################################################################

class CreateStudentTicketsSerializers(models.Model):
    class Meta:
        model = StudentTickets
        fields = '__all__'


class CreateTeacherTicketsSerializers(models.Model):
    class Meta:
        model = TeacherTickets
        fields = '__all__'


class CreateAdminTicketsSerializers(models.Model):
    class Meta:
        model = AdminTickets
        fields = '__all__'


class CreateUnauthorizedTicketsSerializers(models.Model):
    class Meta:
        model = UnauthorizedTickets
        fields = '__all__'
