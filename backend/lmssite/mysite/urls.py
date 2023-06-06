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

from admins.views import AdminsView
from certificates.views import CertificatesView
from course.views import CourseAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/courselist/', CourseAPIView.as_view()),
    path('api/v1/adminslist/<int:pk>', AdminsView.as_view()),
    path('api/v1/certificateslist/<int:pk>', CertificatesView.as_view())

]
