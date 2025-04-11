from django.db import models

# Create your models here.
class Contract(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(null=True, blank=True)
    payer_name = models.CharField(max_length=50)
    state = models.CharField(max_length=14)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    effective_date = models.DateTimeField(auto_now_add=True)  

     # File upload configuration
    file = models.FileField(upload_to='contracts/', null=True,blank=True)
