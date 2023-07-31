from rest_framework import serializers

from lectures.serializers import AboutLecturesSerializers, LecturesSerializers
from list_modules.models import ListModules, Modules


class CreateListModulesSerializers(serializers.ModelSerializer):
    class Meta:
        model = ListModules
        fields = '__all__'


class ListModulesSerializers(serializers.ModelSerializer):
    lecture_id = LecturesSerializers()


    class Meta:
        model = ListModules
        fields = '__all__'


class AboutListModulesSerializers(serializers.ModelSerializer):
    lecture_id =AboutLecturesSerializers()

    class Meta:
        model = ListModules
        fields = '__all__'


class CreateModulesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Modules
        fields = '__all__'


class ModulesSerializers(serializers.ModelSerializer):
    list_modules = AboutListModulesSerializers(many=True)
    class Meta:
        model = Modules
        fields = '__all__'