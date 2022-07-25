from django.urls import path
from . import views

urlpatterns = [
    path('get_list', views.data, name='home'),
    path('get_user/<str:pk>/', views.singleData),
    path('add/', views.addItem),
    path('update_user/<str:pk>/', views.updateUser),
    path('delete_user/<str:pk>/', views.deleteUser)
    # path('data', views.data, name='add')
]
