from rest_framework import serializers

from lmssite.comments.models import Comments


class CommentsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = '__all__'


