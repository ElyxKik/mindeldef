from rest_framework import viewsets, filters, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from django.utils import timezone

from media_library.models import Media, MediaCategory
from pages.models import (
    Page, PageCategory, Section, Minister, 
    CabinetMember, Department, Mission, Attribution
)
from news.models import Article, ArticleCategory, Tag, Document, Event

from .serializers import (
    MediaSerializer, MediaCategorySerializer,
    PageSerializer, PageCategorySerializer, SectionSerializer,
    MinisterSerializer, CabinetMemberSerializer, DepartmentSerializer,
    MissionSerializer, AttributionSerializer,
    ArticleSerializer, ArticleCategorySerializer, TagSerializer,
    DocumentSerializer, EventSerializer
)

# Vues pour Media Library
class MediaViewSet(viewsets.ModelViewSet):
    queryset = Media.objects.all()
    serializer_class = MediaSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'description', 'media_type']
    ordering_fields = ['created_at', 'title', 'media_type']
    
    @action(detail=False, methods=['get'])
    def images(self, request):
        images = Media.objects.filter(media_type='image')
        serializer = self.get_serializer(images, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def documents(self, request):
        documents = Media.objects.filter(media_type='document')
        serializer = self.get_serializer(documents, many=True)
        return Response(serializer.data)

class MediaCategoryViewSet(viewsets.ModelViewSet):
    queryset = MediaCategory.objects.all()
    serializer_class = MediaCategorySerializer

# Vues pour Pages
class PageViewSet(viewsets.ModelViewSet):
    queryset = Page.objects.all()
    serializer_class = PageSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'content', 'excerpt']
    ordering_fields = ['created_at', 'title', 'order']
    lookup_field = 'slug'
    
    @action(detail=True, methods=['get'], permission_classes=[IsAdminUser])
    def preview(self, request, slug=None):
        """Prévisualisation d'une page pour les administrateurs"""
        page = self.get_object()
        serializer = self.get_serializer(page)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def menu_items(self, request):
        menu_pages = Page.objects.filter(show_in_menu=True, is_active=True)
        serializer = self.get_serializer(menu_pages, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def published(self, request):
        published_pages = Page.objects.filter(
            published=True, 
            is_active=True,
            published_at__lte=timezone.now()
        )
        serializer = self.get_serializer(published_pages, many=True)
        return Response(serializer.data)

class PageCategoryViewSet(viewsets.ModelViewSet):
    queryset = PageCategory.objects.all()
    serializer_class = PageCategorySerializer

class MinisterViewSet(viewsets.ModelViewSet):
    queryset = Minister.objects.all()
    serializer_class = MinisterSerializer
    
    @action(detail=False, methods=['get'])
    def current(self, request):
        try:
            current_minister = Minister.objects.get(is_current=True)
            serializer = self.get_serializer(current_minister)
            return Response(serializer.data)
        except Minister.DoesNotExist:
            return Response({"detail": "Aucun ministre actuel n'a été défini."}, status=404)

class CabinetMemberViewSet(viewsets.ModelViewSet):
    queryset = CabinetMember.objects.all().order_by('order')
    serializer_class = CabinetMemberSerializer

class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all().order_by('order')
    serializer_class = DepartmentSerializer

class MissionViewSet(viewsets.ModelViewSet):
    queryset = Mission.objects.all().order_by('order')
    serializer_class = MissionSerializer

class AttributionViewSet(viewsets.ModelViewSet):
    queryset = Attribution.objects.all().order_by('order')
    serializer_class = AttributionSerializer

# Vues pour News
class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'content', 'excerpt']
    ordering_fields = ['published_at', 'created_at', 'title']
    lookup_field = 'slug'
    
    @action(detail=True, methods=['get'], permission_classes=[IsAdminUser])
    def preview(self, request, slug=None):
        """Prévisualisation d'un article pour les administrateurs"""
        article = self.get_object()
        serializer = self.get_serializer(article)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def published(self, request):
        published_articles = Article.objects.filter(
            published=True, 
            is_active=True,
            published_at__lte=timezone.now()
        ).order_by('-published_at')
        serializer = self.get_serializer(published_articles, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        featured_articles = Article.objects.filter(
            featured=True, 
            published=True,
            is_active=True,
            published_at__lte=timezone.now()
        ).order_by('-published_at')
        serializer = self.get_serializer(featured_articles, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def by_category(self, request):
        category_slug = request.query_params.get('slug', None)
        if category_slug is None:
            return Response({"detail": "Le paramètre 'slug' est requis."}, status=400)
        
        try:
            category = ArticleCategory.objects.get(slug=category_slug)
            articles = Article.objects.filter(
                category=category,
                published=True,
                is_active=True,
                published_at__lte=timezone.now()
            ).order_by('-published_at')
            serializer = self.get_serializer(articles, many=True)
            return Response(serializer.data)
        except ArticleCategory.DoesNotExist:
            return Response({"detail": "Catégorie non trouvée."}, status=404)

class ArticleCategoryViewSet(viewsets.ModelViewSet):
    queryset = ArticleCategory.objects.all()
    serializer_class = ArticleCategorySerializer

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all().order_by('-publication_date')
    serializer_class = DocumentSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'description', 'reference', 'document_type']
    ordering_fields = ['publication_date', 'title']
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        featured_docs = Document.objects.filter(featured=True, is_active=True).order_by('-publication_date')
        serializer = self.get_serializer(featured_docs, many=True)
        return Response(serializer.data)

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by('-start_date')
    serializer_class = EventSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'description', 'location']
    ordering_fields = ['start_date', 'title']
    
    @action(detail=False, methods=['get'])
    def upcoming(self, request):
        upcoming_events = Event.objects.filter(
            start_date__gte=timezone.now(),
            is_active=True
        ).order_by('start_date')
        serializer = self.get_serializer(upcoming_events, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        featured_events = Event.objects.filter(
            featured=True,
            is_active=True
        ).order_by('-start_date')
        serializer = self.get_serializer(featured_events, many=True)
        return Response(serializer.data)
