from django import forms
from .models import Article, ArticleCategory
from ckeditor_uploader.widgets import CKEditorUploadingWidget

class ArticleForm(forms.ModelForm):
    content = forms.CharField(widget=CKEditorUploadingWidget())
    
    class Meta:
        model = Article
        fields = ['title', 'slug', 'subtitle', 'content', 'excerpt', 'category', 
                  'featured_image', 'author', 'published_at', 'published', 
                  'featured', 'meta_title', 'meta_description', 'language']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-input'}),
            'slug': forms.TextInput(attrs={'class': 'form-input'}),
            'subtitle': forms.TextInput(attrs={'class': 'form-input'}),
            'excerpt': forms.Textarea(attrs={'class': 'form-input', 'rows': 3}),
            'category': forms.Select(attrs={'class': 'form-input'}),
            'author': forms.Select(attrs={'class': 'form-input'}),
            'published_at': forms.DateTimeInput(attrs={'class': 'form-input', 'type': 'datetime-local'}),
            'meta_title': forms.TextInput(attrs={'class': 'form-input'}),
            'meta_description': forms.Textarea(attrs={'class': 'form-input', 'rows': 2}),
            'language': forms.Select(attrs={'class': 'form-input'}),
        }
