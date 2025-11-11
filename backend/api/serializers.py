from rest_framework import serializers
from media_library.models import Media, MediaCategory
from pages.models import (
    Page, PageCategory, Section, Minister, 
    CabinetMember, Department, Mission, Attribution
)
from news.models import Article, ArticleCategory, Tag, Document, Event

# Sérialiseurs pour Media Library
class MediaCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = MediaCategory
        fields = '__all__'

class MediaSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.name')
    file_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Media
        fields = '__all__'
    
    def get_file_url(self, obj):
        if obj.file:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.file.url)
            return obj.file.url
        return None

# Sérialiseurs pour Pages
class PageCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PageCategory
        fields = '__all__'

class SectionSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Section
        fields = '__all__'
    
    def get_image_url(self, obj):
        if obj.image and obj.image.file:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.image.file.url)
            return obj.image.file.url
        return None

class PageSerializer(serializers.ModelSerializer):
    sections = SectionSerializer(many=True, read_only=True)
    category_name = serializers.ReadOnlyField(source='category.name')
    featured_image_url = serializers.SerializerMethodField()
    banner_image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Page
        fields = '__all__'
    
    def get_featured_image_url(self, obj):
        if obj.featured_image and obj.featured_image.file:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.featured_image.file.url)
            return obj.featured_image.file.url
        return None
    
    def get_banner_image_url(self, obj):
        if obj.banner_image and obj.banner_image.file:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.banner_image.file.url)
            return obj.banner_image.file.url
        return None

class MinisterSerializer(serializers.ModelSerializer):
    photo_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Minister
        fields = '__all__'
    
    def get_photo_url(self, obj):
        if obj.photo and obj.photo.file:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.photo.file.url)
            return obj.photo.file.url
        return None

class CabinetMemberSerializer(serializers.ModelSerializer):
    photo_url = serializers.SerializerMethodField()
    
    class Meta:
        model = CabinetMember
        fields = '__all__'
    
    def get_photo_url(self, obj):
        if obj.photo and obj.photo.file:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.photo.file.url)
            return obj.photo.file.url
        return None

class DepartmentSerializer(serializers.ModelSerializer):
    logo_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Department
        fields = '__all__'
    
    def get_logo_url(self, obj):
        if obj.logo and obj.logo.file:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.logo.file.url)
            return obj.logo.file.url
        return None

class MissionSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Mission
        fields = '__all__'
    
    def get_image_url(self, obj):
        if obj.image and obj.image.file:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.image.file.url)
            return obj.image.file.url
        return None

class AttributionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attribution
        fields = '__all__'

# Sérialiseurs pour News
class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class ArticleCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleCategory
        fields = '__all__'

class ArticleSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.name')
    tags_list = TagSerializer(source='tags', many=True, read_only=True)
    featured_image_url = serializers.SerializerMethodField()
    gallery_images = serializers.SerializerMethodField()
    
    class Meta:
        model = Article
        fields = '__all__'
    
    def get_featured_image_url(self, obj):
        if obj.featured_image and obj.featured_image.file:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.featured_image.file.url)
            return obj.featured_image.file.url
        return None
    
    def get_gallery_images(self, obj):
        request = self.context.get('request')
        gallery_data = []
        
        for image in obj.gallery.all():
            if image.file:
                image_url = image.file.url
                if request:
                    image_url = request.build_absolute_uri(image_url)
                gallery_data.append({
                    'id': image.id,
                    'title': image.title,
                    'url': image_url,
                    'alt_text': image.alt_text
                })
        
        return gallery_data

class DocumentSerializer(serializers.ModelSerializer):
    file_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Document
        fields = '__all__'
    
    def get_file_url(self, obj):
        if obj.file and obj.file.file:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.file.file.url)
            return obj.file.file.url
        return None

class EventSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Event
        fields = '__all__'
    
    def get_image_url(self, obj):
        if obj.image and obj.image.file:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.image.file.url)
            return obj.image.file.url
        return None
