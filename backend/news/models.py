from django.db import models
from django.utils.translation import gettext_lazy as _
from ckeditor_uploader.fields import RichTextUploadingField
from django.utils.text import slugify
from core.models import BaseModel, TranslatableModel
from media_library.models import Media

class ArticleCategory(BaseModel):
    """Catégorie d'articles"""
    name = models.CharField(_('Nom'), max_length=100)
    slug = models.SlugField(_('Slug'), max_length=100, unique=True)
    description = models.TextField(_('Description'), blank=True)
    
    class Meta:
        verbose_name = _('Catégorie d\'article')
        verbose_name_plural = _('Catégories d\'articles')
    
    def __str__(self):
        return self.name

class Tag(BaseModel):
    """Tags pour les articles"""
    name = models.CharField(_('Nom'), max_length=50)
    slug = models.SlugField(_('Slug'), max_length=50, unique=True)
    
    class Meta:
        verbose_name = _('Tag')
        verbose_name_plural = _('Tags')
    
    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

class Article(TranslatableModel):
    """Modèle pour les articles de presse et actualités"""
    title = models.CharField(_('Titre'), max_length=200)
    slug = models.SlugField(_('Slug'), max_length=200, unique=True)
    subtitle = models.CharField(_('Sous-titre'), max_length=255, blank=True)
    content = RichTextUploadingField(_('Contenu'))
    excerpt = models.TextField(_('Extrait'), blank=True)
    category = models.ForeignKey(ArticleCategory, on_delete=models.SET_NULL, null=True, blank=True, related_name='articles')
    tags = models.ManyToManyField(Tag, blank=True, related_name='articles')
    featured_image = models.ForeignKey(Media, on_delete=models.SET_NULL, null=True, blank=True, related_name='article_featured_images')
    gallery = models.ManyToManyField(Media, blank=True, related_name='article_galleries')
    author = models.CharField(_('Auteur'), max_length=100, blank=True)
    meta_title = models.CharField(_('Titre SEO'), max_length=100, blank=True)
    meta_description = models.TextField(_('Description SEO'), blank=True)
    published = models.BooleanField(_('Publié'), default=False)
    published_at = models.DateTimeField(_('Date de publication'), null=True, blank=True)
    featured = models.BooleanField(_('Mis en avant'), default=False)
    
    class Meta:
        verbose_name = _('Article')
        verbose_name_plural = _('Articles')
        ordering = ['-published_at', 'title']
    
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

class Document(TranslatableModel):
    """Modèle pour les documents officiels"""
    title = models.CharField(_('Titre'), max_length=200)
    description = models.TextField(_('Description'), blank=True)
    file = models.ForeignKey(Media, on_delete=models.CASCADE, related_name='official_documents')
    document_type = models.CharField(_('Type de document'), max_length=100, blank=True)
    reference = models.CharField(_('Référence'), max_length=100, blank=True)
    publication_date = models.DateField(_('Date de publication'), null=True, blank=True)
    featured = models.BooleanField(_('Mis en avant'), default=False)
    
    class Meta:
        verbose_name = _('Document officiel')
        verbose_name_plural = _('Documents officiels')
        ordering = ['-publication_date', 'title']
    
    def __str__(self):
        return self.title

class Event(TranslatableModel):
    """Modèle pour les événements"""
    title = models.CharField(_('Titre'), max_length=200)
    slug = models.SlugField(_('Slug'), max_length=200, unique=True)
    description = models.TextField(_('Description'))
    start_date = models.DateTimeField(_('Date de début'))
    end_date = models.DateTimeField(_('Date de fin'), null=True, blank=True)
    location = models.CharField(_('Lieu'), max_length=200, blank=True)
    image = models.ForeignKey(Media, on_delete=models.SET_NULL, null=True, blank=True, related_name='event_images')
    featured = models.BooleanField(_('Mis en avant'), default=False)
    
    class Meta:
        verbose_name = _('Événement')
        verbose_name_plural = _('Événements')
        ordering = ['-start_date']
    
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
