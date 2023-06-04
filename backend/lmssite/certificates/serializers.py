from rest_framework import serializers

from lmssite.certificates.models import Certificates


class CertificatesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Certificates
        fields = '__all__'



