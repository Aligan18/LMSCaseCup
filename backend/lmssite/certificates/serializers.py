from rest_framework import serializers

from course.serializers import AboutCourseSerializers
from students.serializers import AboutStudentsSerializers
from .models import Certificates


class CreateCertificatesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Certificates
        fields = '__all__'


class CertificatesSerializers(serializers.ModelSerializer):
    course = AboutCourseSerializers()
    student = AboutStudentsSerializers()

    class Meta:
        model = Certificates
        fields = '__all__'
