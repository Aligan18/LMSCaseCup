from rest_framework import permissions

from course.models import Course
from students.models import Students


class IsStudentHasAccess(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if bool(request.user and request.user.is_authenticated):
            if bool(request.user.type == "4"):
                student = Students.objects.filter(student=request.user)
                course = obj.course
                student_has_access = student[0].courses.all().filter(id=course.id).exists()
                if student_has_access:
                    return True


class IsTeacherHasAccessCreate(permissions.BasePermission):
    def has_permission(self, request, view):
        if bool(request.user and request.user.is_authenticated):
            if bool(request.user.type == "3"):
                data = request.data
                course = Course.objects.filter(id=data.get('course'))
                teachers_has_access = course[0].teacher.all().filter(teacher=request.user).exists()
                if teachers_has_access:
                    return True


class IsTeacherHasAccess(permissions.BasePermission):  # Проверен тестами
    def has_object_permission(self, request, view, obj):
        if bool(request.user and request.user.is_authenticated):
            if hasattr(obj, 'course'):
                course = Course.objects.filter(id=obj.course.id)
            else:
                course = obj
            if bool(request.user.type == "3"):
                teachers_has_access = course[0].teacher.all().filter(teacher=request.user).exists()
                if teachers_has_access:
                    return True


class IsTeacherOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if bool(request.user and request.user.is_authenticated):
            if bool(obj.teacher == request.user):
                return True


class IsStudentOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if bool(request.user and request.user.is_authenticated):
            if bool(obj.student == request.user):
                return True


class IsSuperAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        if bool(request.user and request.user.is_authenticated):
            return bool(request.user.is_superuser)


class IsStudent(permissions.BasePermission):
    def has_permission(self, request, view):
        if bool(request.user and request.user.is_authenticated):
            if bool(request.user.type == "4"):
                return True

# class IsStudentHaveCourse(permissions.BasePermission):
#     def has_permission(self, request, view):
#         if bool(request.user and request.user.type == "4"):
#
