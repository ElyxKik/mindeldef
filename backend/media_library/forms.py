from django import forms
from .models import Media

class MediaForm(forms.ModelForm):
    class Meta:
        model = Media
        fields = ['title', 'description', 'file', 'media_type', 'category', 'alt_text', 'copyright', 'featured']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-input'}),
            'description': forms.Textarea(attrs={'class': 'form-input', 'rows': 3}),
            'media_type': forms.Select(attrs={'class': 'form-input'}),
            'category': forms.Select(attrs={'class': 'form-input'}),
            'alt_text': forms.TextInput(attrs={'class': 'form-input'}),
            'copyright': forms.TextInput(attrs={'class': 'form-input'}),
        }
