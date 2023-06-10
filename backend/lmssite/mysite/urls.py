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

from admins.views import AdminsCreateView, AdminsRetrieveUpdateDestroyView, ActivateUser
from categories.views import CategoriesRetrieveUpdateDestroyView
from certificates.views import CertificatesCreateView, CertificatesListView
from comments.views import CommentsCreateView, CommentsListView

from course.views import CourseCreateView,  CourseListView
from custom_user.views import TESTView, CreateTESTView
from file_tasks.views import FileTasksCreateView, FileTasksGradeCreateView, FileTasksAnswerCreateView, \
    FileTasksRetrieveUpdateDestroyView, FileTasksAnswerRetrieveUpdateDestroyView, \
    FileTasksGradeRetrieveUpdateDestroyView
from lectures.views import LecturesCreateView, LecturesRetrieveUpdateDestroyView
from list_modules.views import ListModulesViewUpdateDestroy, ListModulesViewAllCreate, ListModulesViewRetrieve

from course.views import CourseCreateView, CourseListView, \
     CourseDeleteView, CourseUpdateView
from file_tasks.views import FileTasksCreateView, FileTasksGradeCreateView, FileTasksAnswerCreateView, \
    FileTasksRetrieveUpdateDestroyView, FileTasksAnswerRetrieveUpdateDestroyView, \
    FileTasksGradeRetrieveUpdateDestroyView
from lectures.views import LecturesCreateView, LecturesRetrieveUpdateDestroyView, LecturesWatchView


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
    path('accounts/activate/<uid>/<token>', ActivateUser.as_view({'get': 'activation'}), name='activation'),

    path('api/v1/test/create/', CreateTESTView.as_view()),
    path('api/v1/test/<int:pk>', TESTView.as_view()),

    path('api/v1/admins/create/', AdminsCreateView.as_view()),
    path('api/v1/admins/rud/<int:pk>', AdminsRetrieveUpdateDestroyView.as_view()),

    path('api/v1/certificates/create/', CertificatesCreateView.as_view()),
    path('api/v1/certificates/list/<int:pk>', CertificatesListView.as_view()),

    path('api/v1/comments/create/', CommentsCreateView.as_view()),
    path('api/v1/comments/list/', CommentsListView.as_view()),


    path('api/v1/course/create/', CourseCreateView.as_view() , name="course-create"),

    path('api/v1/course/delete/<int:pk>', CourseDeleteView.as_view()),
    path('api/v1/course/update/<int:pk>', CourseUpdateView.as_view()),

    path('api/v1/course/list/', CourseListView.as_view()),

    path('api/v1/category/rud/<int:pk>', CategoriesRetrieveUpdateDestroyView.as_view()),

    path('api/v1/file_tasks/create/', FileTasksCreateView.as_view()),
    path('api/v1/file_tasks_grade/create/', FileTasksGradeCreateView.as_view()),
    path('api/v1/file_tasks_answer/create/', FileTasksAnswerCreateView.as_view()),
    path('api/v1/file_tasks/rud/<int:pk>', FileTasksRetrieveUpdateDestroyView.as_view()),
    path('api/v1/file_tasks_answer/rud/<int:pk>', FileTasksAnswerRetrieveUpdateDestroyView.as_view()),
    path('api/v1/file_tasks_grade/rud/<int:pk>', FileTasksGradeRetrieveUpdateDestroyView.as_view()),


    path('api/v1/lectures/create/', LecturesCreateView.as_view(), name="lectures-create"),
    path('api/v1/lectures/rud/<int:pk>', LecturesRetrieveUpdateDestroyView.as_view(), name="lectures-rud"),

    path('api/v1/lectures/create/', LecturesCreateView.as_view()),
    path('api/v1/lectures/watch/<int:pk>', LecturesWatchView.as_view()),
    path('api/v1/lectures/rud/<int:pk>', LecturesRetrieveUpdateDestroyView.as_view()),


    path('api/v1/list_modules/', ListModulesViewAllCreate.as_view()),
    path('api/v1/list_modules/ud/<int:pk>', ListModulesViewUpdateDestroy.as_view()),
    path('api/v1/list_modules/<int:pk>', ListModulesViewRetrieve.as_view()),

    path('api/v1/students/rud/<int:pk>', StudentsViewRetrieveUpdateDestroy.as_view()),
    path('api/v1/students/create', StudentsViewCreate.as_view()),
    path('api/v1/students/list', StudentsViewAll.as_view()),

    path('api/v1/teachers/create', TeachersViewCreate.as_view()),
    path('api/v1/teachers/rud/<int:pk>', TeachersViewRetrieveUpdateDestroy.as_view()),
    path('api/v1/teachers/list', TeachersViewAll.as_view()),

    path('api/v1/test_tasks/', TestTasksViewAllCreate.as_view()),
    path('api/v1/test_tasks_grade/create/', TestGradeViewAllCreate.as_view()),
    path('api/v1/test_question_answer/create/', TestQuestionAnswerViewAllCreate.as_view()),
    path('api/v1/test_question_answer/rud/<int:pk>', TestQuestionAnswerViewRetrieveUpdateDestroy.as_view()),
    path('api/v1/test_tasks/rud/<int:pk>', TestTasksViewRetrieveUpdateDestroy.as_view()),
    path('api/v1/test_answer_options/rud/<int:pk>', TestAnswerOptionsViewRetrieveUpdateDestroy.as_view()),
    path('api/v1/test_answer_options', TestAnswerOptionsViewAllCreate.as_view()),
    path('api/v1/test_tasks_grade/rud/<int:pk>', TestGradeViewRetrieveUpdateDestroy.as_view()),
]
