from django.http import HttpResponse
from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer


def home_view(request):
    return HttpResponse("The House of Sohinii backend is running.")


class PublishedProductListView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(is_published=True).order_by("-created_at")


class PublishedProductDetailView(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    lookup_field = "slug"

    def get_queryset(self):
        return Product.objects.filter(is_published=True)