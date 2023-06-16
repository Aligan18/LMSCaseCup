from django_filters import rest_framework as filters

from grades.models import Grades


class CharFilterInFilter(filters.BaseInFilter, filters.CharFilter):
    pass


class Filter(filters.FilterSet):
    course = CharFilterInFilter(field_name='course')
    student = CharFilterInFilter(field_name='student')
    class Meta:
        model = Grades
        fields = ['course', 'student']

class FilterOnlyCourse(filters.FilterSet):
    course = CharFilterInFilter(field_name='course')
    class Meta:
        model = Grades
        fields = ['course']