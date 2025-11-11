from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils import timezone

class BaseModel(models.Model):
    """Modèle de base pour tous les modèles du CMS"""
    created_at = models.DateTimeField(_('Date de création'), auto_now_add=True)
    updated_at = models.DateTimeField(_('Date de modification'), auto_now=True)
    is_active = models.BooleanField(_('Actif'), default=True)
    
    class Meta:
        abstract = True
        ordering = ['-created_at']

class TranslatableModel(BaseModel):
    """Modèle de base pour les contenus traduisibles"""
    language = models.CharField(_('Langue'), max_length=2, choices=[
        ('fr', _('Français')),
        ('en', _('Anglais')),
    ], default='fr')
    
    class Meta:
        abstract = True
