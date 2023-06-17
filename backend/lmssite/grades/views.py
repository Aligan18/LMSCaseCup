# grades с фильтрацией по course  , для просмотра  всех оценок студентов
from django_filters.rest_framework import DjangoFilterBackend
# grades с фильтрацией по course и студенту   , для просмотра   всех оценок определенного студента


from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from custom_user.permissions import IsStudent, IsTeacherHasAccessCreate, IsTeacherHasAccess, IsStudentOwner, \
    IsStudentOwnerForList, IsStudentHasAccessCreate
from grades.models import Grades
from grades.serializers import GradesSerializers, CreateGradesSerializers, AboutGradesSerializers, ChangeGradesForTask
from grades.service import Filter, FilterOnlyCourse


# Student and Admin
class AttendanceForLecturesViewCreate(generics.CreateAPIView):
    queryset = Grades.objects.all()
    serializer_class = CreateGradesSerializers
    permission_classes = [IsAdminUser | IsStudentHasAccessCreate]


# нужно передавать /?course=<id>
# Admin , Teacher имеющий доступ , Student свои оценки
class GradesOneStudentViewList(generics.ListAPIView): # grades с фильтрацией по course и студенту   , для просмотра   всех оценок определенного студента
    queryset = Grades.objects.all()
    serializer_class = AboutGradesSerializers
    filter_backends = (DjangoFilterBackend,)
    filterset_class = Filter
    permission_classes = [IsAdminUser | IsTeacherHasAccessCreate | IsStudentOwnerForList]


# нужно передавать /?course=<id>
# Admin , Teacher имеющий доступ
class GradesViewList(generics.ListAPIView): # grades с фильтрацией по course  , для просмотра  всех оценок студентов
    queryset = Grades.objects.all()
    serializer_class = AboutGradesSerializers
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterOnlyCourse
    permission_classes = [IsAdminUser | IsTeacherHasAccessCreate]


# Admin , Teacher имеющий доступ , Student свои оценки
class GradesViewRetrieve(generics.RetrieveAPIView):
    queryset = Grades.objects.all()
    serializer_class = GradesSerializers
    permission_classes = [IsAdminUser | IsTeacherHasAccess]


# Admin , Teacher имеющий доступ
class ChangeGradesForTaskViewUpdate(generics.UpdateAPIView):
    queryset = Grades.objects.all()
    serializer_class = ChangeGradesForTask
    permission_classes = [IsAdminUser | IsTeacherHasAccess]


# Admin
class GradesViewDestroy(generics.DestroyAPIView):
    queryset = Grades.objects.all()
    serializer_class = CreateGradesSerializers
    permission_classes = [IsAdminUser]