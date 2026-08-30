from django.urls import path
from .views import PublishedProductListView, PublishedProductDetailView

urlpatterns = [
    path("catalog/", PublishedProductListView.as_view(), name="catalog-list"),
    path("catalog/<slug:slug>/", PublishedProductDetailView.as_view(), name="catalog-detail"),
]