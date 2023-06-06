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
from list_modules.views import AllCreateListModulesView, ListModulesRetrieveUpdateDestroyView
from students.views import StudentsViewRetrieveUpdateDestroy, StudentsViewCreate, StudentsViewAll
from teachers.views import TeachersViewRetrieveUpdateDestroy, TeachersViewCreate, TeachersViewAll
from test_tasks.views import TestTasksViewAllCreate, TestTasksViewRetrieveUpdateDestroy, \
    TestQuestionAnswerViewAllCreate, TestQuestionAnswerViewRetrieveUpdateDestroy, \
    TestAnswerOptionsViewRetrieveUpdateDestroy, TestAnswerOptionsViewAllCreate, TestGradeViewRetrieveUpdateDestroy, \
    TestGradeViewAllCreate

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/v1/admins/create/', AdminsViewCreate.as_view()),
    path('api/v1/admins/rud/<int:pk>', AdminsViewRetrieveUpdateDestroy.as_view()),

    path('api/v1/certificates/create/', CertificatesViewCreate.as_view()),
    path('api/v1/certificates/list/<int:pk>', CertificatesViewList.as_view()),

    path('api/v1/comments/create/', CommentsViewCreate.as_view()),
    path('api/v1/comments/list/<int:pk>', CommentsViewList.as_view()),

    path('api/v1/course/create/', CourseViewCreate.as_view()),
    path('api/v1/courser/rud/<int:pk>', CourseViewRetrieveUpdateDestroy.as_view()),
    path('api/v1/course/list/<int:pk>', CourseViewList.as_view()),
    path('api/v1/category/rud/<int:pk>', CategoryViewRetrieveUpdateDestroy.as_view()),

    path('api/v1/file_tasks/create/', FileTasksViewCreate.as_view()),
    path('api/v1/file_tasks_grade/create/', FileTasksGradeViewCreate.as_view()),
    path('api/v1/file_tasks_answer/create/', FileTasksAnswerViewCreate.as_view()),
    path('api/v1/file_tasks/rud/<int:pk>', FileTasksViewRetrieveUpdateDestroy.as_view()),
    path('api/v1/file_tasks_answer/rud/<int:pk>', FileTasksAnswerViewRetrieveUpdateDestroy.as_view()),
    path('api/v1/file_tasks_grader/rud/<int:pk>', FileTasksGradeViewRetrieveUpdateDestroy.as_view()),

    path('api/v1/lectures/create/', LecturesViewCreate.as_view()),
    path('api/v1/lectures/rud/<int:pk>', LecturesViewRetrieveUpdateDestroy.as_view()),

    path('api/v1/list_modules/', AllCreateListModulesView.as_view()),
    path('api/v1/list_modules/<int:pk>', ListModulesRetrieveUpdateDestroyView.as_view()),

    path('api/v1/students/<int:pk>', StudentsViewRetrieveUpdateDestroy.as_view()),
    path('api/v1/students/create', StudentsViewCreate.as_view()),
    path('api/v1/students/list', StudentsViewAll.as_view()),

    path('api/v1/students/<int:pk>', TeachersViewRetrieveUpdateDestroy.as_view()),
    path('api/v1/students/create', TeachersViewCreate.as_view()),
    path('api/v1/students/list', TeachersViewAll.as_view()),

    path('api/v1/test_tasks/', TestTasksViewAllCreate.as_view()),
    path('api/v1/test_tasks_grade/create/', TestGradeViewAllCreate.as_view()),
    path('api/v1/test_question_answer/create/', TestQuestionAnswerViewAllCreate.as_view()),
    path('api/v1/test_question_answer/rud/<int:pk>', TestQuestionAnswerViewRetrieveUpdateDestroy.as_view()),
    path('api/v1/test_tasks/rud/<int:pk>', TestTasksViewRetrieveUpdateDestroy.as_view()),
    path('api/v1/test_answer_options/rud/<int:pk>', TestAnswerOptionsViewRetrieveUpdateDestroy.as_view()),
    path('api/v1/test_answer_options', TestAnswerOptionsViewAllCreate.as_view()),
    path('api/v1/test_tasks_grader/rud/<int:pk>', TestGradeViewRetrieveUpdateDestroy.as_view()),
]
