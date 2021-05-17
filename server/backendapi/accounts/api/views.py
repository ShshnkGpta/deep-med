from rest_framework import viewsets

from ..models import Report
from .serializers import ReportSerializer

class ReportViewSet(viewsets.ModelViewSet):
    serializer_class = ReportSerializer
    queryset = Report.objects.all()



'''
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView
)

class ReportListView(ListAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer

class ReportDetailView(RetrieveAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer

class ReportCreateView(CreateAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer

class ReportUpdateView(UpdateAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer

class ReportDeleteView(DestroyAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
'''
