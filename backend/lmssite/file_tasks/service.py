from django_filters import rest_framework as filters

from file_tasks.models import FileTasks, FileTasksAnswer


class CharFilterInFilter(filters.BaseInFilter, filters.CharFilter):
    pass


class Filter(filters.FilterSet):
    course = CharFilterInFilter(field_name='course')
    task = CharFilterInFilter(field_name='file_task')
    class Meta:
        model = FileTasksAnswer
        fields = ['course', 'task']