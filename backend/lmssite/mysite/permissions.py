from rest_framework import permissions
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