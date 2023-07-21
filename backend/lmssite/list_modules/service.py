from django_filters import rest_framework as filters

from list_modules.models import ListModules, Modules


class CharFilterInFilter(filters.BaseInFilter, filters.CharFilter):
    pass


class Filter(filters.FilterSet):
    course = CharFilterInFilter(field_name='course')
    class Meta:
        model = ListModules
        fields = ['course']

class FilterForModules(filters.FilterSet):
    course = CharFilterInFilter(field_name='course')
    class Meta:
        model = Modules
        fields = ['course']