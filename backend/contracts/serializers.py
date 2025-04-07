from rest_framework import serializers
from .models import Contract

class ContractSerializer(serializers.ModelSerializer):
    file = serializers.FileField(
        max_length=None,  
        allow_empty_file=False,  
        use_url=True  
    )
    class Meta:
        model = Contract
        fields = ['id', 'title', 'description', 'payer_name','state', 'effective_date', 'uploaded_at', 'file' ]
        read_only_fields = ['id', 'effective_date', 'uploaded_at']