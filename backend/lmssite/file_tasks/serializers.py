from rest_framework import serializers
from lmssite.file_tasks.models import FileTasks, FileTasksAnswer, FileTasksGrade


class FileTasksSerializers(serializers.ModelSerializer):
    class Meta:
        model = FileTasks
        fields = '__all__'


class FileTasksAnswerSerializers(serializers.ModelSerializer):
    class Meta:
        model = FileTasksAnswer
        fields = '__all__'


class FileTasksGradeSerializers(serializers.ModelSerializer):
    class Meta:
        model = FileTasksGrade
        fields = '__all__'


e
