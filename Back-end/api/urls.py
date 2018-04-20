from django.urls import path, include

from api import views

urlpatterns = [
    path('comedies/', views.comedy_list),
    path('romances/', views.romance_list),
    path('thrillers/', views.thriller_list),
    path('horrors/', views.horror_list),
    path('movies/', views.movie_list),
    path('movies/<int:movie_id>/', views.movie_detail),
    path('comedies/<int:comedy_id>/', views.comedy_detail),
    path('thrillers/<int:thriller_id>/', views.thriller_detail),
    path('horrors/<int:horror_id>/', views.horror_detail),
    path('romance/<int:romance_id>/', views.romance_detail),
    path('comments/', views.comment_list),
    path('movies/<int:movie_id>/comments/', views.comment_list),
    path('movies/favorites/', views.favorite_list),

]