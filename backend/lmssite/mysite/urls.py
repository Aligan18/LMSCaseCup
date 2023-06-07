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

from admins.views import AdminsCreateView, AdminsRetrieveUpdateDestroyView
from categories.views import CategoriesRetrieveUpdateDestroyView
from certificates.views import CertificatesCreateView, CertificatesListView
from comments.views import CommentsCreateView, CommentsListView
from course.views import CourseCreateView, CourseRetrieveUpdateDestroyView, CourseListView, \
    CategoryRetrieveUpdateDestroyView
from file_tasks.views import FileTasksCreateView, FileTasksGradeCreateView, FileTasksAnswerCreateView, \
    FileTasksRetrieveUpdateDestroyView, FileTasksAnswerRetrieveUpdateDestroyView, \
    FileTasksGradeRetrieveUpdateDestroyView
from lectures.views import LecturesCreateView, LecturesRetrieveUpdateDestroyView
from list_modules.views import AllCreateListModulesView, ListModulesRetrieveUpdateDestroyView
from students.views import StudentsViewRetrieveUpdateDestroy, StudentsViewCreate, StudentsViewAll
from teachers.views import TeachersViewRetrieveUpdateDestroy, TeachersViewCreate, TeachersViewAll
from test_tasks.views import TestTasksViewAllCreate, TestTasksViewRetrieveUpdateDestroy, \
    TestQuestionAnswerViewAllCreate, TestQuestionAnswerViewRetrieveUpdateDestroy, \
    TestAnswerOptionsViewRetrieveUpdateDestroy, TestAnswerOptionsViewAllCreate, TestGradeViewRetrieveUpdateDestroy, \
    TestGradeViewAllCreate

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),

    path('api/v1/admins/create/', AdminsCreateView.as_view()),
    path('api/v1/admins/rud/<int:pk>', AdminsRetrieveUpdateDestroyView.as_view()),

    path('api/v1/certificates/create/', CertificatesCreateView.as_view()),
    path('api/v1/certificates/list/<int:pk>', CertificatesListView.as_view()),

    path('api/v1/comments/create/', CommentsCreateView.as_view()),
    path('api/v1/comments/list/', CommentsListView.as_view()),

    path('api/v1/course/create/', CourseCreateView.as_view()),
    path('api/v1/course/rud/<int:pk>', CourseRetrieveUpdateDestroyView.as_view()),
    path('api/v1/course/list/', CourseListView.as_view()),

    path('api/v1/category/rud/<int:pk>', CategoriesRetrieveUpdateDestroyView.as_view()),

    path('api/v1/file_tasks/create/', FileTasksCreateView.as_view()),
    path('api/v1/file_tasks_grade/create/', FileTasksGradeCreateView.as_view()),
    path('api/v1/file_tasks_answer/create/', FileTasksAnswerCreateView.as_view()),
    path('api/v1/file_tasks/rud/<int:pk>', FileTasksRetrieveUpdateDestroyView.as_view()),
    path('api/v1/file_tasks_answer/rud/<int:pk>', FileTasksAnswerRetrieveUpdateDestroyView.as_view()),
    path('api/v1/file_tasks_grade/rud/<int:pk>', FileTasksGradeRetrieveUpdateDestroyView.as_view()),

    path('api/v1/lectures/create/', LecturesCreateView.as_view()),
    path('api/v1/lectures/rud/<int:pk>', LecturesRetrieveUpdateDestroyView.as_view()),

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
    path('api/v1/test_tasks_grade/rud/<int:pk>', TestGradeViewRetrieveUpdateDestroy.as_view()),
]
