from django_filters import rest_framework as filters

from categories.models import Category
from comments.models import Comments


class CharFilterInFilter(filters.BaseInFilter, filters.CharFilter):
    pass


class CategoryFilter(filters.FilterSet):
    course = CharFilterInFilter(field_name='course')
    task = CharFilterInFilter(field_name='course')
    class Meta:
        model = Comments
        fields = ['course']