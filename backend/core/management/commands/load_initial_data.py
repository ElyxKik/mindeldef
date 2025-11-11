import os
from django.core.management.base import BaseCommand
from django.utils import timezone
from django.utils.text import slugify
from django.core.files.base import ContentFile
from django.conf import settings

from media_library.models import MediaCategory, Media
from pages.models import (
    PageCategory, Page, Minister, CabinetMember, 
    Department, Mission, Attribution
)
from news.models import ArticleCategory, Tag, Article, Document, Event

class Command(BaseCommand):
    help = 'Charge les données initiales pour le CMS du Ministère délégué à la Défense'

    def handle(self, *args, **options):
        self.stdout.write(self.style.SUCCESS('Chargement des données initiales...'))
        
        # Création des catégories de médias
        self.create_media_categories()
        
        # Création des catégories de pages
        self.create_page_categories()
        
        # Création des catégories d'articles
        self.create_article_categories()
        
        # Création des tags
        self.create_tags()
        
        # Création du ministre
        self.create_minister()
        
        # Création des missions
        self.create_missions()
        
        # Création des attributions
        self.create_attributions()
        
        # Création des pages
        self.create_pages()
        
        # Création des articles
        self.create_articles()
        
        self.stdout.write(self.style.SUCCESS('Données initiales chargées avec succès!'))
    
    def create_media_categories(self):
        self.stdout.write('Création des catégories de médias...')
        
        categories = [
            {'name': 'Images', 'slug': 'images', 'description': 'Images et photos du ministère'},
            {'name': 'Documents', 'slug': 'documents', 'description': 'Documents officiels'},
            {'name': 'Vidéos', 'slug': 'videos', 'description': 'Vidéos du ministère'},
            {'name': 'Galerie', 'slug': 'galerie', 'description': 'Galerie photos des événements'},
        ]
        
        for cat in categories:
            MediaCategory.objects.get_or_create(
                slug=cat['slug'],
                defaults={
                    'name': cat['name'],
                    'description': cat['description']
                }
            )
    
    def create_page_categories(self):
        self.stdout.write('Création des catégories de pages...')
        
        categories = [
            {'name': 'Ministère', 'slug': 'ministere', 'description': 'Pages concernant le ministère'},
            {'name': 'FARDC', 'slug': 'fardc', 'description': 'Pages concernant les Forces Armées'},
            {'name': 'Informations', 'slug': 'informations', 'description': 'Pages d\'information générale'},
            {'name': 'Services', 'slug': 'services', 'description': 'Pages de services'},
        ]
        
        for cat in categories:
            PageCategory.objects.get_or_create(
                slug=cat['slug'],
                defaults={
                    'name': cat['name'],
                    'description': cat['description']
                }
            )
    
    def create_article_categories(self):
        self.stdout.write('Création des catégories d\'articles...')
        
        categories = [
            {'name': 'Actualités', 'slug': 'actualites', 'description': 'Actualités du ministère'},
            {'name': 'Communiqués', 'slug': 'communiques', 'description': 'Communiqués officiels'},
            {'name': 'Événements', 'slug': 'evenements', 'description': 'Événements à venir'},
            {'name': 'Interviews', 'slug': 'interviews', 'description': 'Interviews du ministre et des responsables'},
        ]
        
        for cat in categories:
            ArticleCategory.objects.get_or_create(
                slug=cat['slug'],
                defaults={
                    'name': cat['name'],
                    'description': cat['description']
                }
            )
    
    def create_tags(self):
        self.stdout.write('Création des tags...')
        
        tags = [
            'Défense', 'Sécurité', 'FARDC', 'Ministre', 'Formation', 
            'Coopération', 'International', 'Équipement', 'Recrutement'
        ]
        
        for tag_name in tags:
            Tag.objects.get_or_create(
                slug=slugify(tag_name),
                defaults={'name': tag_name}
            )
    
    def create_minister(self):
        self.stdout.write('Création du ministre...')
        
        # Vérifier si un ministre existe déjà
        if not Minister.objects.filter(is_current=True).exists():
            Minister.objects.create(
                name="Jean Dupont",
                title="Ministre délégué à la Défense",
                biography="""
                Jean Dupont est le Ministre délégué à la Défense de la République Démocratique du Congo.
                Nommé en 2023, il est chargé de la mise en œuvre de la politique de défense nationale.
                
                Diplômé de l'École Militaire Supérieure, il a occupé plusieurs postes de responsabilité
                au sein des Forces Armées avant d'être nommé à ce poste ministériel.
                """,
                email="ministre@defense.gouv.cd",
                twitter="https://twitter.com/ministre_defense",
                facebook="https://facebook.com/ministre.defense",
                linkedin="https://linkedin.com/in/ministre-defense",
                is_current=True
            )
    
    def create_missions(self):
        self.stdout.write('Création des missions...')
        
        missions = [
            {
                'title': 'Protection du territoire',
                'description': 'Assurer la défense de l\'intégrité territoriale et la souveraineté nationale',
                'icon': 'shield',
                'color': '#3B82F6'
            },
            {
                'title': 'Formation des forces armées',
                'description': 'Former et équiper les forces armées pour répondre aux défis sécuritaires',
                'icon': 'users',
                'color': '#10B981'
            },
            {
                'title': 'Coopération internationale',
                'description': 'Développer des partenariats stratégiques avec d\'autres nations',
                'icon': 'globe',
                'color': '#6366F1'
            },
            {
                'title': 'Modernisation des équipements',
                'description': 'Renouveler et moderniser les équipements militaires',
                'icon': 'cog',
                'color': '#F59E0B'
            }
        ]
        
        for i, mission in enumerate(missions):
            Mission.objects.get_or_create(
                title=mission['title'],
                defaults={
                    'description': mission['description'],
                    'icon': mission['icon'],
                    'color': mission['color'],
                    'order': i
                }
            )
    
    def create_attributions(self):
        self.stdout.write('Création des attributions...')
        
        attributions = [
            {
                'title': 'Politique de défense nationale',
                'description': 'Élaboration et mise en œuvre de la politique de défense nationale',
                'category': 'Stratégie',
                'icon': 'flag',
                'color': '#3B82F6',
                'legal_reference': 'Article 24 de la Constitution'
            },
            {
                'title': 'Organisation des forces armées',
                'description': 'Organisation et gestion des forces armées de la République',
                'category': 'Organisation',
                'icon': 'sitemap',
                'color': '#10B981',
                'legal_reference': 'Loi organique n°11/012 du 11 août 2011'
            },
            {
                'title': 'Coopération militaire',
                'description': 'Gestion des accords de coopération militaire avec d\'autres pays',
                'category': 'International',
                'icon': 'handshake',
                'color': '#6366F1',
                'legal_reference': 'Décret n°13/005 du 10 janvier 2013'
            }
        ]
        
        for i, attr in enumerate(attributions):
            Attribution.objects.get_or_create(
                title=attr['title'],
                defaults={
                    'description': attr['description'],
                    'category': attr['category'],
                    'icon': attr['icon'],
                    'color': attr['color'],
                    'legal_reference': attr['legal_reference'],
                    'order': i
                }
            )
    
    def create_pages(self):
        self.stdout.write('Création des pages...')
        
        # Récupérer la catégorie Ministère
        try:
            ministere_cat = PageCategory.objects.get(slug='ministere')
            
            # Page d'accueil du ministère
            Page.objects.get_or_create(
                slug='accueil-ministere',
                defaults={
                    'title': 'Le Ministère délégué à la Défense',
                    'subtitle': 'Au service de la sécurité nationale',
                    'content': """
                    <h2>Bienvenue sur le site officiel du Ministère délégué à la Défense</h2>
                    <p>Le Ministère délégué à la Défense est chargé de la mise en œuvre de la politique de défense nationale
                    et de la gestion des Forces Armées de la République Démocratique du Congo (FARDC).</p>
                    
                    <p>Notre mission est d'assurer la protection du territoire national, de garantir la sécurité des citoyens
                    et de contribuer à la paix et à la stabilité régionale.</p>
                    """,
                    'excerpt': 'Découvrez le Ministère délégué à la Défense de la République Démocratique du Congo',
                    'category': ministere_cat,
                    'published': True,
                    'published_at': timezone.now(),
                    'show_in_menu': True,
                    'menu_title': 'Accueil',
                    'order': 0
                }
            )
            
            # Page Missions
            Page.objects.get_or_create(
                slug='missions',
                defaults={
                    'title': 'Nos Missions',
                    'subtitle': 'Les missions du Ministère délégué à la Défense',
                    'content': """
                    <h2>Les missions du Ministère délégué à la Défense</h2>
                    <p>Le Ministère délégué à la Défense remplit plusieurs missions essentielles pour la sécurité nationale :</p>
                    
                    <ul>
                        <li>Protection du territoire national</li>
                        <li>Formation et équipement des forces armées</li>
                        <li>Coopération internationale en matière de défense</li>
                        <li>Modernisation des équipements militaires</li>
                    </ul>
                    """,
                    'excerpt': 'Découvrez les missions du Ministère délégué à la Défense',
                    'category': ministere_cat,
                    'published': True,
                    'published_at': timezone.now(),
                    'show_in_menu': True,
                    'menu_title': 'Missions',
                    'order': 1
                }
            )
            
            # Page Attributions
            Page.objects.get_or_create(
                slug='attributions',
                defaults={
                    'title': 'Nos Attributions',
                    'subtitle': 'Les attributions du Ministère délégué à la Défense',
                    'content': """
                    <h2>Les attributions du Ministère délégué à la Défense</h2>
                    <p>Le Ministère délégué à la Défense dispose de plusieurs attributions définies par la Constitution et les lois de la République :</p>
                    
                    <ul>
                        <li>Élaboration et mise en œuvre de la politique de défense nationale</li>
                        <li>Organisation et gestion des forces armées</li>
                        <li>Gestion des accords de coopération militaire</li>
                    </ul>
                    
                    <h3>Cadre légal</h3>
                    <p>Ces attributions sont définies par l'Article 24 de la Constitution et la Loi organique n°11/012 du 11 août 2011.</p>
                    """,
                    'excerpt': 'Découvrez les attributions légales du Ministère délégué à la Défense',
                    'category': ministere_cat,
                    'published': True,
                    'published_at': timezone.now(),
                    'show_in_menu': True,
                    'menu_title': 'Attributions',
                    'order': 2
                }
            )
            
        except PageCategory.DoesNotExist:
            self.stdout.write(self.style.WARNING('Catégorie Ministère non trouvée, impossible de créer les pages'))
    
    def create_articles(self):
        self.stdout.write('Création des articles...')
        
        # Récupérer la catégorie Actualités
        try:
            actualites_cat = ArticleCategory.objects.get(slug='actualites')
            
            # Article 1
            Article.objects.get_or_create(
                slug='visite-officielle-ministre',
                defaults={
                    'title': 'Visite officielle du Ministre à l\'Est du pays',
                    'subtitle': 'Rencontre avec les troupes déployées dans les zones sensibles',
                    'content': """
                    <h2>Le Ministre délégué à la Défense en visite officielle à l'Est</h2>
                    
                    <p>Le Ministre délégué à la Défense a effectué une visite officielle dans les provinces de l'Est
                    pour rencontrer les troupes déployées dans les zones sensibles et évaluer la situation sécuritaire.</p>
                    
                    <p>Au cours de cette visite, le Ministre a réaffirmé l'engagement du gouvernement à soutenir
                    les forces armées dans leur mission de protection des populations civiles et de sécurisation
                    du territoire national.</p>
                    
                    <h3>Renforcement des capacités opérationnelles</h3>
                    
                    <p>Le Ministre a également annoncé un plan de renforcement des capacités opérationnelles
                    des unités déployées dans la région, avec notamment la livraison prochaine de nouveaux équipements.</p>
                    """,
                    'excerpt': 'Le Ministre délégué à la Défense a effectué une visite officielle dans les provinces de l\'Est pour rencontrer les troupes.',
                    'category': actualites_cat,
                    'author': 'Service de Communication',
                    'published': True,
                    'published_at': timezone.now() - timezone.timedelta(days=5),
                    'featured': True
                }
            )
            
            # Article 2
            Article.objects.get_or_create(
                slug='signature-accord-cooperation',
                defaults={
                    'title': 'Signature d\'un accord de coopération militaire',
                    'subtitle': 'Renforcement de la coopération en matière de formation',
                    'content': """
                    <h2>Signature d'un nouvel accord de coopération militaire</h2>
                    
                    <p>Le Ministère délégué à la Défense a signé aujourd'hui un important accord de coopération
                    militaire avec un pays partenaire, portant principalement sur la formation des officiers
                    et sous-officiers des FARDC.</p>
                    
                    <p>Cet accord prévoit notamment :</p>
                    <ul>
                        <li>L'accueil d'officiers congolais dans les écoles militaires du pays partenaire</li>
                        <li>L'envoi d'instructeurs pour des formations spécialisées en RDC</li>
                        <li>Des échanges d'expertise dans plusieurs domaines techniques</li>
                    </ul>
                    
                    <p>Lors de la cérémonie de signature, le Ministre délégué à la Défense a souligné
                    l'importance de cette coopération pour le renforcement des capacités des FARDC.</p>
                    """,
                    'excerpt': 'Le Ministère délégué à la Défense a signé un important accord de coopération militaire portant sur la formation.',
                    'category': actualites_cat,
                    'author': 'Direction de la Coopération Internationale',
                    'published': True,
                    'published_at': timezone.now() - timezone.timedelta(days=2),
                    'featured': True
                }
            )
            
        except ArticleCategory.DoesNotExist:
            self.stdout.write(self.style.WARNING('Catégorie Actualités non trouvée, impossible de créer les articles'))
