from django.urls import path
from . import views

urlpatterns = [
    path('api/cemetery/', views.CemeteryListCreate.as_view() ),
]
