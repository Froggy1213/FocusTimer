from tkinter.font import names

from django.urls import path
from .import views
from .views import task_delete

urlpatterns = [
    path('', views.task_list, name='task_list'),
    path('create/', views.task_create, name='task_create'),
    path('task/<int:pk>/delete/', task_delete, name='task_delete'),
]