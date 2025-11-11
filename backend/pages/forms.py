from django import forms
from .models import Page, PageCategory
from ckeditor_uploader.widgets import CKEditorUploadingWidget

class PageForm(forms.ModelForm):
    content = forms.CharField(widget=CKEditorUploadingWidget())
    
    class Meta:
        model = Page
        fields = ['title', 'slug', 'subtitle', 'content', 'excerpt', 'category', 
                  'parent', 'featured_image', 'banner_image', 'show_in_menu', 
                  'menu_title', 'order', 'meta_title', 'meta_description', 
                  'published', 'published_at', 'is_active', 'language']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-input'}),
            'slug': forms.TextInput(attrs={'class': 'form-input'}),
            'subtitle': forms.TextInput(attrs={'class': 'form-input'}),
            'excerpt': forms.Textarea(attrs={'class': 'form-input', 'rows': 3}),
            'category': forms.Select(attrs={'class': 'form-input'}),
            'parent': forms.Select(attrs={'class': 'form-input'}),
            'menu_title': forms.TextInput(attrs={'class': 'form-input'}),
            'order': forms.NumberInput(attrs={'class': 'form-input'}),
            'meta_title': forms.TextInput(attrs={'class': 'form-input'}),
            'meta_description': forms.Textarea(attrs={'class': 'form-input', 'rows': 2}),
            'published_at': forms.DateTimeInput(attrs={'class': 'form-input', 'type': 'datetime-local'}),
            'language': forms.Select(attrs={'class': 'form-input'}),
        }
