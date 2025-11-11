from django.contrib import admin
from django.utils.html import format_html
from .models import Article, ArticleCategory, Tag, Document, Event

@admin.register(ArticleCategory)
class ArticleCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'created_at', 'is_active')
    list_filter = ('is_active',)
    search_fields = ('name', 'description')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'created_at', 'is_active')
    list_filter = ('is_active',)
    search_fields = ('name',)
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'language', 'category', 'author', 'featured', 'published', 'published_at', 'is_active', 'preview_button')
    list_filter = ('published', 'featured', 'is_active', 'language', 'category', 'tags')
    search_fields = ('title', 'subtitle', 'content', 'excerpt', 'author')
    prepopulated_fields = {'slug': ('title',)}
    readonly_fields = ('created_at', 'updated_at', 'preview_button')
    filter_horizontal = ('tags', 'gallery')
    fieldsets = (
        (None, {
            'fields': ('title', 'slug', 'subtitle', 'content', 'excerpt', 'author')
        }),
        ('Catégorisation', {
            'fields': ('category', 'tags')
        }),
        ('Médias', {
            'fields': ('featured_image', 'gallery')
        }),
        ('SEO', {
            'fields': ('meta_title', 'meta_description')
        }),
        ('Publication', {
            'fields': ('published', 'published_at', 'featured', 'is_active', 'language', 'preview_button')
        }),
    )
    
    def preview_button(self, obj):
        if obj.id:
            return format_html(
                '<a href="/admin/articles/{}/preview/" class="button" target="_blank">Prévisualiser</a>',
                obj.id
            )
        return ""
    preview_button.short_description = 'Prévisualisation'

@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    list_display = ('title', 'language', 'document_type', 'reference', 'publication_date', 'featured', 'is_active')
    list_filter = ('document_type', 'featured', 'is_active', 'language', 'publication_date')
    search_fields = ('title', 'description', 'reference')
    fieldsets = (
        (None, {
            'fields': ('title', 'description', 'file')
        }),
        ('Classification', {
            'fields': ('document_type', 'reference', 'publication_date')
        }),
        ('Statut', {
            'fields': ('featured', 'is_active', 'language')
        }),
    )

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'language', 'start_date', 'end_date', 'location', 'featured', 'is_active')
    list_filter = ('featured', 'is_active', 'language')
    search_fields = ('title', 'description', 'location')
    prepopulated_fields = {'slug': ('title',)}
    fieldsets = (
        (None, {
            'fields': ('title', 'slug', 'description', 'image')
        }),
        ('Détails', {
            'fields': ('start_date', 'end_date', 'location')
        }),
        ('Statut', {
            'fields': ('featured', 'is_active', 'language')
        }),
    )
