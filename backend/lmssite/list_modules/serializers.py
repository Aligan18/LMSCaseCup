from rest_framework import serializers

from list_modules.models import ListModules


class CreateListModulesSerializers(serializers.ModelSerializer):
    class Meta:
        model = ListModules
        fields = '__all__'


class ListModulesSerializers(serializers.ModelSerializer):
    module_type = serializers.CharField(source='get_module_type_display')

    class Meta:
        model = ListModules
        fields = '__all__'


class AboutListModulesSerializers(serializers.ModelSerializer):
    class Meta:
        model = ListModules
        fields = '__all__'


