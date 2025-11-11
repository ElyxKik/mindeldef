from django.urls import path
from . import views

app_name = 'frontend'

urlpatterns = [
    path('', views.index, name='index'),
    path('pages/', views.page_list, name='pages'),
    path('pages/<slug:slug>/', views.page_detail, name='page_detail'),
    path('pages/create/', views.page_create, name='page_create'),
    path('pages/<slug:slug>/edit/', views.page_edit, name='page_edit'),
    path('pages/<slug:slug>/delete/', views.page_delete, name='page_delete'),
    
    path('articles/', views.article_list, name='articles'),
    path('articles/<slug:slug>/', views.article_detail, name='article_detail'),
    path('articles/create/', views.article_create, name='article_create'),
    path('articles/<slug:slug>/edit/', views.article_edit, name='article_edit'),
    path('articles/<slug:slug>/delete/', views.article_delete, name='article_delete'),
    
    path('media/', views.media_list, name='media'),
    path('media/<int:pk>/', views.media_detail, name='media_detail'),
    path('media/create/', views.media_create, name='media_create'),
    path('media/<int:pk>/edit/', views.media_edit, name='media_edit'),
    path('media/<int:pk>/delete/', views.media_delete, name='media_delete'),
]
