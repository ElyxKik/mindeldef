from django.contrib import admin
from django.utils.html import format_html
from .models import (
    Page, PageCategory, Section, Minister, 
    CabinetMember, Department, Mission, Attribution
)

@admin.register(PageCategory)
class PageCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'created_at', 'is_active')
    list_filter = ('is_active',)
    search_fields = ('name', 'description')
    prepopulated_fields = {'slug': ('name',)}

class SectionInline(admin.StackedInline):
    model = Section
    extra = 1
    fields = ('title', 'content', 'image', 'order', 'background_color')

@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    list_display = ('title', 'language', 'category', 'parent', 'show_in_menu', 'published', 'published_at', 'is_active', 'preview_button')
    list_filter = ('published', 'show_in_menu', 'is_active', 'language', 'category')
    search_fields = ('title', 'subtitle', 'content', 'excerpt')
    prepopulated_fields = {'slug': ('title',)}
    readonly_fields = ('created_at', 'updated_at', 'preview_button')
    inlines = [SectionInline]
    fieldsets = (
        (None, {
            'fields': ('title', 'slug', 'subtitle', 'content', 'excerpt')
        }),
        ('Catégorisation', {
            'fields': ('category', 'parent')
        }),
        ('Médias', {
            'fields': ('featured_image', 'banner_image')
        }),
        ('SEO', {
            'fields': ('meta_title', 'meta_description')
        }),
        ('Menu', {
            'fields': ('show_in_menu', 'menu_title', 'order')
        }),
        ('Publication', {
            'fields': ('published', 'published_at', 'is_active', 'language', 'preview_button')
        }),
    )
    
    def preview_button(self, obj):
        if obj.id:
            return format_html(
                '<a href="/admin/pages/{}/preview/" class="button" target="_blank">Prévisualiser</a>',
                obj.id
            )
        return ""
    preview_button.short_description = 'Prévisualisation'

@admin.register(Minister)
class MinisterAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'is_current', 'language', 'preview_photo', 'is_active')
    list_filter = ('is_current', 'is_active', 'language')
    search_fields = ('name', 'title', 'biography')
    readonly_fields = ('preview_photo',)
    fieldsets = (
        (None, {
            'fields': ('name', 'title', 'biography', 'photo')
        }),
        ('Aperçu', {
            'fields': ('preview_photo',),
        }),
        ('Contacts', {
            'fields': ('email', 'twitter', 'facebook', 'linkedin')
        }),
        ('Statut', {
            'fields': ('is_current', 'is_active', 'language')
        }),
    )
    
    def preview_photo(self, obj):
        if obj.photo and obj.photo.file:
            return format_html('<img src="{}" style="max-height: 100px;" />', obj.photo.file.url)
        return "Pas de photo"
    
    preview_photo.short_description = 'Photo'

@admin.register(CabinetMember)
class CabinetMemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'position', 'language', 'preview_photo', 'order', 'is_active')
    list_filter = ('is_active', 'language')
    search_fields = ('name', 'position', 'biography')
    readonly_fields = ('preview_photo',)
    fieldsets = (
        (None, {
            'fields': ('name', 'position', 'biography', 'photo', 'order')
        }),
        ('Aperçu', {
            'fields': ('preview_photo',),
        }),
        ('Contact', {
            'fields': ('email',)
        }),
        ('Statut', {
            'fields': ('is_active', 'language')
        }),
    )
    
    def preview_photo(self, obj):
        if obj.photo and obj.photo.file:
            return format_html('<img src="{}" style="max-height: 100px;" />', obj.photo.file.url)
        return "Pas de photo"
    
    preview_photo.short_description = 'Photo'

@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'director', 'language', 'preview_logo', 'order', 'is_active')
    list_filter = ('is_active', 'language')
    search_fields = ('name', 'description', 'director')
    readonly_fields = ('preview_logo',)
    fieldsets = (
        (None, {
            'fields': ('name', 'description', 'logo', 'order')
        }),
        ('Aperçu', {
            'fields': ('preview_logo',),
        }),
        ('Direction', {
            'fields': ('director', 'email', 'phone')
        }),
        ('Statut', {
            'fields': ('is_active', 'language')
        }),
    )
    
    def preview_logo(self, obj):
        if obj.logo and obj.logo.file:
            return format_html('<img src="{}" style="max-height: 100px;" />', obj.logo.file.url)
        return "Pas de logo"
    
    preview_logo.short_description = 'Logo'

@admin.register(Mission)
class MissionAdmin(admin.ModelAdmin):
    list_display = ('title', 'icon', 'color', 'language', 'order', 'is_active')
    list_filter = ('is_active', 'language')
    search_fields = ('title', 'description')
    fieldsets = (
        (None, {
            'fields': ('title', 'description', 'image', 'order')
        }),
        ('Style', {
            'fields': ('icon', 'color')
        }),
        ('Statut', {
            'fields': ('is_active', 'language')
        }),
    )

@admin.register(Attribution)
class AttributionAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'icon', 'color', 'language', 'order', 'is_active')
    list_filter = ('category', 'is_active', 'language')
    search_fields = ('title', 'description', 'legal_reference')
    fieldsets = (
        (None, {
            'fields': ('title', 'description', 'category', 'order')
        }),
        ('Style', {
            'fields': ('icon', 'color')
        }),
        ('Référence légale', {
            'fields': ('legal_reference',)
        }),
        ('Statut', {
            'fields': ('is_active', 'language')
        }),
    )
