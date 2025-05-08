# settings.py

INSTALLED_APPS = [
    ...
    'rest_framework',
    'tourist_destinations',
    'events',
    'testimonials',
]

# API configuration
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ],
}

# Custom settings for the new API endpoints
TOURIST_DESTINATIONS_API = {
    'DEFAULT_PAGE_SIZE': 10,
    'MAX_PAGE_SIZE': 100,
}

EVENTS_API = {
    'DEFAULT_PAGE_SIZE': 10,
    'MAX_PAGE_SIZE': 100,
}

TESTIMONIALS_API = {
    'DEFAULT_PAGE_SIZE': 10,
    'MAX_PAGE_SIZE': 100,
}
