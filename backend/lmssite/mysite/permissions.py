from rest_framework import permissions

class IsAdminTeacher1(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        if request.user.is_staff:
            return True
        return bool(request.users == obj.user and request.user.type == "3")


class IsAdminTeacher(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True

        if request.user.is_staff:
            return True
        return bool(request.user and request.user.type == "3")

class IsAdminStudent(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True

        if request.user.is_staff:
            return True
        return bool(request.user and request.user.type == "4")

class IsAdminTeacherStudent(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True

        if request.user.is_staff:
            return True
        return bool(request.user and request.user.type == "3" or request.user.type == "4")