from django.db import models
from django.utils.translation import gettext_lazy as _
from core.models import BaseModel, TranslatableModel

class MediaCategory(BaseModel):
    """Catégorie de médias"""
    name = models.CharField(_('Nom'), max_length=100)
    slug = models.SlugField(_('Slug'), max_length=100, unique=True)
    description = models.TextField(_('Description'), blank=True)
    
    class Meta:
        verbose_name = _('Catégorie de médias')
        verbose_name_plural = _('Catégories de médias')
    
    def __str__(self):
        return self.name

class Media(BaseModel):
    """Modèle pour les fichiers médias (images, documents, vidéos)"""
    MEDIA_TYPES = (
        ('image', _('Image')),
        ('document', _('Document')),
        ('video', _('Vidéo')),
        ('audio', _('Audio')),
    )
    
    title = models.CharField(_('Titre'), max_length=200)
    description = models.TextField(_('Description'), blank=True)
    file = models.FileField(_('Fichier'), upload_to='uploads/%Y/%m/')
    media_type = models.CharField(_('Type de média'), max_length=20, choices=MEDIA_TYPES)
    category = models.ForeignKey(MediaCategory, on_delete=models.SET_NULL, null=True, blank=True, related_name='media')
    alt_text = models.CharField(_('Texte alternatif'), max_length=255, blank=True, help_text=_('Texte alternatif pour les images (accessibilité)'))
    copyright = models.CharField(_('Copyright'), max_length=255, blank=True)
    featured = models.BooleanField(_('Mis en avant'), default=False)
    
    class Meta:
        verbose_name = _('Média')
        verbose_name_plural = _('Médias')
    
    def __str__(self):
        return self.title
    
    @property
    def file_url(self):
        return self.file.url if self.file else None
    
    @property
    def is_image(self):
        return self.media_type == 'image'
    
    @property
    def is_document(self):
        return self.media_type == 'document'
    
    @property
    def is_video(self):
        return self.media_type == 'video'
    
    @property
    def is_audio(self):
        return self.media_type == 'audio'
