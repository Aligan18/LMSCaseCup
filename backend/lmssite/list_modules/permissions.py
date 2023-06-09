from rest_framework import permissions


class IsOwnerTeacherOrIsAdmin(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.user:
            if request.method in permissions.SAFE_METHODS:
                return True

            elif obj.user == request.user:
                return True

            elif bool(request.user.is_staff):
                return True
