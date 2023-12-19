"""
Django settings for mapss project.
"""

import os
import arches
import json
import sys
import inspect
from django.utils.translation import gettext_lazy as _

try:
    from arches.settings import *
except ImportError:
    pass

APP_ROOT = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))

ARCHES_APPLICATIONS = ()

STATICFILES_DIRS = build_staticfiles_dirs(
    root_dir=ROOT_DIR,
    app_root=APP_ROOT,
    arches_applications=ARCHES_APPLICATIONS,
)

STATIC_ROOT = os.path.join(ROOT_DIR, "staticfiles")
STATIC_URL = "/static/"

WEBPACK_LOADER = {
    "DEFAULT": {
        "STATS_FILE": os.path.join(APP_ROOT, "webpack/webpack-stats.json"),
    },
}

DATATYPE_LOCATIONS.append("mapss.datatypes")
FUNCTION_LOCATIONS.append("mapss.functions")
ETL_MODULE_LOCATIONS.append("mapss.etl_modules")
SEARCH_COMPONENT_LOCATIONS.append("mapss.search_components")
TEMPLATES = build_templates_config(
    root_dir=ROOT_DIR,
    debug=DEBUG,
    app_root=APP_ROOT,
    arches_applications=ARCHES_APPLICATIONS,
)
TEMPLATES[0]["OPTIONS"]["context_processors"].append("mapss.utils.context_processors.project_settings")
APP_PATHNAME = ""

BYPASS_CARDINALITY_TILE_VALIDATION = False

LOCALE_PATHS.append(os.path.join(APP_ROOT, "locale"))

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ROOT_URLCONF = "mapss.urls"
# a prefix to append to all elasticsearch indexes, note: must be lower case
ELASTICSEARCH_PREFIX = "mapss"

LANGUAGES = [
    ("en", _("English")),
    ("mn", _("Mongolian")),
    # ("de", _("German")),
    # ("en-gb", _("British English")),
    # ("es", _("Spanish")),
    # ("ar", _("Arabic")),
]

SHOW_LANGUAGE_SWITCH = len(LANGUAGES) > 1

INSTALLED_APPS = (
    "webpack_loader",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django.contrib.gis",
    "arches",
    "arches.app.models",
    "arches.management",
    "guardian",
    "captcha",
    "revproxy",
    "corsheaders",
    "oauth2_provider",
    "django_celery_results",
    "mapss",
    "compressor",
    # "debug_toolbar"
)


MIDDLEWARE = [
    # 'debug_toolbar.middleware.DebugToolbarMiddleware',
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    #'arches.app.utils.middleware.TokenMiddleware',
    "django.middleware.locale.LocaleMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "arches.app.utils.middleware.ModifyAuthorizationHeader",
    "oauth2_provider.middleware.OAuth2TokenMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "arches.app.utils.middleware.SetAnonymousUser",
]

ALLOWED_HOSTS = ["localhost"]

SYSTEM_SETTINGS_LOCAL_PATH = os.path.join(APP_ROOT, "system_settings", "System_Settings.json")
WSGI_APPLICATION = "mapss.wsgi.application"

RESOURCE_IMPORT_LOG = os.path.join(APP_ROOT, "logs", "resource_import.log")

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {"console": {"format": "%(asctime)s %(name)-12s %(levelname)-8s %(message)s",},},
    "handlers": {
        "file": {
            "level": "WARNING",  # DEBUG, INFO, WARNING, ERROR
            "class": "logging.FileHandler",
            "filename": os.path.join(APP_ROOT, "arches.log"),
            "formatter": "console",
        },
        "console": {
            "level": "WARNING",
            "class": "logging.StreamHandler",
            "formatter": "console",
        },
    },
    "loggers": {
        "arches": {
            "handlers": ["file", "console"],
            "level": "WARNING",
            "propagate": True,
        }
    },
}

# Absolute filesystem path to the directory that will hold user-uploaded files.
MEDIA_ROOT = os.path.join(APP_ROOT)

# Sets default max upload size to 15MB
DATA_UPLOAD_MAX_MEMORY_SIZE = 15728640

# Unique session cookie ensures that logins are treated separately for each app
SESSION_COOKIE_NAME = "mapss"

CACHES = {
    "default": {"BACKEND": "django.core.cache.backends.locmem.LocMemCache", "LOCATION": "unique-snowflake"},
    "user_permission": {
        "BACKEND": "django.core.cache.backends.db.DatabaseCache",
        "LOCATION": "user_permission_cache",
    },
}

# Identify the usernames and duration (seconds) for which you want to cache the time wheel
CACHE_BY_USER = {"anonymous": 3600 * 24}

TILE_CACHE_TIMEOUT = 600  # seconds
GRAPH_MODEL_CACHE_TIMEOUT = 3600 * 24 * 30  # seconds * hours * days = ~1mo
USER_GRAPH_PERMITTED_CARDS_TIMEOUT = 3600 * 24 * 30  # seconds * hours * days = ~1mo
USER_GRAPH_CARDWIDGETS_TIMEOUT = 3600 * 24 * 30  # seconds * hours * days = ~1mo

OAUTH_CLIENT_ID = ""

APP_TITLE = "MAPSS"
COPYRIGHT_TEXT = "All Rights Reserved."
COPYRIGHT_YEAR = "2019"

CELERY_BROKER_URL = "amqp://guest:guest@localhost"
CELERY_ACCEPT_CONTENT = ["json"]
CELERY_RESULT_BACKEND = "django-db"  # Use 'django-cache' if you want to use your cache as your backend
CELERY_TASK_SERIALIZER = "json"
ONTOLOGY_NAMESPACES = {
    "http://purl.org/dc/terms/": "dcterms",
    "http://purl.org/dc/elements/1.1/": "dc",
    "http://schema.org/": "schema",
    "http://www.w3.org/2004/02/skos/core#": "skos",
    "http://www.w3.org/2000/01/rdf-schema#": "rdfs",
    "http://xmlns.com/foaf/0.1/": "foaf",
    "http://www.w3.org/2001/XMLSchema#": "xsd",
    "https://linked.art/ns/terms/": "la",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#": "rdf",
    "http://www.cidoc-crm.org/cidoc-crm/": "",
    "http://www.ics.forth.gr/isl/CRMdig/": "",
    "http://www.ics.forth.gr/isl/CRMgeo/": "geo",
    "http://www.ics.forth.gr/isl/CRMsci/": "sci",
}

DOCKER = False

ARCHES_NAMESPACE_FOR_DATA_EXPORT = 'http://localhost:8001'

try:
    from .package_settings import *
except ImportError:
    try:
        from package_settings import *
    except ImportError as e:
        pass

try:
    from .settings_local import *
except ImportError as e:
    try:
        from settings_local import *
    except ImportError as e:
        pass

if DOCKER:
    try:
        from .settings_docker import *
    except ImportError:
        pass


if __name__ == "__main__":
    transmit_webpack_django_config(
        root_dir=ROOT_DIR,
        app_root=APP_ROOT,
        arches_applications=ARCHES_APPLICATIONS,
        public_server_address=PUBLIC_SERVER_ADDRESS,
        static_url=STATIC_URL,
        webpack_development_server_port=WEBPACK_DEVELOPMENT_SERVER_PORT,
    )
