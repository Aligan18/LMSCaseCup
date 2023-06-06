"""
URL configuration for lmssite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from admins.views import AdminsViewCreate, AdminsViewRetrieveUpdateDestroy
from certificates.views import CertificatesViewCreate, CertificatesViewList
from comments.views import CommentsViewCreate, CommentsViewList
from course.views import CourseViewCreate, CourseViewRetrieveUpdateDestroy, CourseViewList, \
    CategoryViewRetrieveUpdateDestroy
from file_tasks.views import FileTasksViewCreate, FileTasksGradeViewCreate, FileTasksAnswerViewCreate, \
    FileTasksViewRetrieveUpdateDestroy, FileTasksAnswerViewRetrieveUpdateDestroy, \
    FileTasksGradeViewRetrieveUpdateDestroy
from lectures.views import LecturesViewCreate, LecturesViewRetrieveUpdateDestroy

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/v1/adminscreate/', AdminsViewCreate.as_view()),
    path('api/v1/adminsrud/<int:pk>', AdminsViewRetrieveUpdateDestroy.as_view()),

    path('api/v1/certificatescreate/', CertificatesViewCreate.as_view()),
    path('api/v1/certificateslist/<int:pk>', CertificatesViewList.as_view()),

    path('api/v1/commentscreate/', CommentsViewCreate.as_view()),
    path('api/v1/commentslist/<int:pk>', CommentsViewList.as_view()),

    path('api/v1/coursecreate/', CourseViewCreate.as_view()),
    path('api/v1/courserud/<int:pk>', CourseViewRetrieveUpdateDestroy.as_view()),
    path('api/v1/courselist/<int:pk>', CourseViewList.as_view()),
    path('api/v1/categoryrud/<int:pk>', CategoryViewRetrieveUpdateDestroy.as_view()),

    path('api/v1/ftcreate/', FileTasksViewCreate.as_view()),
    path('api/v1/ftgradecreate/', FileTasksGradeViewCreate.as_view()),
    path('api/v1/ftanswercreate/', FileTasksAnswerViewCreate.as_view()),
    path('api/v1/ftrud/<int:pk>', FileTasksViewRetrieveUpdateDestroy.as_view()),
    path('api/v1/ftanswerrud/<int:pk>', FileTasksAnswerViewRetrieveUpdateDestroy.as_view()),
    path('api/v1/ftgraderud/<int:pk>', FileTasksGradeViewRetrieveUpdateDestroy.as_view()),

    path('api/v1/lecturescreate/', LecturesViewCreate.as_view()),
    path('api/v1/lecturesrud/<int:pk>', LecturesViewRetrieveUpdateDestroy.as_view()),
]
