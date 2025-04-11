from rest_framework import viewsets, permissions, status
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Contract
from .serializers import ContractSerializer

class ContractViewSet(viewsets.ModelViewSet):
    queryset = Contract.objects.all()
    permission_classes = [permissions.AllowAny]
    parser_classes = [MultiPartParser, FormParser]
    serializer_class = ContractSerializer

