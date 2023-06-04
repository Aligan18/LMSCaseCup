
from rest_framework import serializers

from lmssite.test_tasks.models import TestTasks, TestQuestionAnswer, TestGrade


class TestTasksSerializers(serializers.ModelSerializer):
    class Meta:
        model = TestTasks
        fields = '__all__'


class TestQuestionAnswerSerializers(serializers.ModelSerializer):
    class Meta:
        model = TestQuestionAnswer
        fields = '__all__'


class TestGradeSerializers(serializers.ModelSerializer):
    class Meta:
        model = TestGrade
        fields = '__all__'
