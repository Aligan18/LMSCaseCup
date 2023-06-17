from rest_framework import permissions
from rest_framework.request import Request

from course.models import Course
from students.models import Students

Request


class IsStudentHasAccess(permissions.BasePermission):  # Проверен тестами
    def has_object_permission(self, request, view, obj):
        if bool(request.user and request.user.is_authenticated):
            if bool(request.user.type == "4"):
                student = Students.objects.filter(student=request.user)
                course = obj.course
                student_has_access = student[0].courses.all().filter(id=course.id).exists()
                if student_has_access:
                    return True


class IsStudentHasAccessCreate(permissions.BasePermission):
    def has_permission(self, request, view):
        if bool(request.user and request.user.is_authenticated):
            if bool(request.method in permissions.SAFE_METHODS):
                if bool(request.user.type == "4"):
                    student_id = request.query_params.get('student')
                    student = Students.objects.filter(student=student_id)
                    course_id = request.query_params.get('course')
                    student_has_access = student.courses.all().filter(id=course_id).exists()
                    if student_has_access:
                        return True


class IsTeacherHasAccessCreate(permissions.BasePermission):  # Проверен тестами для List требует /?course=<id>
    def has_permission(self, request, view):
        if bool(request.user and request.user.is_authenticated):
            if bool(request.user.type == "3"):
                if bool(request.method in permissions.SAFE_METHODS):
                    data = request.query_params
                else:
                    data = request.data
                course = Course.objects.filter(id=data.get('course'))
                teachers_has_access = course[0].teacher.all().filter(teacher=request.user).exists()
                if teachers_has_access:
                    return True


class IsTeacherHasAccess(permissions.BasePermission):  # Проверен тестами
    def has_object_permission(self, request, view, obj):
        if bool(request.user and request.user.is_authenticated):
            if bool(request.user.type == "3"):
                if hasattr(obj, 'course'):
                    course = Course.objects.filter(id=obj.course.id)
                    teachers_has_access = course[0].teacher.all().filter(teacher=request.user).exists()
                    if teachers_has_access:
                        return True
                else:
                    course = obj
                    teachers_has_access = course.teacher.all().filter(teacher=request.user).exists()
                    if teachers_has_access:
                        return True


class IsTeacherOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if bool(request.user and request.user.is_authenticated):
            if bool(obj.teacher == request.user):
                return True


class IsStudentOwner(permissions.BasePermission):  # Проверен тестами
    def has_object_permission(self, request, view, obj):
        if bool(request.user and request.user.is_authenticated):
            if bool(obj.student == request.user):
                return True


class IsStudentOwnerForList(permissions.BasePermission):  # для List требует /?course=<id>
    def has_permission(self, request, view):
        if bool(request.user and request.user.is_authenticated):
            student = request.query_params.get('student')
            if student == request.user.id:
                return True


class IsSuperAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        if bool(request.user and request.user.is_authenticated):
            return bool(request.user.is_superuser)


class IsStudent(permissions.BasePermission):  # Проверен тестами
    def has_permission(self, request, view):
        if bool(request.user and request.user.is_authenticated):
            if bool(request.user.type == "4"):
                return True

# class IsStudentHaveCourse(permissions.BasePermission):
#     def has_permission(self, request, view):
#         if bool(request.user and request.user.type == "4"):
#
