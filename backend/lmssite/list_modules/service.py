from django_filters import rest_framework as filters

from list_modules.models import ListModules


class CharFilterInFilter(filters.BaseInFilter, filters.CharFilter):
    pass


class Filter(filters.FilterSet):
    course = CharFilterInFilter(field_name='course')
    class Meta:
        model = ListModules
        fields = ['course']
