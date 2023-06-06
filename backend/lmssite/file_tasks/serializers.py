from rest_framework import serializers
from lmssite.file_tasks.models import FileTasks, FileTasksAnswer, FileTasksGrade
from lmssite.students.serializers import AboutStudentSerializers


class CreateFileTasksSerializers(serializers.ModelSerializer):
    class Meta:
        model = FileTasks
        fields = '__all__'


class CreateFileTasksGradeSerializers(serializers.ModelSerializer):
    class Meta:
        model = FileTasksGrade
        fields = '__all__'


class CreateFileTasksAnswerSerializers(serializers.ModelSerializer):
    class Meta:
        model = FileTasksAnswer
        fields = '__all__'


class FileTasksSerializers(serializers.ModelSerializer):
    class Meta:
        model = FileTasks
        fields = '__all__'


class FileTasksAnswerSerializers(serializers.ModelSerializer):
    student = AboutStudentSerializers()

    class Meta:
        model = FileTasksAnswer
        fields = '__all__'


class FileTasksGradeSerializers(serializers.ModelSerializer):
    student = AboutStudentSerializers()

    class Meta:
        model = FileTasksGrade
        fields = '__all__'
