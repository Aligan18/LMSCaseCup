from rest_framework import serializers

from lmssite.list_modules.models import ListModules


class ListModulesSerializers(serializers.ModelSerializer):
    class Meta:
        model = ListModules
        fields = '__all__'

