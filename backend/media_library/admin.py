from django.contrib import admin
from django.utils.html import format_html
from .models import Media, MediaCategory

@admin.register(MediaCategory)
class MediaCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'created_at', 'is_active')
    list_filter = ('is_active',)
    search_fields = ('name', 'description')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Media)
class MediaAdmin(admin.ModelAdmin):
    list_display = ('title', 'media_type', 'category', 'preview_image', 'created_at', 'is_active')
    list_filter = ('media_type', 'category', 'is_active', 'created_at')
    search_fields = ('title', 'description', 'alt_text', 'copyright')
    readonly_fields = ('preview_image',)
    fieldsets = (
        (None, {
            'fields': ('title', 'description', 'file', 'media_type', 'category')
        }),
        ('Métadonnées', {
            'fields': ('alt_text', 'copyright', 'featured')
        }),
        ('Aperçu', {
            'fields': ('preview_image',),
        }),
        ('Statut', {
            'fields': ('is_active',),
        }),
    )
    
    def preview_image(self, obj):
        if obj.is_image and obj.file:
            return format_html('<img src="{}" style="max-height: 100px; max-width: 300px;" />', obj.file.url)
        elif obj.is_document and obj.file:
            return format_html('<a href="{}" target="_blank">Télécharger le document</a>', obj.file.url)
        return "Pas d'aperçu disponible"
    
    preview_image.short_description = 'Aperçu'
