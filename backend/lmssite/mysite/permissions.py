from rest_framework import permissions

class IsTeacherAdmin(permissions.BasePermission):
    def has_permission(self, request, view,):
        if request.user.type == '3':
            return True

        if request.user.is_staff:
            return True

class IsOwnerTeacherAdmin(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if obj.teacher == request.user:
            return True

        if request.user.is_staff:
            return True


class IsStudentAdmin(permissions.BasePermission):
    def has_permission(self, request, view, ):
        if request.user.type == '4':
            return True

        if request.user.is_staff:
            return True


class IsOwnerStudentAdmin(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if obj.student == request.user:
            return True

        if request.user.is_staff:
            return True