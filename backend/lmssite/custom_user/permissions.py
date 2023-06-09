from rest_framework import permissions

from students.models import Students


#
def course_author(self, request, view):
    if Students.objects.filter(request.user) == request.user:
        return True


# def course_student(request, obj, ):
#      data = Students.objects.filter('user' == request.user).courses
#      if
#         return True


class TestPermissions(permissions.BasePermission):
    """
    Object-level permission to only allow owners of an object to edit it.
    Assumes the model instance has an `owner` attribute.
    """

    def has_permission(self, request, view):

        course_author(self, request,  view)
        return True
