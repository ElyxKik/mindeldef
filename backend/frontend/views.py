from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.urls import reverse
from django.core.paginator import Paginator

from pages.models import Page, PageCategory
from news.models import Article, ArticleCategory
from media_library.models import Media
from pages.forms import PageForm
from news.forms import ArticleForm
from media_library.forms import MediaForm

# Vue d'accueil
def index(request):
    recent_pages = Page.objects.filter(is_active=True).order_by('-updated_at')[:5]
    recent_articles = Article.objects.filter(is_active=True).order_by('-published_at')[:5]
    recent_media = Media.objects.all().order_by('-created_at')[:6]
    
    context = {
        'recent_pages': recent_pages,
        'recent_articles': recent_articles,
        'recent_media': recent_media,
    }
    
    return render(request, 'frontend/index.html', context)

# Vues pour les pages
def page_list(request):
    category_id = request.GET.get('category')
    search_query = request.GET.get('q')
    
    pages = Page.objects.filter(is_active=True)
    
    if category_id:
        pages = pages.filter(category_id=category_id)
    
    if search_query:
        pages = pages.filter(title__icontains=search_query)
    
    paginator = Paginator(pages.order_by('-updated_at'), 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    categories = PageCategory.objects.all()
    
    context = {
        'page_obj': page_obj,
        'categories': categories,
        'selected_category': category_id,
        'search_query': search_query,
    }
    
    return render(request, 'frontend/pages/list.html', context)

def page_detail(request, slug):
    page = get_object_or_404(Page, slug=slug, is_active=True)
    
    context = {
        'page': page,
    }
    
    return render(request, 'frontend/pages/detail.html', context)

@login_required
def page_create(request):
    if request.method == 'POST':
        form = PageForm(request.POST, request.FILES)
        if form.is_valid():
            page = form.save()
            messages.success(request, f'La page "{page.title}" a été créée avec succès.')
            return redirect('frontend:page_detail', slug=page.slug)
    else:
        form = PageForm()
    
    context = {
        'form': form,
        'title': 'Créer une nouvelle page',
    }
    
    return render(request, 'frontend/pages/form.html', context)

@login_required
def page_edit(request, slug):
    page = get_object_or_404(Page, slug=slug)
    
    if request.method == 'POST':
        form = PageForm(request.POST, request.FILES, instance=page)
        if form.is_valid():
            page = form.save()
            messages.success(request, f'La page "{page.title}" a été modifiée avec succès.')
            return redirect('frontend:page_detail', slug=page.slug)
    else:
        form = PageForm(instance=page)
    
    context = {
        'form': form,
        'page': page,
        'title': f'Modifier la page: {page.title}',
    }
    
    return render(request, 'frontend/pages/form.html', context)

@login_required
def page_delete(request, slug):
    page = get_object_or_404(Page, slug=slug)
    
    if request.method == 'POST':
        title = page.title
        page.delete()
        messages.success(request, f'La page "{title}" a été supprimée avec succès.')
        return redirect('frontend:pages')
    
    context = {
        'page': page,
    }
    
    return render(request, 'frontend/pages/delete.html', context)

# Vues pour les articles
def article_list(request):
    category_id = request.GET.get('category')
    search_query = request.GET.get('q')
    
    articles = Article.objects.filter(is_active=True)
    
    if category_id:
        articles = articles.filter(category_id=category_id)
    
    if search_query:
        articles = articles.filter(title__icontains=search_query)
    
    paginator = Paginator(articles.order_by('-published_at'), 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    categories = ArticleCategory.objects.all()
    
    context = {
        'page_obj': page_obj,
        'categories': categories,
        'selected_category': category_id,
        'search_query': search_query,
    }
    
    return render(request, 'frontend/articles/list.html', context)

def article_detail(request, slug):
    article = get_object_or_404(Article, slug=slug, is_active=True)
    
    context = {
        'article': article,
    }
    
    return render(request, 'frontend/articles/detail.html', context)

@login_required
def article_create(request):
    if request.method == 'POST':
        form = ArticleForm(request.POST, request.FILES)
        if form.is_valid():
            article = form.save()
            messages.success(request, f'L\'article "{article.title}" a été créé avec succès.')
            return redirect('frontend:article_detail', slug=article.slug)
    else:
        form = ArticleForm()
    
    context = {
        'form': form,
        'title': 'Créer un nouvel article',
    }
    
    return render(request, 'frontend/articles/form.html', context)

@login_required
def article_edit(request, slug):
    article = get_object_or_404(Article, slug=slug)
    
    if request.method == 'POST':
        form = ArticleForm(request.POST, request.FILES, instance=article)
        if form.is_valid():
            article = form.save()
            messages.success(request, f'L\'article "{article.title}" a été modifié avec succès.')
            return redirect('frontend:article_detail', slug=article.slug)
    else:
        form = ArticleForm(instance=article)
    
    context = {
        'form': form,
        'article': article,
        'title': f'Modifier l\'article: {article.title}',
    }
    
    return render(request, 'frontend/articles/form.html', context)

@login_required
def article_delete(request, slug):
    article = get_object_or_404(Article, slug=slug)
    
    if request.method == 'POST':
        title = article.title
        article.delete()
        messages.success(request, f'L\'article "{title}" a été supprimé avec succès.')
        return redirect('frontend:articles')
    
    context = {
        'article': article,
    }
    
    return render(request, 'frontend/articles/delete.html', context)

# Vues pour les médias
def media_list(request):
    search_query = request.GET.get('q')
    
    media_items = Media.objects.all()
    
    if search_query:
        media_items = media_items.filter(title__icontains=search_query)
    
    paginator = Paginator(media_items.order_by('-created_at'), 12)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    context = {
        'page_obj': page_obj,
        'search_query': search_query,
    }
    
    return render(request, 'frontend/media/list.html', context)

def media_detail(request, pk):
    media = get_object_or_404(Media, pk=pk)
    
    context = {
        'media': media,
    }
    
    return render(request, 'frontend/media/detail.html', context)

@login_required
def media_create(request):
    if request.method == 'POST':
        form = MediaForm(request.POST, request.FILES)
        if form.is_valid():
            media = form.save()
            messages.success(request, f'Le média "{media.title}" a été créé avec succès.')
            return redirect('frontend:media_detail', pk=media.pk)
    else:
        form = MediaForm()
    
    context = {
        'form': form,
        'title': 'Ajouter un nouveau média',
    }
    
    return render(request, 'frontend/media/form.html', context)

@login_required
def media_edit(request, pk):
    media = get_object_or_404(Media, pk=pk)
    
    if request.method == 'POST':
        form = MediaForm(request.POST, request.FILES, instance=media)
        if form.is_valid():
            media = form.save()
            messages.success(request, f'Le média "{media.title}" a été modifié avec succès.')
            return redirect('frontend:media_detail', pk=media.pk)
    else:
        form = MediaForm(instance=media)
    
    context = {
        'form': form,
        'media': media,
        'title': f'Modifier le média: {media.title}',
    }
    
    return render(request, 'frontend/media/form.html', context)

@login_required
def media_delete(request, pk):
    media = get_object_or_404(Media, pk=pk)
    
    if request.method == 'POST':
        title = media.title
        media.delete()
        messages.success(request, f'Le média "{title}" a été supprimé avec succès.')
        return redirect('frontend:media')
    
    context = {
        'media': media,
    }
    
    return render(request, 'frontend/media/delete.html', context)
