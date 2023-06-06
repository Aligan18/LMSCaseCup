from rest_framework import serializers

from lmssite.comments.models import Comments
from lmssite.students.serializers import AboutStudentSerializers


class CreateCommentsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = '__all__'


class CommentsSerializers(serializers.ModelSerializer):
    student = AboutStudentSerializers()

    class Meta:
        model = Comments
        fields = '__all__'
