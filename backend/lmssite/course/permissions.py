from rest_framework import permissions


class IsOwnerTeacherAdmin(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if obj.teacher == request.user:
            return True

        if request.user.is_staff:
            return True


class IsTeacherAdmin(permissions.BasePermission):
    def has_permission(self, request, view,):
        if request.user.type == '3':
            return True

        if request.user.is_staff:
            return True
