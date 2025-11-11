from django.apps import AppConfig


class CoreConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'core'
    
    def ready(self):
        """Initialisation de l'application lors du démarrage"""
        # Import ici pour éviter les importations circulaires
        from core.admin_dashboard import setup_admin_site
        setup_admin_site()
