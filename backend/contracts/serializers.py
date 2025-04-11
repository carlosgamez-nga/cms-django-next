from rest_framework import serializers
from .models import Contract

class ContractSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contract
        fields = ['id', 'title', 'description', 'payer_name', 'state', 'effective_date', 'uploaded_at', 'file']
        read_only_fields = ['id', 'effective_date', 'uploaded_at']