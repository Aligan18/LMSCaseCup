# grades с фильтрацией по course  , для просмотра  всех оценок студентов


# grades с фильтрацией по course и студенту   , для просмотра   всех оценок определенного студента


from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from custom_user.permissions import IsStudent, IsTeacherHasAccessCreate, IsTeacherHasAccess
from grades.models import Grades
from grades.serializers import GradesSerializers, CreateGradesSerializers, AboutGradesSerializers


# Student and Admin
class AttendanceForLecturesViewCreate(generics.CreateAPIView):
    queryset = Grades.objects.all()
    serializer_class = CreateGradesSerializers
    permission_classes = [IsAdminUser | IsStudent]


# нужно передовать /?course=<id>
# Admin , Teacher имеющий доступ , Student свои оценки
class GradesViewList(generics.ListAPIView): # grades с фильтрацией по course и студенту   , для просмотра   всех оценок определенного студента
    queryset = Grades.objects.all()
    serializer_class = AboutGradesSerializers
    permission_classes = [IsAdminUser | IsTeacherHasAccessCreate]


# нужно передовать /?course=<id>
# Admin , Teacher имеющий доступ
class GradesViewList(generics.ListAPIView): # grades с фильтрацией по course  , для просмотра  всех оценок студентов
    queryset = Grades.objects.all()
    serializer_class = AboutGradesSerializers
    permission_classes = [IsAdminUser | IsTeacherHasAccessCreate]


# Admin , Teacher имеющий доступ , Student свои оценки
class GradesViewRetrieve(generics.RetrieveAPIView):
    queryset = Grades.objects.all()
    serializer_class = GradesSerializers
    permission_classes = [IsAdminUser | IsTeacherHasAccess]


# Admin , Teacher имеющий доступ
class GradesViewUpdate(generics.UpdateAPIView):
    queryset = Grades.objects.all()
    serializer_class = CreateGradesSerializers
    permission_classes = [IsAdminUser | IsTeacherHasAccess]


# Admin
class GradesViewDestroy(generics.DestroyAPIView):
    queryset = Grades.objects.all()
    serializer_class = CreateGradesSerializers
    permission_classes = [IsAdminUser]
