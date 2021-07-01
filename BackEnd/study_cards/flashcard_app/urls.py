from django.urls import path
from . import views

urlpatterns = [
    path('card/', views.CardList.as_view()),
    path('card/<int:pk>/', views.CardDetail.as_view()),
    path('deck/', views.DeckList.as_view()),
    path('deck/<int:pk>/', views.DeckDetail.as_view()),
]
