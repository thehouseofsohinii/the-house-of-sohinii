from rest_framework import serializers
from .models import Product, ProductImage


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ["id", "image", "alt_text"]


class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = [
            "id",
            "title",
            "product_code",
            "description",
            "short_description",
            "fabric",
            "design",
            "occasion",
            "price",
            "category",
            "featured",
            "is_published",
            "slug",
            "created_at",
            "updated_at",
            "images",
        ]