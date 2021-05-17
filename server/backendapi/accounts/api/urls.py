from django.utils.translation import deactivate
from rest_framework import urlpatterns
from .views import ReportViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ReportViewSet, basename='reports')
urlpatterns = router.urls



'''
from django.urls import path

from .views import (
    ReportListView,
    ReportDetailView,
    ReportCreateView,
    ReportUpdateView,
    ReportDeleteView
)

urlpatterns = [
    path('', ReportListView.as_view()),
    path('create/', ReportCreateView.as_view()),
    path('<pk>', ReportDetailView.as_view()),
    path('<pk>/update/', ReportUpdateView.as_view()),
    path('<pk>/delete/', ReportDeleteView.as_view()),
]
'''
