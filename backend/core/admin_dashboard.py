from django.contrib import admin
from django.urls import path
from django.shortcuts import render, get_object_or_404
from django.db.models import Count
from django.utils.html import format_html
from django.contrib.admin.views.decorators import staff_member_required
from django.utils.translation import gettext_lazy as _
from django.http import Http404

# Création d'une instance du site d'administration personnalisé
ministere_admin_site = admin.AdminSite(name='ministere_admin')
ministere_admin_site.site_header = _('Administration du Ministère délégué à la Défense')
ministere_admin_site.site_title = _('Ministère délégué à la Défense')
ministere_admin_site.index_title = _('Tableau de bord')

@staff_member_required
def dashboard_view(request):
    """Vue du tableau de bord personnalisé pour l'administration"""
    
    # Import ici pour éviter les importations circulaires
    from media_library.models import Media
    from pages.models import Page, Minister, CabinetMember, Department
    from news.models import Article, Document, Event
    
    # Statistiques générales
    stats = {
        'media_count': Media.objects.count(),
        'pages_count': Page.objects.count(),
        'articles_count': Article.objects.count(),
        'documents_count': Document.objects.count(),
        'events_count': Event.objects.count(),
    }
    
    # Articles récents
    recent_articles = Article.objects.order_by('-created_at')[:5]
    
    # Pages récentes
    recent_pages = Page.objects.order_by('-created_at')[:5]
    
    # Médias récents
    recent_media = Media.objects.order_by('-created_at')[:5]
    
    # Événements à venir
    upcoming_events = Event.objects.filter(
        is_active=True
    ).order_by('start_date')[:5]
    
    # Contexte pour le template
    context = {
        'title': _('Tableau de bord'),
        'stats': stats,
        'recent_articles': recent_articles,
        'recent_pages': recent_pages,
        'recent_media': recent_media,
        'upcoming_events': upcoming_events,
        'has_permission': True,
        'is_popup': False,
        'site_header': ministere_admin_site.site_header,
        'site_title': ministere_admin_site.site_title,
        'index_title': ministere_admin_site.index_title,
    }
    
    return render(request, 'admin/dashboard.html', context)

# Configuration des URLs du site d'administration
ministere_admin_site.get_urls = lambda: [
    path('dashboard/', ministere_admin_site.admin_view(dashboard_view), name='dashboard'),
    path('pages/<int:page_id>/preview/', ministere_admin_site.admin_view(preview_page_view), name='preview_page'),
    path('articles/<int:article_id>/preview/', ministere_admin_site.admin_view(preview_article_view), name='preview_article'),
] + admin.AdminSite.get_urls(ministere_admin_site)

# Redirection de la page d'accueil vers le tableau de bord
ministere_admin_site.index = dashboard_view

@staff_member_required
def preview_page_view(request, page_id):
    """Vue de prévisualisation pour les pages"""
    from pages.models import Page
    
    try:
        page = get_object_or_404(Page, id=page_id)
        
        context = {
            'title': _('Prévisualisation de la page: {0}').format(page.title),
            'object_type': _('Page'),
            'object_id': page.id,
            'preview_url': f'/api/pages/{page.slug}/preview/',
            'edit_url': f'/admin/pages/page/{page.id}/change/',
            'list_url': '/admin/pages/page/',
            'has_permission': True,
            'is_popup': False,
            'site_header': ministere_admin_site.site_header,
            'site_title': ministere_admin_site.site_title,
            'index_title': ministere_admin_site.index_title,
        }
        
        return render(request, 'admin/preview.html', context)
    except Exception as e:
        raise Http404(f"Page introuvable: {str(e)}")

@staff_member_required
def preview_article_view(request, article_id):
    """Vue de prévisualisation pour les articles"""
    from news.models import Article
    
    try:
        article = get_object_or_404(Article, id=article_id)
        
        context = {
            'title': _('Prévisualisation de l\'article: {0}').format(article.title),
            'object_type': _('Article'),
            'object_id': article.id,
            'preview_url': f'/api/articles/{article.slug}/preview/',
            'edit_url': f'/admin/news/article/{article.id}/change/',
            'list_url': '/admin/news/article/',
            'has_permission': True,
            'is_popup': False,
            'site_header': ministere_admin_site.site_header,
            'site_title': ministere_admin_site.site_title,
            'index_title': ministere_admin_site.index_title,
        }
        
        return render(request, 'admin/preview.html', context)
    except Exception as e:
        raise Http404(f"Article introuvable: {str(e)}")

def setup_admin_site():
    """Configure le site d'administration avec tous les modèles"""
    # Import ici pour éviter les importations circulaires
    from django.contrib.auth.models import User, Group
    from media_library.models import Media, MediaCategory
    from pages.models import (
        Page, PageCategory, Minister, CabinetMember, 
        Department, Mission, Attribution
    )
    from news.models import Article, ArticleCategory, Tag, Document, Event
    
    # Enregistrement des modèles d'authentification Django
    ministere_admin_site.register(User)
    ministere_admin_site.register(Group)
    
    # Enregistrement des modèles de la médiathèque
    ministere_admin_site.register(MediaCategory)
    ministere_admin_site.register(Media)
    
    # Enregistrement des modèles de pages
    ministere_admin_site.register(PageCategory)
    ministere_admin_site.register(Page)
    ministere_admin_site.register(Minister)
    ministere_admin_site.register(CabinetMember)
    ministere_admin_site.register(Department)
    ministere_admin_site.register(Mission)
    ministere_admin_site.register(Attribution)
    
    # Enregistrement des modèles d'actualités
    ministere_admin_site.register(ArticleCategory)
    ministere_admin_site.register(Tag)
    ministere_admin_site.register(Article)
    ministere_admin_site.register(Document)
    ministere_admin_site.register(Event)
