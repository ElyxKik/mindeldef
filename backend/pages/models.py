from django.db import models
from django.utils.translation import gettext_lazy as _
from ckeditor_uploader.fields import RichTextUploadingField
from django.utils.text import slugify
from core.models import BaseModel, TranslatableModel
from media_library.models import Media

class PageCategory(BaseModel):
    """Catégorie de pages"""
    name = models.CharField(_('Nom'), max_length=100)
    slug = models.SlugField(_('Slug'), max_length=100, unique=True)
    description = models.TextField(_('Description'), blank=True)
    
    class Meta:
        verbose_name = _('Catégorie de page')
        verbose_name_plural = _('Catégories de pages')
    
    def __str__(self):
        return self.name

class Page(TranslatableModel):
    """Modèle pour les pages du site"""
    title = models.CharField(_('Titre'), max_length=200)
    slug = models.SlugField(_('Slug'), max_length=200, unique=True)
    subtitle = models.CharField(_('Sous-titre'), max_length=255, blank=True)
    content = RichTextUploadingField(_('Contenu'))
    excerpt = models.TextField(_('Extrait'), blank=True)
    category = models.ForeignKey(PageCategory, on_delete=models.SET_NULL, null=True, blank=True, related_name='pages')
    featured_image = models.ForeignKey(Media, on_delete=models.SET_NULL, null=True, blank=True, related_name='page_featured_images')
    banner_image = models.ForeignKey(Media, on_delete=models.SET_NULL, null=True, blank=True, related_name='page_banner_images')
    meta_title = models.CharField(_('Titre SEO'), max_length=100, blank=True)
    meta_description = models.TextField(_('Description SEO'), blank=True)
    published = models.BooleanField(_('Publié'), default=False)
    published_at = models.DateTimeField(_('Date de publication'), null=True, blank=True)
    parent = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='children')
    order = models.PositiveIntegerField(_('Ordre'), default=0)
    show_in_menu = models.BooleanField(_('Afficher dans le menu'), default=False)
    menu_title = models.CharField(_('Titre dans le menu'), max_length=100, blank=True)
    
    class Meta:
        verbose_name = _('Page')
        verbose_name_plural = _('Pages')
        ordering = ['order', 'title']
    
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

class Section(BaseModel):
    """Section de contenu pour une page"""
    page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name='sections')
    title = models.CharField(_('Titre'), max_length=200, blank=True)
    content = models.TextField(_('Contenu'))
    image = models.ForeignKey(Media, on_delete=models.SET_NULL, null=True, blank=True, related_name='section_images')
    order = models.PositiveIntegerField(_('Ordre'), default=0)
    background_color = models.CharField(_('Couleur de fond'), max_length=20, blank=True)
    
    class Meta:
        verbose_name = _('Section')
        verbose_name_plural = _('Sections')
        ordering = ['order']
    
    def __str__(self):
        return f"{self.page.title} - {self.title if self.title else 'Section ' + str(self.order)}"

class Minister(TranslatableModel):
    """Modèle pour les informations du Ministre"""
    name = models.CharField(_('Nom complet'), max_length=200)
    title = models.CharField(_('Titre'), max_length=200)
    biography = models.TextField(_('Biographie'))
    photo = models.ForeignKey(Media, on_delete=models.SET_NULL, null=True, blank=True, related_name='minister_photos')
    email = models.EmailField(_('Email'), blank=True)
    twitter = models.URLField(_('Twitter'), blank=True)
    facebook = models.URLField(_('Facebook'), blank=True)
    linkedin = models.URLField(_('LinkedIn'), blank=True)
    is_current = models.BooleanField(_('Ministre actuel'), default=True)
    
    class Meta:
        verbose_name = _('Ministre')
        verbose_name_plural = _('Ministres')
    
    def __str__(self):
        return self.name

class CabinetMember(TranslatableModel):
    """Modèle pour les membres du cabinet"""
    name = models.CharField(_('Nom complet'), max_length=200)
    position = models.CharField(_('Poste'), max_length=200)
    biography = models.TextField(_('Biographie'), blank=True)
    photo = models.ForeignKey(Media, on_delete=models.SET_NULL, null=True, blank=True, related_name='cabinet_photos')
    email = models.EmailField(_('Email'), blank=True)
    order = models.PositiveIntegerField(_('Ordre'), default=0)
    
    class Meta:
        verbose_name = _('Membre du cabinet')
        verbose_name_plural = _('Membres du cabinet')
        ordering = ['order', 'name']
    
    def __str__(self):
        return f"{self.name} - {self.position}"

class Department(TranslatableModel):
    """Modèle pour les départements du ministère"""
    name = models.CharField(_('Nom'), max_length=200)
    description = models.TextField(_('Description'))
    director = models.CharField(_('Directeur'), max_length=200, blank=True)
    email = models.EmailField(_('Email'), blank=True)
    phone = models.CharField(_('Téléphone'), max_length=20, blank=True)
    logo = models.ForeignKey(Media, on_delete=models.SET_NULL, null=True, blank=True, related_name='department_logos')
    order = models.PositiveIntegerField(_('Ordre'), default=0)
    
    class Meta:
        verbose_name = _('Département')
        verbose_name_plural = _('Départements')
        ordering = ['order', 'name']
    
    def __str__(self):
        return self.name

class Mission(TranslatableModel):
    """Modèle pour les missions du ministère"""
    title = models.CharField(_('Titre'), max_length=200)
    description = models.TextField(_('Description'))
    icon = models.CharField(_('Icône'), max_length=50, blank=True, help_text=_('Nom de l\'icône (ex: shield, users, etc.)'))
    color = models.CharField(_('Couleur'), max_length=20, blank=True, help_text=_('Code couleur hexadécimal (ex: #FF5733)'))
    image = models.ForeignKey(Media, on_delete=models.SET_NULL, null=True, blank=True, related_name='mission_images')
    order = models.PositiveIntegerField(_('Ordre'), default=0)
    
    class Meta:
        verbose_name = _('Mission')
        verbose_name_plural = _('Missions')
        ordering = ['order', 'title']
    
    def __str__(self):
        return self.title

class Attribution(TranslatableModel):
    """Modèle pour les attributions du ministère"""
    title = models.CharField(_('Titre'), max_length=200)
    description = models.TextField(_('Description'))
    category = models.CharField(_('Catégorie'), max_length=100, blank=True)
    icon = models.CharField(_('Icône'), max_length=50, blank=True)
    color = models.CharField(_('Couleur'), max_length=20, blank=True)
    legal_reference = models.TextField(_('Référence légale'), blank=True)
    order = models.PositiveIntegerField(_('Ordre'), default=0)
    
    class Meta:
        verbose_name = _('Attribution')
        verbose_name_plural = _('Attributions')
        ordering = ['order', 'title']
    
    def __str__(self):
        return self.title
