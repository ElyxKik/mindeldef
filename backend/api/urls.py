from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)
from .views import (
    PageViewSet,
    ArticleViewSet,
    MediaViewSet,
    MinisterViewSet,
    CabinetMemberViewSet,
    DepartmentViewSet,
    MissionViewSet,
    AttributionViewSet
)

# Création du routeur pour l'API REST
router = DefaultRouter()
router.register(r'pages', PageViewSet)
router.register(r'articles', ArticleViewSet)
router.register(r'media', MediaViewSet)
router.register(r'minister', MinisterViewSet)
router.register(r'cabinet', CabinetMemberViewSet)
router.register(r'departments', DepartmentViewSet)
router.register(r'missions', MissionViewSet)
router.register(r'attributions', AttributionViewSet)

urlpatterns = [
    path('', include(router.urls)),
    
    # JWT Authentication endpoints
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    
    path('auth/', include('rest_framework.urls', namespace='rest_framework')),
]
