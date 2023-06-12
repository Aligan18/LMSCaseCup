from rest_framework import permissions

from course.models import Course
from students.models import Students


class IsStudentHasAccess(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if bool(request.user and request.user.type == "4"):
            student = Students.objects.filter(user=request.user)
            course = obj.course
            if course in student.courses:
                return True


class IsTeacherHasAccess(permissions.BasePermission):
    def has_permission(self, request, view):
        if bool(request.user and request.user.type == "3"):
            course = Course.objects.filter(id=request.data.course)
            if request.user in course.teacher:
                return True


class IsTeacherOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if bool(request.user and obj.teacher == request.user):
            return True


class IsStudentOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if bool(request.user and obj.student == request.user):
            return True


class IsSuperAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_superuser)


#
# class IsOwnerTeacherOrIsAdmin(permissions.BasePermission):
#
#     def has_object_permission(self, request, view, obj):
#         if request.user:
#             if request.method in permissions.SAFE_METHODS:
#                 return True
#
#             elif obj.user == request.user:
#                 return True
#
#             elif bool(request.user.is_staff):
#                 return True


class IsStudent(permissions.BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.type == "4")

# class IsStudentHaveCourse(permissions.BasePermission):
#     def has_permission(self, request, view):
#         if bool(request.user and request.user.type == "4"):
#
