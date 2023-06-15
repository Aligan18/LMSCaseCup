from django_filters import rest_framework as filters

from list_modules.models import ListModules


class CharFilterInFilter(filters.BaseInFilter, filters.CharFilter):
    pass


class Filter(filters.FilterSet):
    course = CharFilterInFilter(field_name='course')
    class Meta:
        model = ListModules
        fields = ['course']

class FilterForTasks(filters.FilterSet):
    course = filters.CharFilter(field_name='course')
    type = filters.CharFilter(field_name='module_type', method='filter_type')

    @staticmethod
    def filter_type(queryset, _name, _value):
        valid_types = ['2', '3']
        return queryset.filter(module_type__in=valid_types)

    class Meta:
        model = ListModules
        fields = ['course']