from rest_framework import routers
from .api import ContractViewSet

router = routers.DefaultRouter()

router.register('api/contracts', ContractViewSet, 'contracts')

urlpatterns = router.urls