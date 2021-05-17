from django.contrib import admin
from django.urls import include, path
from accounts.views import ListUsers, CustomAuthToken

urlpatterns = [
    path('api/users/', ListUsers.as_view()),
    path('api/token/auth/', CustomAuthToken.as_view()),
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),
    path('api/', include('accounts.api.urls')),
]
