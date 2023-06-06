from rest_framework import serializers

from lmssite.certificates.models import Certificates
from lmssite.course.serializers import AboutCourseSerializers
from lmssite.students.serializers import AboutStudentSerializers


class CreateCertificatesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Certificates
        fields = '__all__'


class CertificatesSerializers(serializers.ModelSerializer):
    course = AboutCourseSerializers()
    student = AboutStudentSerializers()

    class Meta:
        model = Certificates
        fields = '__all__'
