from django_filters import rest_framework as filters

from categories.models import Category
from course.models import Course


class CharFilterInFilter(filters.BaseInFilter, filters.CharFilter):
    pass


class CategoryFilter(filters.FilterSet):
    genres = CharFilterInFilter(field_name='category__name', lookup_expr='in')

    class Meta:
        model = Course
        fields = ['category']